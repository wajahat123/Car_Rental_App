import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const cars = await axios.get('https://carsrentbackend.vercel.app/cars');
        console.log(cars);
        return NextResponse.json(cars);
    } catch (error) {
        console.error(error);
    }
}