import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Card from "./components/Card";
const App = () => {
	const [products, setProducts] = useState([
		{
			id: 1,
			name: "Iphone 16 PRO MAX",
			price: 1599,
			quantity: 30,
			img: "src/assets/iphone-16-pro-max.png",
		},
		{
			id: 2,
			name: "Iphone 15 PRO MAX",
			price: 1099,
			quantity: 10,
			img: "src/assets/iphone-16-pro-max.png",
		},
		{
			id: 3,
			name: "Iphone 14 PRO MAX",
			price: 2599,
			quantity: 5,
			img: "src/assets/iphone-16-pro-max.png",
		},
		{
			id: 4,
			name: "Air Pods Max",
			price: 199,
			quantity: 70,
			img: "src/assets/airpods-max.png",
		},
		{
			id: 5,
			name: "Samsung S25 Ultra",
			price: 1899,
			quantity: 20,
			img: "src/assets/samsung-s25-ultra.png",
		},
		{
			id: 6,
			name: "Samsung S24 Ultra",
			price: 1099,
			quantity: 30,
			img: "src/assets/samsung-s24-ultra.png",
		},
	]);
	const [show, setShow] = useState(false);
	const [form, setForm] = useState({
		name: "",
		price: "",
		quantity: "",
		img: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (form.name && form.price) {
			const newProduct = {
				id: products.length + 1,
				...form,
				price: Number(form.price),
				quantity: Number(form.quantity),
			};
			setProducts([...products, newProduct]);
			setForm({
				name: "",
				price: "",
				quantity: "",
				imgUrl: "",
			});
		}
		setShow(false);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	return (
		<div className="container">
			<div className="row mt-3">
				{products.map((item) => (
					<div className="col-md-4" key={item.id}>
						<Card item={item} />
					</div>
				))}
			</div>
			<div className="text-center m-5">
				<>
					<Button variant="primary" onClick={() => setShow(true)}>
						Modalni ochish
					</Button>

					<Modal show={show} onHide={() => setShow(false)}>
						<Modal.Header closeButton>
							<Modal.Title>Yangi Product Qo'shish</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							{" "}
							<div className="card gap-2">
								<input
									onChange={handleChange}
									value={form.name}
									type="text"
									name="name"
									placeholder="Product nomi..."
								/>
								<input
									onChange={handleChange}
									value={form.price}
									type="text"
									name="price"
									placeholder="Product narxi..."
								/>
								<input
									onChange={handleChange}
									value={form.quantity}
									type="text"
									name="quantity"
									placeholder="Qancha qolgani..."
								/>
								<input
									onChange={handleChange}
									value={form.imgUrl}
									type="text"
									name="img"
									placeholder="Rasm urli..."
								/>
							</div>{" "}
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={() => setShow(false)}>
								Yopish
							</Button>
							<Button variant="primary" onClick={handleSubmit}>
								Saqlash
							</Button>
						</Modal.Footer>
					</Modal>
				</>
				);
			</div>
		</div>
	);
};

export default App;
