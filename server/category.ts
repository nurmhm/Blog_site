
import { prisma } from "@/lib/prisma";
import { ZCCategory } from "@/validators/category";
import { NextResponse } from "next/server";

export const createCategory = async (body:unknown) => {
    const validation = ZCCategory.parse(body);

    try {
           if(!validation.name){
    return NextResponse.json({message:"Category name is required"}, {status:400});
   }

   const Newcategory = await prisma.category.create({
    data: {
        name: validation.name, 
        description: validation.description
    }
   });
   return NextResponse.json(Newcategory, {status:201});
        
    } catch (error : any) {

        if(error.code === 'P2002'){
            return NextResponse.json({message:"Category name already exist"}, {status:400});
        }
        console.error('Error creating category:', error);

        return NextResponse.json({message:"Failed to create category"}, {status:500});
        
    }
    
}


export async function getCategories(){
    try {
        
        const categoris = await prisma.category.findMany(
            {
                orderBy: {
                    name: 'desc'
                }
            });

        return NextResponse.json(categoris, {status:200});
    } catch (error) {
        console.error('Error fetching categories:', error);
        return NextResponse.json({message:"Failed to fetch categories"}, {status:500});
    }
}