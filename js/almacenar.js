// Recuperar los ítems de localStorage o inicializar un array vacío si no hay nada guardado
let items = JSON.parse(localStorage.getItem("items")) || [];

document.getElementById("agregar").addEventListener("click", function(){
    let nuevo = document.getElementById("item").value
    if (nuevo){
        items.push(nuevo);
        localStorage.setItem("items", JSON.stringify(items)); // Guardar el array actualizado en localStorage
        console.log(items);
    }
    /*Vaciar el campo*/
    document.getElementById("item").value = "";
    mostrarEnPantalla();
})


function mostrarEnPantalla() {
    let mostrar = document.getElementById("contenedor");
    
    // Limpiar el contenedor antes de agregar los ítems
    mostrar.innerHTML = "";

    // Recorrer y mostrar los ítems
    items.forEach((elemento) => {
        mostrar.innerHTML += `<p>${elemento}</p>`;
    });
}


document.getElementById("limpiar").addEventListener("click", function() {
    items = []; // Vaciar el array de ítems
    localStorage.removeItem("items"); // Eliminar el listado del localStorage
    mostrarEnPantalla();
});
