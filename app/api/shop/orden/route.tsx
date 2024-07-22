import { auth } from "@/app/middleware/auth";
import { connectToMongoDB } from "@/server/dbConfig/dbConfig";
import Order from "@/server/model/orderModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  await connectToMongoDB();

  try {
    const user = auth();
    console.log(user);

    //Recibe los datos
    const { products, total } = await req.json();
    
    // Crear la orden
    const newOrder = new Order({
      productos: products,
      total: total,
      creadoPor: user,
    });
    await newOrder.save();
    console.log(newOrder);
    return NextResponse.json({ mensaje: 'Orden creada con éxito' }, { status: 201 });
  
  } catch (error: any) {
  
    return NextResponse.json({ mensaje: 'Error creando la orden', error: error.message }, { status: 500 });
  
  }
}
