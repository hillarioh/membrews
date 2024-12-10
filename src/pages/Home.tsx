import React from "react";
import { Button } from "@/components/ui/button"; // shadcn/ui button
import { Card, CardContent } from "@/components/ui/card"; // shadcn/ui card
import {
  User,
  Activity,
  Lock,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useNavigate } from "react-router";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Navbar */}
      {/* <nav
        className="flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: "#89A8B2" }}
      >
        <h1 className="text-2xl font-bold text-[rgb(241,240,232)] flex items-center gap-2">
          <User className="text-[rgb(241,240,232)] w-6 h-6" />
          Member Manager
        </h1>
        <div className="flex gap-4">
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
        </div>
      </nav> */}

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl font-extrabold text-[#89A8B2] mb-4 drop-shadow-md">
          Welcome to Member Manager
        </h2>
        <p className="text-lg text-[#89A8B2] max-w-2xl mb-8">
          Simplify and enhance the way you manage your members. From
          registrations to activity tracking, we've got you covered!
        </p>
        <Button
          variant="default"
          size="lg"
          className="px-6 py-3 bg-[#89A8B2] text-[rgb(241,240,232)] hover:bg-[#B3C8CF]"
          onClick={() => navigate("/register")}
        >
          Get Started
        </Button>
      </main>

      {/* Features Section */}
      <section
        className="py-12"
        style={{ backgroundColor: "rgb(241,240,232)" }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Feature 1 */}
          <Card className="hover:shadow-xl transition-shadow duration-300 bg-[rgb(229,225,218)]">
            <CardContent className="flex flex-col items-center">
              <User className="text-[#89A8B2] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold text-[#89A8B2]">
                Easy Member Registration
              </h3>
              <p className="text-[#89A8B2] text-center">
                Quickly onboard new members with a streamlined registration
                process.
              </p>
            </CardContent>
          </Card>
          {/* Feature 2 */}
          <Card className="hover:shadow-xl transition-shadow duration-300 bg-[rgb(229,225,218)]">
            <CardContent className="flex flex-col items-center">
              <Activity className="text-[#89A8B2] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold text-[#89A8B2]">
                Activity Tracking
              </h3>
              <p className="text-[#89A8B2] text-center">
                Monitor and record member activities to stay updated.
              </p>
            </CardContent>
          </Card>
          {/* Feature 3 */}
          <Card className="hover:shadow-xl transition-shadow duration-300 bg-[rgb(229,225,218)]">
            <CardContent className="flex flex-col items-center">
              <Lock className="text-[#89A8B2] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold text-[#89A8B2]">
                Secure Database
              </h3>
              <p className="text-[#89A8B2] text-center">
                Keep your member data safe and organized in one place.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6" style={{ backgroundColor: "#89A8B2" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <p className="text-sm text-center md:text-left text-[rgb(241,240,232)] mb-4 md:mb-0">
            © {new Date().getFullYear()} Member Manager. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-[rgb(241,240,232)] hover:text-[rgb(229,225,218)]"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-[rgb(241,240,232)] hover:text-[rgb(229,225,218)]"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-[rgb(241,240,232)] hover:text-[rgb(229,225,218)]"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
