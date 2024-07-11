import { connectToMongoDB } from "@/server/dbConfig/dbConfig";
import Product from "@/server/model/productModel";
import { NextRequest, NextResponse } from "next/server";

connectToMongoDB();

export async function GET(req: NextRequest) {
  try {
    //Se extrae de la url la categoria
    const { searchParams } = new URL(req.url);
    const categoria = searchParams.get('categoria');

    let products;

    //Filtra los productos obtenidos en base a la categoría
    //Si no hay, obtiene todos
    if (categoria) {
      products = await Product.find({ categoria });
    } else {
      products = await Product.find({});
    }
    //Devuelve los productos
    return NextResponse.json(products, { status: 200 });

  } catch (error: any) {
    
    return NextResponse.json({ mensaje: 'Error obteniendo los productos', error: error.message }, { status: 500 });

  }
}