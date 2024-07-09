import { connectToMongoDB } from "@/server/dbConfig/dbConfig";
import Product from "@/server/model/productModel";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

connectToMongoDB();

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const categoria = searchParams.get('categoria');
    
        let products;
        if (categoria) {
          products = await Product.find({ categoria });
        } else {
          products = await Product.find({});
        }
    
        return NextResponse.json(products, { status: 200 });
      } catch (error: any) {
        return NextResponse.json({ mensaje: 'Error obteniendo los productos', error: error.message }, { status: 500 });
      }
}