import { useRouter } from "next/router";
import NavItem from "./navItem";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="py-4 px-6 text-sm font-medium bg-slate-800">
      <ul className="flex space-x-3">
        <NavItem href="/" isActive={router.pathname === "/"}>
          Home
        </NavItem>
        <NavItem href="/about" isActive={router.pathname === "/about"}>
          About
        </NavItem>
      </ul>
    </nav>
  );
}
