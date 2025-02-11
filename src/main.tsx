import { createRoot } from "react-dom/client";
import App from "./app/app.tsx";
import "./index.css";
export const root = document.getElementById("app");
createRoot(document.getElementById("root")!).render(<App />);
