import axiosInstance from "../api/index";
export const Users = {
	async getAll() {
		try {
			const res = await axiosInstance.get("/regions");
			console.log(res.data)
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
	async createUser(model) {
		try {
			const res = await axiosInstance.post("/regions", model);
			console.log(res)
			return res;
		} catch (error) {
			console.log(error);
		}
	},
	async deleteUser(id) {
		try {
			const res = await axiosInstance.delete(`/regions/${id}`);
			return res;
		} catch (error) {
			console.log(error);
		}
	},
	async editUser(id,model) {
		try {
			const res = await axiosInstance.patch(`/regions/${id}`,model);
			return res;
		} catch (error) {
			console.log(error);
		}
	},
};
