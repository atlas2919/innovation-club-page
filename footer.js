// Cargar el footer de forma dinámica
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;

        // Configuración del año en el footer
        const yearSpan = document.getElementById("year");
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    })
    .catch(error => console.error('Error al cargar el footer:', error));
