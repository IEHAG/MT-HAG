document.querySelectorAll(".social-icons a").forEach(link => {
    link.addEventListener("click", () => {
        alert(`Redirigiendo a ${link.textContent.trim()}...`);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modal");
    let closeBtn = document.querySelector(".close");
    let videoIframe = document.querySelector("iframe");

    // Mostrar modal al cargar la página
    modal.style.display = "flex";

    // Cerrar modal al hacer clic en la "X"
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Cerrar modal si el usuario hace clic fuera del contenido
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Cerrar modal automáticamente después de 157 segundos
    setTimeout(function() {
        modal.style.display = "none";
    }, 157000); // 157 segundos = 2 minutos 37 segundos
});
