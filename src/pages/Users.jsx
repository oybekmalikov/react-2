import { Link } from "react-router-dom";
const Users = () => {
	return (
		<div>
			<h1>users</h1>
			<Link to="/home" className="btn btn-danger">
				Back
			</Link>
		</div>
	);
};

export default Users;
