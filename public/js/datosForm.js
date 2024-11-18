document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const formData = {
        nombres: document.getElementById('nombres').value.trim(),
        apellidos: document.getElementById('apellidos').value.trim(),
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value.trim(),
    };

    console.log('Datos enviados:', formData); // Verifica los valores en consola

    try {
        const response = await fetch('http://54.152.95.254:3000/registro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        alert(result.message); // Muestra el mensaje del servidor
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al enviar los datos.');
    }
});
