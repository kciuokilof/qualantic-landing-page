Goal of the Lab
The purpose of the upcoming lab is to help me succeed in communicating with our client and in the future implementation of the solution. Additionally, we will evaluate whether the idea has the potential to become the backbone of a broader product.
To achieve this goal, I will introduce you to:
The client’s data ecosystem
The problem we are trying to solve
The proposed idea as a remedy for the problem
Once we reach a common understanding of the background and the proposed workflow, it will help me identify any gaps or flaws in my explanation. After that, we will evaluate the idea more deeply by stepping into the roles of data owners from different domains. This part will be interactive — I will prepare materials to help you get into character.
In addition to the business-level assessment, I will present an architectural overview and the scope of the upcoming PoC v2 from a technical perspective. This part will help transform the idea into a production-ready system.
As a bonus, there will be an LLM game. I will prepare a dataset, and our goal will be to write a prompt that identifies the top 10 most obvious data quality issues in the dataset. I hope this exercise will also inspire additional prompt ideas.
As a participant in the lab, you will gain:
Insight into the data observability market
Exposure to semantic anomaly detection systems
Familiarity with selected ML algorithms and practical insights from the field
The opportunity to step into the role of a data owner
Insight into real client communication
The opportunity to evaluate an ML system architecture
Problem
Modern data observability platforms are very strong at detecting global and aggregate issues — volume drops, freshness delays, schema changes, distribution drift, and multivariate metric anomalies. These approaches prevent a large class of failures, but they still leave a meaningful gap: row-level semantic anomalies.
Row-level semantic anomalies occur when individual records violate implicit semantic or contextual expectations, even though all aggregate metrics look healthy. These issues often propagate undetected into downstream systems, where they surface as:
customer-facing bugs,


broken business logic,


degraded ML model performance,


incorrect analytics or reporting.


Examples include invalid names, nonsensical job titles, or contextually inconsistent field combinations. These failures are typically discovered late because they are local, sparse, and semantically defined, not statistically dominant.

Key Insight
Most high-impact data quality failures are local and contextual rather than global and statistical.
Traditional questions like:
“Did this column drift?”
miss cases where the real question should be:
“Does this individual row still make sense, given the semantic context of related fields?”
Detecting this class of issues requires reasoning at the record level and incorporating semantic understanding, not just numeric distributions.

What Has Changed Recently (Why This Is Now Practical)
While the core problem is not new, several recent developments make this approach significantly more viable in production today:
High-quality text and categorical embeddings

 Modern embedding models capture semantic similarity far better than previous NLP techniques, enabling meaningful distance and clustering analysis on free-text and categorical fields.


Lower-cost, scalable ML infrastructure

 Unsupervised and semi-supervised anomaly detection can now be applied incrementally and selectively rather than across entire datasets.


LLMs as reasoning and explainability layers

 LLMs can translate abstract anomaly scores into human-understandable explanations and optionally validate borderline cases. 


Mature data observability foundations

 Platforms already collect schema, lineage, statistics, and historical context, which can be leveraged to scope and constrain semantic analysis.


These changes shift semantic row-level validation from an experimental idea into a feasible, productizable capability when applied selectively.


Core Idea
Introduce a configurable, unsupervised semantic anomaly detection layer that evaluates records row by row using semantic representations rather than only aggregate statistics.
Instead of relying on brittle rules or exhaustive dictionaries, the system learns what “normal semantic values” look like for a given context and flags deviations.
Core properties
Column-agnostic: Works across text and categorical fields


Context-aware: Evaluates values relative to related columns


Configuration-driven: Scoped and constrained to reduce false positives


Reusable: Applicable across datasets and domains


Scalable: Applied selectively, not indiscriminately
Context Definition & Configuration (Critical Design Choice)
A major challenge — and design focus — is defining context. This approach explicitly acknowledges that context must be configurable and constrained, not fully automatic.
Context sets can be defined through multiple complementary mechanisms:
Schema-based configuration
 Relationships inferred from schema structure, data types, and naming conventions.


User-defined configuration
Explicit grouping of fields (e.g., first_name, last_name, email) where semantic coherence matters.


Column metadata & descriptions
Column descriptions and documentation provide strong semantic signals.


LLM-assisted automation
 LLMs can propose context groupings by interpreting schema, column names, and descriptions, with human review.


This hybrid approach avoids over-automation while significantly reducing manual effort.

High-Level Architecture
1. Embedding Layer
Text and categorical values are converted into semantic vector representations.


Embeddings may be field-specific or shared, depending on configuration.


