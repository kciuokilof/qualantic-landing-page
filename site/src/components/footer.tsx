export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Qualantic. All rights reserved.</p>
        <a
          href="mailto:contact@qualantic.com"
          className="hover:text-gray-700 transition-colors"
        >
          contact@qualantic.com
        </a>
      </div>
    </footer>
  );
}
