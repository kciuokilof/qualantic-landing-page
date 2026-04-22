Strategic Context
Low-quality or obviously incorrect values appearing in customer-facing products directly impact our credibility and customer retention. When users encounter obvious data errors in SalesOS, it creates damages trust, and increases the likelihood that customers turn to competitors, also it might create support escalations to remove the error. 

Since our AI features depend heavily on clean input data, poor data quality also leads to degraded performance in downstream ML and LLM-based systems. 

Addressing data-quality issues proactively—before they ever reach customers—is essential for protecting product reputation and enabling trustworthy AI.

Current Challenges and Opportunities
Business teams report that certain data-quality issues are both visible and should be preventable. For example, in the PTI individuals table, the region column is intended to represent regions within a country. However, some records contain country names or city names instead. These issues are easy for customers to notice, yet difficult to fully eliminate with rule-based validation alone.

Rule-based systems remain valuable, but they only detect conditions teams can explicitly define. Many unexpected or unusual values slip through because they do not violate any rule. This creates an operational gap that machine learning is well-suited to fill.

Why Machine Learning Helps
Machine learning can analyze terabytes of data at low cost and detect patterns that do not match any predefined rule. This makes ML a powerful complementary layer in a broader data-quality strategy. It can support string column validation, not only numerical.

Embeddings
To detect anomalies in text fields, we first convert words into vector representations (embeddings). Words that share properties—such as “red” and “green,” which are both colors and adjectives—end up with similar values in certain dimensions. These embeddings allow ML models to reason about semantic similarity and allow further analyses between strings.

Autoencoders for Anomaly Detection
An autoencoder is a neural network trained to reproduce its inputs. During training, it learns what typical data looks like by compressing and reconstructing examples. When the model later receives an unusual or unexpected value, it struggles to reconstruct it accurately. This high reconstruction error signals a likely anomaly.

In practice:

Most valid values reconstruct well (low error).

Unusual, inconsistent, or semantically incorrect values reconstruct poorly (high error).

These high-error cases can be routed to review teams or automated systems for further evaluation.

 

https://discoverorg.atlassian.net/wiki/spaces/~71202005fe7979b7f74427adad2876d3097990/whiteboard/202314383453?atlOrigin=eyJpIjoiZDM3NzE0Yzk5MmMzNGVlMTliMzg1YWQ0NDc2MGJhNjIiLCJwIjoiYyJ9
ML as Part of a Broader Data-Quality Mesh
ML-based anomaly detection is not intended to replace existing tools. Instead, it adds a new detection layer that expands our coverage:

Rule-based checks (e.g., Telmai) handle known, well-defined conditions.

ML-based checks detect issues no one has thought to write rules for. 

Together, these complementary layers form a mesh of validation methods that reinforce each other and significantly improve overall data-quality resilience.

Operational Use of the ML Pipeline
A flexible ML pipeline allows multiple operational benefits:

Send anomalies to review teams for expert validation.

Forward anomalies to an LLM for automated assessment or enrichment.

Produce pipeline health metrics and alerts.

Run A/B tests across pipeline versions to measure improvements.

Reuse the same pipeline approach across many datasets and domains.

This creates a scalable, cost-efficient system that continuously improves over time.

Feedback Loop and Continuous Improvement
Once anomalies are detected, they enter a review workflow. Confirmed data-quality issues feed back into the system in two ways:

Enhanced rule-based checks for known issues.

Improved ML models via retraining or fine-tuning.

This creates a reinforcement cycle where both human expertise and machine learning grow more effective, reducing false positives and improving accuracy over time.

Data Quality as Code
A long-term vision for this initiative is to enable “Data Quality as Code.”

This means:

Each team registers the datasets they own.

They configure validation parameters declaratively (no ML expertise required).

The pipeline runs automatically, integrated with review rooms, monitoring tools, and operational systems.

Hyperparameters and model components can be tuned automatically.

The system works across clouds and can be easily extended to new data sources.

This boosts team autonomy and assigns data-quality responsibility to the teams that own the data, enabling them to apply useful checks during processing while considering the associated costs.

Business Drivers
Reduce bizarre or incorrect values before they reach customers.

Proactively detect issues to protect product credibility.

Increase customer trust and satisfaction.

Improve AI and ML product performance by ensuring cleaner inputs.

Use pipeline health metrics to identify weak points in upstream systems.

Enables future utilisation of enabled health metrics.

Technical Drivers
More cost-effective than heavy manual review or LLM-only validation.

Provides a foundation for a scalable, long-term software initiative.

Easily extensible as new datasets, algorithms, or use cases emerge.

Supports monitoring via dashboards, alerts, and automated reporting.

Enables CI/CD and rapid experimentation.

Strengthens engineering expertise and fosters a data-driven culture.

Roadmap
We begin by validating feasibility on real data, then convert the findings into a production pipeline, and ultimately build a self-service system for all data teams.

1. Proof of Concept (PoC)
Objective: Validate the feasibility and value of ML-based anomaly detection for PTI data.

Activities:

Conduct R&D in a Jupyter notebook (local or Vertex AI).

Experiment with multiple PTI columns and different model configurations.

Review results with the PTI domain owner to ensure practical value.

PoC will take into consideration other models, like VAE, SVM, Isolation forest, and other more lightweight algorithms, not only Autoencoders.

Build PoC code using production-ready logic to seed the MVP.

Requirements:

Demonstrate scalability across all PTI columns and beyond.

Include automatic hyperparameter tuning.

Use generic preprocessing patterns applicable to many column types.

Provide cost estimates for multiple deployment designs.

2. Minimum Viable Product (MVP)
Objective: Build a scalable pipeline that detects anomalies given only a datasource and column reference. Prepare for multi-cloud integration.

Activities:

Finalize functional and non-functional requirements based on PoC results.

Architect a cloud-ready, scalable solution.

Decide on cloud and multi-cloud deployment strategy.

Implement CI/CD for rapid prototyping and safe rollout of new pipeline versions.

Ensure each component can be easily replaced or upgraded.

Components:

Data ingestion

Preprocessing

Feature engineering

Model training

Model evaluation

Deployment

Monitoring

3. Data Quality as Code
Objective: Build a framework enabling teams to onboard datasets and maintain pipelines with minimal manual effort.

Capabilities:

Integrate with review rooms, monitoring tools, and internal systems.

Provide a full end-to-end workflow from anomaly detection to issue resolution.

Allow teams to configure pipelines through a declarative interface.

Offer cost-optimization features.

Remain multi-cloud and cloud-agnostic.

Enable semi-supervised learning and controlled pipeline reconfiguration.

Organizational Outcome
This initiative will give ZI a scalable, proactive, and intelligent data-quality system that:

Detects unexpected issues before they reach customers.

Reduces manual validation cycles and associated costs.

Increases customer trust by improving the accuracy and reliability of our products.

Strengthens downstream AI and ML systems through cleaner input data.

Empowers teams to own and automate their data-quality processes.

The result is a durable, extensible foundation for high-quality data across the entire organization.