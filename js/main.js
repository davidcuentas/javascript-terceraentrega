const productos = [
    {
        id: 1,
        nombre: "Base jabón blanca",
        precio: 41000,
        categoria: "Base"
    },

    {
        id: 2,
        nombre: "Base jabón transparente",
        precio: 43000,
        categoria: "Base"
    },

    {
        id: 3,
        nombre: "Base acondicionador",
        precio: 56600,
        categoria: "Base"
    },

    {
        id: 4,
        nombre: "Base crema corporal",
        precio: 56600,
        categoria: "Base"
    },

    {
        id: 5,
        nombre: "Base shampoo",
        precio: 54600,
        categoria: "Base"
    },

    {
        id: 6,
        nombre: "Color amarillo",
        precio: 8300,
        categoria: "Pigmento"
    },

    {
        id: 7,
        nombre: "Color azul",
        precio: 8300,
        categoria: "Pigmento"
    },

    {
        id: 8,
        nombre: "Color cyan",
        precio: 8300,
        categoria: "Pigmento"
    },

    {
        id: 9,
        nombre: "Color café",
        precio: 8300,
        categoria: "Pigmento"
    },

    {
        id: 10,
        nombre: "Color rojo",
        precio: 8300,
        categoria: "Pigmento"
    },

    {
        id: 11,
        nombre: "Color fucsia",
        precio: 8300,
        categoria: "Pigmento"
    },

    {
        id: 12,
        nombre: "Color negro",
        precio: 8300,
        categoria: "Pigmento"
    },

    {
        id: 13,
        nombre: "Caléndula",
        precio: 4500,
        categoria: "Ingredientes"
    },

    {
        id: 14,
        nombre: "Lavanda",
        precio: 4500,
        categoria: "Ingredientes"
    },

    {
        id: 15,
        nombre: "Manzanilla",
        precio: 4500,
        categoria: "Ingredientes"
    },

    {
        id: 16,
        nombre: "Menta",
        precio: 4500,
        categoria: "Ingredientes"
    },

    {
        id: 17,
        nombre: "Romero",
        precio: 4500,
        categoria: "Ingredientes"
    },

    {
        id: 18,
        nombre: "Rosas",
        precio: 4500,
        categoria: "Ingredientes"
    },

    {
        id: 19,
        nombre: "Sal del Himalaya",
        precio: 4500,
        categoria: "Ingredientes"
    },
];

document.addEventListener("DOMContentLoaded", function () {
    const contenedorTarjetasProductos = document.getElementById("contenedorTarjetasProductos");
    const botonBase = document.getElementById("botonBase");
    const botonPigmento = document.getElementById("botonPigmento");
    const botonIngredientes = document.getElementById("botonIngredientes");
    const botonTodos = document.getElementById("botonTodos");
    const botonInicio = document.getElementById("botonInicio")

    let categoriaSeleccionada = localStorage.getItem("categoriaSeleccionada") || "Todos";

    mostrarProductos(categoriaSeleccionada);

    botonBase.addEventListener("click", () => mostrarProductos("Base"));
    botonPigmento.addEventListener("click", () => mostrarProductos("Pigmento"));
    botonIngredientes.addEventListener("click", () => mostrarProductos("Ingredientes"));
    botonTodos.addEventListener("click", () => mostrarTodos());
    botonInicio.addEventListener("click", () => limpiar());

    function mostrarTodos() {
        categoriaSeleccionada = "Todos";
        renderizarTarjetasProductos(productos);
        localStorage.setItem("categoriaSeleccionada", categoriaSeleccionada);
    }

    function mostrarProductos(categoria) {
        const productosFiltrados = (categoria === "Todos") ? productos : productos.filter(producto => producto.categoria === categoria);
        renderizarTarjetasProductos(productosFiltrados);
        localStorage.setItem("categoriaSeleccionada", categoria);
    }

    function limpiar() {
        categoriaSeleccionada = "";
        contenedorTarjetasProductos.innerHTML = "";
    }

    function renderizarTarjetasProductos(productos) {
        contenedorTarjetasProductos.innerHTML = "";

        productos.forEach(producto => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta-producto";

            const imagen = document.createElement("img");
            const nombreImagen = producto.nombre.toLowerCase().replace(/ /g, '-');
            imagen.src = `images/${nombreImagen}.jpg`;

            // Verifica si la imagen existe
            imagen.onerror = function () {
                imagen.src = "placeholder.jpg";
            };

            tarjeta.appendChild(imagen);

            const nombre = document.createElement("p");
            nombre.textContent = producto.nombre;
            tarjeta.appendChild(nombre);

            const precio = document.createElement("p");
            precio.textContent = `Precio: $${producto.precio}`;
            tarjeta.appendChild(precio);

            contenedorTarjetasProductos.appendChild(tarjeta);
        });
    }
});
