import axiosInstance from "./axiosInstance";
import { API_ENDPOINTS } from "./apiEndpoints";
import { Car } from "./types";


let cachedCars :Car[] =[];

export const fetchCars = async () : Promise<Car[]> => {
    if (cachedCars.length>0) return cachedCars; // Return cached data if available
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.user.carList);
        cachedCars = response.data ; 
        console.log("response: " , cachedCars)
        // Store fetched data
        return cachedCars;
    } catch(err) {
        console.log("Error fetching cars: " + err)
        return [];
    }
}

export const fetchSingleCar = async (_id: number | string): Promise<Car|null> => {
    try {
        const response = await axiosInstance.get(`${API_ENDPOINTS.user.carList}/${_id}`);
        const car = response.data; 
        console.log("Fetched car:", car);
        
        // Return the fetched car data
        return car;
    } catch (err) {
        console.error("Error fetching car:", err);

        // Return null to indicate failure
        return null;
    }
};

