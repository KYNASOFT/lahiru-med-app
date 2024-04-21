//ROUTE 2 : POST Staff Detail [http://localhost:3000/api/Staff]
export async function POST(request) {
    // get Staff data from frontend 
    const { name, email, address, salary } = await request.json();

    // validation 
    if (!name || !email || !address || !salary) {
        return NextResponse.json(
            {
                error: "All fields must be required",
            },
            {
                status: 404,
            }
        )
    }

    // find Staff through email
    const staff = await Staff.findOne({ email })

    // Condition 
    if (staff) {
        return NextResponse.json(
            {
                error: "This Staff already exists"
            },
            {
                status: 404,
            }
        )
    }

    // Create Staff
    const Staff = new Staff({
        name,
        email,
        address,
        salary
    })

    try {
        // Create Saved Staff 
        const savedStaff = await Staff.save();

        // Return savedEmployee, message, and status
        return NextResponse.json(
            {
                savedStaff,
                message: "Staff saved successfully"
            },
            {
                status: 200,
            }
        )
    } catch (error) {
        console.log(error);

        // return error and status 
        return NextResponse.json(
            {
                error: "Failed to save Staff",
            },
            {
                status: 404,
            }
        )
    }
}