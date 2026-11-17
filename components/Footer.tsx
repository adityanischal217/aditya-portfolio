
export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--background)] px-6 py-8 text-center text-sm text-[var(--text-muted)] transition-colors duration-300">
      © {new Date().getFullYear()} Aditya Nischal. All rights reserved.
    </footer>
  );
}
