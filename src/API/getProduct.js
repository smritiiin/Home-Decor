import axios from 'axios'


axios.interceptors.request.use((config) => {
    //@ts-ignore
    const token = document?.cookie
      ?.split("; ")
      ?.find((row) => row.startsWith("x-access-token="))
      ?.split("=")[1];
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  });

export const getProduct = async()=>{
    const response = await axios.get('http://localhost:8000/api/products');
    if (response.status !==200) throw new Error("Error fetching products")

    const data = await response?.data;
    return data;
    };
