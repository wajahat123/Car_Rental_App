import axiosInstance from "./axiosInstance";
import { API_ENDPOINTS } from "./apiEndpoints";
import { Car } from "./types";
import axios from "axios";


let cachedCars :Car[] =[];

export const fetchCars = async () : Promise<Car[]> => {
    if (cachedCars.length>0) return cachedCars; // Return cached data if available
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.user.carList);
        cachedCars = response.data ; 
        // console.log("response: " , cachedCars)
        // Store fetched data
        return cachedCars;
    } catch(err) {
        console.log("Error fetching cars: " + err)
        return [];
    }
}


export const fetchSingleCar = async (_id: number | string): Promise<Car | null> => {
    try {
        const response = await axiosInstance.get<Car>(`${API_ENDPOINTS.user.carList}/${_id}`);
        return response.data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.error("Axios error fetching car:", err.response?.data || err.message);
        } else {
            console.error("Unexpected error fetching car:", err);
        }

        return null; // Return null on failure
    }
};

