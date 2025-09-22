// Renderiza el menú principal desde localStorage si hay datos guardados
(function renderSiteMenu() {
    try {
        const raw = localStorage.getItem('siteMenuItems');
        if (!raw) return; // sin datos => mantener HTML existente
        const items = JSON.parse(raw);
        if (!Array.isArray(items) || items.length === 0) return;

        const nav = document.getElementById('mainNav');
        if (!nav) return;

        // Mantener el chatbot y otros elementos al final si existen
        const extras = Array.from(nav.children).filter(c => c.id && (c.id === 'chatbot-toggle' || c.id === 'chatbot-container'));
        nav.innerHTML = '';

        items.forEach(item => {
            const btn = document.createElement('button');
            btn.className = 'nav-button';
            btn.addEventListener('click', () => {
                if (item.target === '_blank') {
                    window.open(item.href, '_blank');
                } else {
                    window.location.href = item.href;
                }
            });

            const iconEl = document.createElement('i');
            iconEl.className = 'icon';
            if (item.icon && item.icon.startsWith('fa')) {
                // usa font awesome
                iconEl.className = `icon ${item.icon}`;
                iconEl.textContent = '';
            } else {
                // emoji
                iconEl.textContent = item.icon || '🔗';
            }
            btn.appendChild(iconEl);
            btn.append(document.createTextNode(' ' + item.title));
            nav.appendChild(btn);
        });

        // reinsert extras
        extras.forEach(e => nav.appendChild(e));
    } catch (_) {
        // noop
    }
})();


