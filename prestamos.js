document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the loan request to a server
    alert('¡Solicitud de préstamo recibida! Te contactaremos pronto.');
    this.reset();
});