const Card = ({ item, onEdit, onDelete }) => {
	return (
		<div className="card h-100">
			<div className="card-body">
				<img
					src={item.img}
					alt={item.name}
					className="w-100 rounded-1"
					style={{ height: "200px", objectFit: "cover" }}
				/>
			</div>
			<div className="card-footer">
				<h3 className="text-center">{item.name}</h3>
				<div className="d-flex justify-content-between mb-2">
					<p className="mb-0">Narx: ${item.price}</p>
					<p className="mb-0">Qoldiq: {item.quantity}</p>
				</div>
				<div className="d-flex justify-content-between">
					<button
						className="btn btn-warning btn-sm"
						onClick={() => onEdit(item)}
					>
						Edit
					</button>
					<button
						className="btn btn-danger btn-sm"
						onClick={() => onDelete(item.id)}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
