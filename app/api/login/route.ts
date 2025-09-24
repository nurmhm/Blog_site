"use server"
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'; 

export async function POST(request: NextRequest) {

    const {email, password} = await request.json();

    console.log(email, password);

    try {
        const user = await prisma.user.findUnique(
            {
                where:{email}
            }
        )
        if(!user){
            return NextResponse.json({message: "Invalid Credenttial"}, {status: 401});
        }

        const is_passwordValid = await bcrypt.compare(password, user.password);

        if(!is_passwordValid){
            return NextResponse.json({message:"Your password is wrong"}, {status:401});
        }

        const token = jwt.sign(
            {id:user.id, email:user.email, role:user.role},
            process.env.JWT_SECRET!,
            {expiresIn:"1h"}

        )

        console.log(token);

       
         const response = NextResponse.json({message: "Logged in successfully", user: {id:user.id, email: user.email, role:user.role}}, {status:200})
        
         if(response.cookies.get('sessionToken')) response.cookies.delete('sessionToken');
         response.cookies.set(
            'sessionToken', token, {
                httpOnly:true,
                secure:process.env.NODE_ENV == "production",
                maxAge:60*60*24*7,
                path:'/admin'
            }
        )

        return response;
    } catch (error) {
        console.log(error, "errorrrrrrrrrrrrrrrr");
        
       return NextResponse.json({message:"Somthing is Wrong"},{status:500});
    }
    
}