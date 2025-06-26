import { Link } from "react-router-dom";
const Product = () => {
	return (
		<div>
			<h1>Products</h1>
			<Link to="/home" className="btn btn-danger">
				Back
			</Link>
		</div>
	);
};

export default Product;
