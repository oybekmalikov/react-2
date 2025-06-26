import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import App from "../App";
import SingleUser from "../pages/SingleUser";
import Users from "../pages/Users";
import Student from "../pages/logs/student";
const Router = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<App />}>
				<Route path="/users" element={<Users />} />
				<Route path="/students" element={<Student />} />
				<Route path="/users/:id" element={<SingleUser />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
};
export default Router;
