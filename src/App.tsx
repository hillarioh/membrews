import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProfileForm from "./pages/Profile";
import Navbar from "./layout/navbar";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Loading</div>}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <Outlet />
                </div>
              }
            >
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoutes>
                    <Dashboard />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoutes>
                    <ProfileForm />
                  </ProtectedRoutes>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};
export default App;
