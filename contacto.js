document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
    this.reset();
});