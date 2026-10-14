// es hora de recordar, buenos momentos que pasamos juntos en el cbtis oh, con el tiempo ya no es igual

// paso 1 nuestro error.
export class appError extends Error { 
    constructor(mensaje, codigo = 400) { 
        super(mensaje); 
        this.name = "AppError"; // Corregido: se usa punto y coma (;) en lugar de coma (,)
        this.codigo = codigo; 
    } 
}

// Paso 2: datos de prueba (Corregido: "prueba" se escribe con b)
const productos = [ // Corregido: se usan corchetes [] para definir un arreglo
    {id: "p-01", nombre: "molletes", precio: 30, disponible: true}, 
    {id: "p-02", nombre: "jugos de naranja", precio: 18, disponible: true}, 
    {id: "p-03", nombre: "gelatina", precio: 30, disponible: false} // Corregido: se quitaron las llaves externas duplicadas
];

const HORA_CORTE = 13;

// Paso 3

export function crearPedido(productoId, cantidad,hora){
    if(!productos.Id){
        throw new appError("Falta indicar el producto", 400);
    }
    if(!Number.isInteger(cantidad)|| cantidad <=0){
        throw new AppError("cantidad debe ser un numero entero mayor que cero", 400);
    }
    if(hora > HORA_CORTE){
        throw new appError("Ya se cerro", 409)
    }


const producto = productos.find((p) => p.id === productoId);
if(!producto){
    throw new appError("Producto no encontrado", 404);
}
if(!producto.disponible){
    throw new appError("El Producto esta agotado", 409)
}

return {
    folio:"Pr-" + Math.floor(Math.random() * 10000),
    producto: producto.nombre,
    cantidad,
    total: producto.precio * cantidad
};
}
