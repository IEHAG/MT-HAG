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
    let nav = document.getElementById("mainNav");

    if (planEstudioBtn && submenu) {
        // Asegurar que el contenedor nav sea el contexto de posicionamiento
        if (nav) {
            nav.style.position = nav.style.position || "relative";
        }

        // Al hacer clic en el botón, mostrar/ocultar el menú
        planEstudioBtn.addEventListener("click", function(event) {
            event.stopPropagation(); // Evita que el clic cierre el menú

            // Si se va a abrir, calcular posición justo debajo del botón
            if (submenu.classList.contains("hidden")) {
                const btnRect = planEstudioBtn.getBoundingClientRect();
                const navRect = nav ? nav.getBoundingClientRect() : { top: 0, left: 0 };

                const top = btnRect.bottom - navRect.top + 8; // 8px de separación
                const left = btnRect.left - navRect.left;

                submenu.style.top = `${top}px`;
                submenu.style.left = `${left}px`;
                submenu.classList.remove("hidden");
            } else {
                submenu.classList.add("hidden");
            }
        });

        // Cerrar el menú si se hace clic fuera de él
        document.addEventListener("click", function(event) {
            if (!submenu.contains(event.target) && event.target !== planEstudioBtn) {
                submenu.classList.add("hidden");
            }
        });
    }
});
