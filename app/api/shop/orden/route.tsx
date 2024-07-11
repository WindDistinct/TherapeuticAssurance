import { connectToMongoDB } from "@/server/dbConfig/dbConfig";
import Order from "@/server/model/orderModel";
import { NextRequest, NextResponse } from "next/server";

connectToMongoDB();

export async function POST(req: NextRequest) {
  try {
    //Recibe los datos
    const { products, total } = await req.json();
    
    // Crear la orden
    const newOrder = new Order({
      productos: products,
      total: total,
    });
    await newOrder.save();
    
    return NextResponse.json({ mensaje: 'Orden creada con éxito' }, { status: 201 });
  
  } catch (error: any) {
  
    return NextResponse.json({ mensaje: 'Error creando la orden', error: error.message }, { status: 500 });
  
  }
}
