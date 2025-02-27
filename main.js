document.querySelectorAll(".social-icons a").forEach(link => {
    link.addEventListener("click", () => {
        alert(`Redirigiendo a ${link.textContent.trim()}...`);
    });
});
