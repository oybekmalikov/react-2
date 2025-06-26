import {Link} from "react-router-dom";
const Home = () => {
	return (
		<div className="container">
			<h1 className="text-center">Home</h1>
			<div className="row mt-5">
				<Link to="/users" className="btn btn-succes">
					Users
				</Link>
				<br />
				<Link to="/products" className="btn btn-succes">
					Products
				</Link>
			</div>
		</div>
	);
};

export default Home;
