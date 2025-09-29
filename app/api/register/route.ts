// app/api/register/route.ts
import { prisma } from "@/lib/prisma"; // উদাহরণস্বরূপ, Prisma ব্যবহার করা হচ্ছে
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // ১. ইনপুট যাচাই করুন
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    // ২. ব্যবহারকারী ইতিমধ্যে বিদ্যমান কিনা তা পরীক্ষা করুন
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists." },
        { status: 409 }
      );
    }

    // ৩. পাসওয়ার্ড হ্যাশ করুন
    const hashedPassword = await bcrypt.hash(password, 10); // 10 হল salt rounds

    // ৪. ডাটাবেসে নতুন ব্যবহারকারী তৈরি করুন
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: "USER",
      },
    });

    return NextResponse.json(
      {
        message: "User registered successfully!",
        user: { id: newUser.id, email: newUser.email, role: newUser.role },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
