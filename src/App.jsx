import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import { Button, Modal } from "react-bootstrap";
// import Card from "./components/Card";

// const App = () => {
// 	const [products, setProducts] = useState([
// 		{
// 			id: 1,
// 			name: "Iphone 16 PRO MAX",
// 			price: 1599,
// 			quantity: 30,
// 			img: "src/assets/iphone-16-pro-max.png",
// 		},
// 		{
// 			id: 2,
// 			name: "Iphone 15 PRO MAX",
// 			price: 1099,
// 			quantity: 10,
// 			img: "src/assets/iphone-16-pro-max.png",
// 		},
// 		{
// 			id: 3,
// 			name: "Iphone 14 PRO MAX",
// 			price: 2599,
// 			quantity: 5,
// 			img: "src/assets/iphone-16-pro-max.png",
// 		},
// 		{
// 			id: 4,
// 			name: "Air Pods Max",
// 			price: 199,
// 			quantity: 70,
// 			img: "src/assets/airpods-max.png",
// 		},
// 		{
// 			id: 5,
// 			name: "Samsung S25 Ultra",
// 			price: 1899,
// 			quantity: 20,
// 			img: "src/assets/samsung-s25-ultra.png",
// 		},
// 		{
// 			id: 6,
// 			name: "Samsung S24 Ultra",
// 			price: 1099,
// 			quantity: 30,
// 			img: "src/assets/samsung-s24-ultra.png",
// 		},
// 	]);

// 	const [show, setShow] = useState(false);
// 	const [form, setForm] = useState({
// 		id: null,
// 		name: "",
// 		price: "",
// 		quantity: "",
// 		img: "",
// 	});
// 	const [isEditing, setIsEditing] = useState(false);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (form.name && form.price) {
// 			if (isEditing) {
// 				setProducts(
// 					products.map((item) =>
// 						item.id === form.id
// 							? {
// 									...item,
// 									name: form.name,
// 									price: Number(form.price),
// 									quantity: Number(form.quantity),
// 									img: form.img || item.img,
// 							  }
// 							: item
// 					)
// 				);
// 			} else {
// 				const newProduct = {
// 					id: products.length + 1,
// 					name: form.name,
// 					price: Number(form.price),
// 					quantity: Number(form.quantity),
// 					img: form.img || "src/assets/default-product.png",
// 				};
// 				setProducts([...products, newProduct]);
// 			}
// 			setForm({
// 				id: null,
// 				name: "",
// 				price: "",
// 				quantity: "",
// 				img: "",
// 			});
// 			setIsEditing(false);
// 			setShow(false);
// 		}
// 	};

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setForm({ ...form, [name]: value });
// 	};

// 	const handleEdit = (product) => {
// 		setForm({
// 			id: product.id,
// 			name: product.name,
// 			price: product.price,
// 			quantity: product.quantity,
// 			img: product.img,
// 		});
// 		setIsEditing(true);
// 		setShow(true);
// 	};

// 	const handleDelete = (id) => {
// 		setProducts(products.filter((item) => item.id !== id));
// 	};

// 	return (
// 		<div className="container">
// 			<div className="row mt-3">
// 				{products.map((item) => (
// 					<div className="col-md-4 mb-4" key={item.id}>
// 						<Card item={item} onEdit={handleEdit} onDelete={handleDelete} />
// 					</div>
// 				))}
// 			</div>
// 			<div className="text-center m-5">
// 				<Button
// 					variant="primary"
// 					onClick={() => {
// 						setForm({
// 							id: null,
// 							name: "",
// 							price: "",
// 							quantity: "",
// 							img: "",
// 						});
// 						setIsEditing(false);
// 						setShow(true);
// 					}}
// 				>
// 					Add New Product
// 				</Button>

// 				<Modal show={show} onHide={() => setShow(false)}>
// 					<Modal.Header closeButton>
// 						<Modal.Title>
// 							{isEditing ? "Productni Tahrirlash" : "Yangi Product Qo'shish"}
// 						</Modal.Title>
// 					</Modal.Header>
// 					<Modal.Body>
// 						<div className="card p-3 gap-2">
// 							<input
// 								onChange={handleChange}
// 								value={form.name}
// 								type="text"
// 								name="name"
// 								className="form-control"
// 								placeholder="Product nomi..."
// 							/>
// 							<input
// 								onChange={handleChange}
// 								value={form.price}
// 								type="number"
// 								name="price"
// 								className="form-control"
// 								placeholder="Product narxi..."
// 							/>
// 							<input
// 								onChange={handleChange}
// 								value={form.quantity}
// 								type="number"
// 								name="quantity"
// 								className="form-control"
// 								placeholder="Qancha qolgani..."
// 							/>
// 							<input
// 								onChange={handleChange}
// 								value={form.img}
// 								type="text"
// 								name="img"
// 								className="form-control"
// 								placeholder="Rasm urli..."
// 							/>
// 						</div>
// 					</Modal.Body>
// 					<Modal.Footer>
// 						<Button variant="secondary" onClick={() => setShow(false)}>
// 							Yopish
// 						</Button>
// 						<Button variant="primary" onClick={handleSubmit}>
// 							{isEditing ? "O'zgarishlarni saqlash" : "save"}
// 						</Button>
// 					</Modal.Footer>
// 				</Modal>
// 			</div>
// 		</div>
// 	);
// };

// export default App;
import { Outlet } from "react-router-dom";
const App = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default App;
