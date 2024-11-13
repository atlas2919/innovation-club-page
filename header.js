// Cargar el header de forma dinámica
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // Agregar la funcionalidad del menú hamburguesa después de cargar el header
        const hamburger = document.getElementById("hamburger");
        const navList = document.getElementById("nav-list");

        if (hamburger && navList) {
            hamburger.addEventListener("click", () => {
                console.log("Click en hamburguesa");
                navList.classList.toggle("active");
            });
        } else {
            console.error("No se encontraron los elementos hamburger o nav-list.");
        }
    })
    .catch(error => console.error('Error al cargar el header:', error));
