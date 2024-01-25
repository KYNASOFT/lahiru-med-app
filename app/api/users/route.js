import { users } from "@/app/utils/db";
import { NextResponse } from "next/server";


export function GET(params)
{
    const userdata = users;
    return NextResponse.json({result : users})
}