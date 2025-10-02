import firestore from "@react-native-firebase/firestore";
import { Book } from "../models/Book";

export const bookService = {
    async getBooks(): Promise<Book[]>{
        try{
            const snapshot = await firestore().collection("libros").get();
            return snapshot.docs.map(doc => ({
                id:doc.id,
                nombre:doc.data().nombre,
                autor:doc.data().autor,
                genero:doc.data().genero,
                descripcion:doc.data().descripcion,
                unidades:doc.data().unidades,
                disponible:doc.data().disponible,
                imagen:doc.data().imagen
            })) as Book[];
        }catch(error){
            console.error("Error obteniendo los libros: ", error);
            return [];
        }
    }
}