Applied selectively to high-risk columns (e.g., names, titles, descriptions).


2. Anomaly Detection Layer
Unsupervised models learn the distribution of normal semantic values within each context set.
Supported techniques include:
Distance-based methods (kNN, centroid distance)


Isolation-based models (Isolation Forest)


Reconstruction-based approaches (e.g., autoencoders, where appropriate)


Each record receives an anomaly score relative to its learned semantic context.
3. Precision & Explainability Layer (Optional but Recommended)
To control false positives and improve usability:
Only top-ranked or borderline anomalies are passed to an LLM.


The LLM can:
Validate whether the anomaly is likely real
Generate a human-readable explanation
Suggest a likely issue category (e.g., organization vs person, abbreviation-only value)
This avoids full-dataset LLM scanning (which completely doesn’t scale in BigData) while adding semantic reasoning where it matters most.
Explainability (Can LLMs Do This?)
Yes — LLMs are particularly well-suited for explainability, even if they are not used for primary detection.
Explainability can include:
Translating anomaly signals into natural language explanations


Identifying why a value is semantically inconsistent


Comparing a flagged value against typical examples


Suggesting potential remediations or classifications


Example explanation:
“This value appears to be an organization or medical specialty rather than a person’s first name.”
This dramatically improves trust and adoption compared to opaque anomaly scores alone.


Concrete Examples (Internal PoC)
Example 1 — first_name
Value
Issue
THC Pharmacy
Organization name, not a person
Nephrology
Medical specialty, not a person
American Red Cross House
Organization name

These records pass volume and distribution checks but violate semantic expectations at the row level.
Example 2 — job_title
Value
Issue
Classification Cutsoms Brokarage
Spelling errors and malformed phrase
IFA BSNL Alwar
Abbreviations + organization + location
Bcg
Ambiguous abbreviation

Multivariate and context-aware approaches improve detection quality further.

Limitations & Known Weak Points
This approach explicitly acknowledges its constraints:
False positives on rare but valid values
 Uncommon yet legitimate entries may be flagged as anomalies, especially when they fall outside the learned semantic norm.


Domain dependence of embeddings
 Semantic detection works best when the domain is well represented in the embedding space. Highly specialized or niche domains may require custom embeddings or additional tuning.


Cold-start sensitivity
 The system requires a sufficient baseline of “normal” data to learn meaningful patterns. This can be partially mitigated by leveraging larger LLMs or external priors during early stages.


Semantic drift over time
 Language and naming conventions evolve. Without monitoring and periodic retraining, models may become stale and misclassify newly valid patterns.


Operational and cost considerations
 Applying semantic checks indiscriminately across all columns and rows is neither cost-effective nor necessary. Selective, high-impact deployment yields significantly better ROI. Internal PoCs indicate that well-scoped pipelines can remain low-cost.


Multilingual data challenges
 Columns containing multiple languages may reduce embedding quality and anomaly precision unless language-aware handling is introduced.


These risks are mitigated through configuration, scoped deployment, and LLM-assisted validation — not eliminated entirely.

Why This Matters
Why This Matters
This capability is not a replacement for existing data observability techniques. It is a complementary layer that addresses a specific but high-impact class of failures that aggregate, statistical metrics cannot capture.
More importantly, introducing semantic embeddings at the row level unlocks an entire class of non-linear data quality signals that go beyond traditional rule-based or distribution-based checks.
By representing values and contexts in a semantic vector space, data quality can be evaluated using relationships such as:
semantic distance and neighborhood density,


contextual coherence across multiple fields,


cluster membership and boundary violations,


deviation from learned semantic archetypes rather than fixed thresholds.


These signals are inherently non-linear and contextual, making them well-suited for detecting subtle but meaningful quality issues that would otherwise remain invisible.
While this proposal focuses primarily on unsupervised semantic anomaly detection, the same embedding foundation enables additional approaches, including:
classification-based quality checks, where known invalid or undesirable patterns can be explicitly learned or created from user descriptions,


semi-supervised models that incorporate user feedback over time,


quality scoring functions that evolve with the data rather than relying on static rules, applied for ex. on  A/B testing

Closing
This concept began as a practical PoC and evolved into a broader framework for ML-assisted semantic data quality. While not trivial to productize, recent advances make it realistic when designed with constraints, configurability, and explainability at the core.
I’m interested in exploring whether this approach:
fits as an advanced capability within an observability platform,


should remain selectively applied rather than universal,


It’s not a time, flaws are too concerning.


Happy to discuss further.

