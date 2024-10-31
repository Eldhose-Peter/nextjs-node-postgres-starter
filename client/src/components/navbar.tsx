import NavItem from "./navItem";

export default function Navbar() {
  return (
    <nav className="py-4 px-6 text-sm font-medium">
      <ul className="flex space-x-3">
        <NavItem href="/new" isActive>
          New Releases
        </NavItem>
        <NavItem href="/top">Top Rated</NavItem>
        <NavItem href="/picks">Vincent’s Picks</NavItem>
      </ul>
    </nav>
  );
}
