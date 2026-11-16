const links = ["home", "about", "projects", "experience", "contact"];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-bold">YN</a>
        <ul className="hidden gap-6 text-sm text-zinc-400 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className="capitalize hover:text-white">{l}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
          Hire Me
        </a>
      </nav>
    </header>
  );
}