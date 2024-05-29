import mongoose from "mongoose";

export async function connectToMongoDB() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Conexión a la base de datos exitosa');
        });

        connection.on('error', (err) => {
            console.log('No se pudo conectar a la base de datos: ' + err);
        });
    } catch(error) {
        console.log("Se detectó un error inesperado: " + error);
    }
}