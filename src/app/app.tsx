import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthContext";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes/config";

const AppRoutes = () => {
  const content = useRoutes(routes);
  return content;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
