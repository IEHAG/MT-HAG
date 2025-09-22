// Alerta al hacer clic en iconos sociales
document.querySelectorAll(".social-icons a").forEach(link => {
    link.addEventListener("click", () => {
        alert(`Redirigiendo a ${link.textContent.trim()}...`);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modal");
    let closeBtn = document.querySelector(".close");
    let videoIframe = document.querySelector("iframe");

    // Verifica si el modal ya fue visto
    if (!localStorage.getItem("popupVisto")) {
        modal.style.display = "flex"; // Mostrar modal solo si no se ha visto

        // Al cerrar el modal, marcarlo como visto
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
            localStorage.setItem("popupVisto", "true");
        });

        // Cerrar modal automáticamente después de 157 segundos
        setTimeout(function() {
            modal.style.display = "none";
            localStorage.setItem("popupVisto", "true"); // Guarda que se cerró automáticamente
        }, 157000); // 157 segundos = 2 minutos 37 segundos

        // Detectar fin del video para cerrar el modal
        videoIframe.addEventListener("load", function() {
            let video = videoIframe.contentWindow.document.querySelector("video");
            if (video) {
                video.addEventListener("ended", function() {
                    modal.style.display = "none";
                    localStorage.setItem("popupVisto", "true");
                });
            }
        });

    } else {
        modal.style.display = "none"; // No mostrar si ya se vio antes
    }

    // Cerrar modal si el usuario hace clic fuera del contenido
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            localStorage.setItem("popupVisto", "true");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let planEstudioBtn = document.getElementById("planEstudioBtn");
    let submenu = document.getElementById("submenu");

    // Al hacer clic en el botón, mostrar/ocultar el menú
    planEstudioBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que el clic cierre el menú
        submenu.classList.toggle("hidden");
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function(event) {
        if (!submenu.contains(event.target) && event.target !== planEstudioBtn) {
            submenu.classList.add("hidden");
        }
    });
});
