import { useRouter } from "next/router";
import NavItem from "./navItem";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/auth/me", {
          method: "GET",
          credentials: "include" // Include credentials (like cookies) in the request
        });

        if (!response.ok) {
          // If the response is not ok (e.g., unauthorized), set username to null
          if (response.status === 401) {
            setUsername(null);
          }
          return;
        }

        const data = await response.json();
        setUsername(data.username); // Assuming the response has a username field
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [router]);

  const handleLoginClick = () => {
    router.push("/login"); // Navigate to the login page
  };

  return (
    <nav className="py-4 px-6 text-sm font-medium bg-slate-800 flex justify-between items-center">
      <ul className="flex space-x-3">
        <NavItem href="/" isActive={router.pathname === "/"}>
          Home
        </NavItem>
        <NavItem href="/about" isActive={router.pathname === "/about"}>
          About
        </NavItem>
      </ul>
      <div className="flex items-center">
        {username ? (
          <span className="text-white">{username}</span> // Show username if available
        ) : (
          <button
            onClick={handleLoginClick}
            className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
