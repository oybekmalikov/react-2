import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/route.jsx";
createRoot(document.getElementById("root")).render(
	<>
		<Router />
	</>
);
