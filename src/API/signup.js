import axios from "axios";

export const signup = async ({ fname, lname, email,number, password, confirmPassword}) => {
  // const API_URL = `http://localhost:8000/api/users`
  try {
    const response = await axios.post('http://localhost:8000/api/users', {
      fname,
      lname,
      number,
      email,
      password,
      confirmPassword
    });
    
    const data = response?.data;
    return { success: true, data };
  } catch (error) {
    if (
      error.response &&
      error.response?.status >= 400 &&
      error.response?.status <= 500
    ) {
      return {
        success: false,
        error: error.response.data.message || error.response.data,
      };
    }
  }
};