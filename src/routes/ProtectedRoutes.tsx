import { useAuth } from "@/context";
import { Navigate } from "react-router";

type ProtectedRoutesProps = {
  children: React.ReactNode;
};

export default function ProtectedRoutes({ children }: ProtectedRoutesProps) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}
