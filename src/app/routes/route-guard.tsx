import { useAuth } from "@/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
export default function RouteGuard({
  children,
}: {
  children: React.ReactElement | null;
}) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user?.token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return <>{children}</>;
}
