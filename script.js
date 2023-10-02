document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/todos/5")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`La solicitud no fue exitosa. Código de estado: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            
            document.getElementById("todoTitle").textContent = data.title;
            document.getElementById("todoStatus").textContent = data.completed ? "Completada" : "Pendiente";
        })
        .catch((error) => {
            console.error("Se produjo un error al obtener los datos:", error);
        });
});
