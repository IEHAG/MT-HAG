// Simple visit counter stored in localStorage
(function initVisitCounter() {
    try {
        const key = 'siteVisitsCount';
        const raw = localStorage.getItem(key);
        let count;
        if (raw === null) {
            // Inicio en 355 visitas la primera vez
            count = 355;
        } else {
            count = parseInt(raw, 10) || 0;
            count += 1;
        }
        localStorage.setItem(key, String(count));
        const el = document.getElementById('visitsCounter');
        if (el) {
            el.textContent = `Visitas: ${count.toLocaleString('es-CO')}`;
        }
    } catch (_) {
        // noop
    }
})();


