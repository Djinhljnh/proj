import Axios from "./Axios";

const productApi = async (params) => {
  try {
    const response = await Axios.get(`${params}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export default productApi;
