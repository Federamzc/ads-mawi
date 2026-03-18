export default function Footer() {
  return (
    <footer className="border-t border-dark-700 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a
              href="#"
              className="text-2xl font-bold tracking-tight bg-gradient-to-r from-accent-400 to-emerald-400 bg-clip-text text-transparent"
            >
              MAWI
            </a>
            <p className="text-sm text-text-muted mt-1">
              Strategic consulting for small businesses.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a href="#services" className="hover:text-text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-text-primary transition-colors">
              About
            </a>
            <a href="#results" className="hover:text-text-primary transition-colors">
              Results
            </a>
            <a href="#contact" className="hover:text-text-primary transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} MAWI Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
