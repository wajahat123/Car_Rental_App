const axios = require('axios').default;
async function getUser() {
    try {
      const response = await axios.get('https://carsrentbackend.vercel.app/cars');
    return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  export default getUser;