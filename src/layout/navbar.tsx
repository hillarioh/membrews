import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "@/context";

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logoutUser } = useAuth();
  return (
    <nav
      className="flex items-center justify-between px-6 py-4"
      style={{ backgroundColor: "#89A8B2" }}
    >
      <div className="flex gap-3 items-center">
        <User className="text-[rgb(241,240,232)] w-6 h-6" />
        <NavLink
          to="/"
          className="text-2xl font-bold text-[rgb(241,240,232)] flex items-center gap-2"
        >
          Member Manager
        </NavLink>
      </div>
      <div className="flex gap-4">
        {!isAuthenticated ? (
          <>
            <Button
              variant="outline"
              className="bg-[rgb(241,240,232)] text-[#89A8B2] hover:bg-[#B3C8CF] hover:text-[rgb(241,240,232)]"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              variant="default"
              className="bg-[rgb(241,240,232)] text-[#89A8B2] hover:bg-[#B3C8CF] hover:text-[rgb(241,240,232)]"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </>
        ) : (
          <Button
            variant="default"
            className="bg-[rgb(241,240,232)] text-[#89A8B2] hover:bg-[#B3C8CF] hover:text-[rgb(241,240,232)]"
            onClick={() => logoutUser()}
          >
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
}
