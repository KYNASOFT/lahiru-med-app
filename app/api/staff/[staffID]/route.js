import { Employee } from "@/Staff/models/staff";
import { NextResponse } from "next/server";

//ROUTE 3 : GET Staff By Id [http://localhost:3000/api/Staff/staffID]
export async function GET(reuest, { params }) {
    // Get staffID From params 
    const { staffID } = params;

    try {
        // Create Get Single Staff
        const getSingleStaff = await Staff.findById(staffID)

        // Return getSingleStaff and status 
        return NextResponse.json(
            {
                getSingleStaff,
            },
            {
                status: 200,
            }
        )
    } catch (error) {
        console.log(error);

        // Return Error And status 
        return NextResponse.json(
            {
                error: 'failed to get single Staff',
            },
            {
                status: 404,
            }
        )
    }
}