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

//ROUTE 4 : UPDATE[PUT] Staff Detail [http://localhost:3000/api/Staff/staffID]
export async function PUT(request, { params }) {
    // Get StaffId From params 
    const { staffID } = params;

    // Get Data From Frontend 
    const { name, email, address, salary } = await request.json();

    try {
        // Create Staff ( Get Employee By Id )
        let Staff = await Staff.findById(staffID);
        // set Staff name 
        Staff.name = name;
        // set Staff email 
        Staff.email = email;
        // set Staff address 
        Staff.address = address;
        // set Staff salary 
        Staff.salary = salary;

        // Create Update Staff
        const updatedStaff = await Staff.save();

        // Return updatedStaff, message and status 
        return NextResponse.json(
            {
                updatedStaff,
                message: "Staff Updated Successfully"
            },
            {
                status: 201
            }
        )
    } catch (error) {
        console.log(error)

        // Return Error And Status 
        return NextResponse.json(
            {
                error: 'failed to update Staff',
            },
            {
                status: 404,
            }
        )
    }
}

//ROUTE 5 : DELETE Staff  [http://localhost:3000/api/Staff/staffID]
export async function DELETE(request, { params }) {
    // Get staffID From params 
   const { staffID } = params;

   try {
       await Staff.deleteOne({
           _id: staffID
       })

       // Return message And Status 
       return NextResponse.json(
           {
               message: "Staff deleted successfully"
           },
           {
               status: 201
           }
       )
   } catch (error) {
       console.log(error)

       // Return Error And Status 
       return NextResponse.json(
           {
               error: 'failed to delete Staff',
           },
           {
               status: 404,
           }
       )
   }
}

