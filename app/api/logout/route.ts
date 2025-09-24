"use server"
import { NextResponse } from "next/server";

export async function POST() {
  try {
   
    const response = NextResponse.json(
      { message: "Logout successful" },
      { status: 200 }
    );

    
    if (response.cookies.get("sessionToken")) {
      response.cookies.delete("sessionToken");
    }

 
    response.cookies.set("sessionToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(0), 
      path: "/admin",
    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { message: "Something went wrong during logout" },
      { status: 500 }
    );
  }
}
