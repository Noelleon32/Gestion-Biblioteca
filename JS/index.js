// Array para almacenar los libros disponibles
let librosDisponibles = [];

// Alternar entre los formularios de préstamo y donación
function toggleForm(formId) {
    const loanForm = document.getElementById("loanForm");
    const donationForm = document.getElementById("donationForm");
    const loanButton = document.getElementById("loanButton");
    const donationButton = document.getElementById("donationButton");

    if (formId === "loanForm") {
        loanForm.style.display = "block";
        donationForm.style.display = "none";
        loanButton.style.display = "none";
        donationButton.style.display = "inline-block";
    } else if (formId === "donationForm") {
        donationForm.style.display = "block";
        loanForm.style.display = "none";
        donationButton.style.display = "none";
        loanButton.style.display = "inline-block";
    }
}

// Función para registrar el préstamo de un libro
function registrarPrestamo() {
    const nombre = document.getElementById("nombre").value;
    const carrera = document.getElementById("carrera").value;
    const semestre = document.getElementById("semestre").value;
    const libro = document.getElementById("libro").value;
    const plazo = document.getElementById("plazo").value;
    const messageDiv = document.getElementById("message");

    if (nombre && carrera && semestre && libro && plazo) {
        const libroIndex = librosDisponibles.indexOf(libro);
        if (libroIndex > -1) {
            librosDisponibles.splice(libroIndex, 1);
            updateLibrosDisponibles();
            messageDiv.innerText = `Préstamo registrado para el estudiante ${nombre}.`;
            messageDiv.style.color = "green";
        } else {
            messageDiv.innerText = "El libro solicitado no está disponible.";
            messageDiv.style.color = "red";
        }
    } else {
        messageDiv.innerText = "Por favor, completa todos los campos.";
        messageDiv.style.color = "red";
    }
}

// Función para registrar la donación de un libro
function registrarDonacion() {
    const donador = document.getElementById("donador").value;
    const tituloDonacion = document.getElementById("tituloDonacion").value;
    const fechaDonacion = document.getElementById("fechaDonacion").value;
    const messageDiv = document.getElementById("message");

    if (donador && tituloDonacion && fechaDonacion) {
        librosDisponibles.push(tituloDonacion);
        updateLibrosDisponibles();
        messageDiv.innerText = `Donación registrada del libro "${tituloDonacion}" por ${donador}.`;
        messageDiv.style.color = "green";
    } else {
        messageDiv.innerText = "Por favor, completa todos los campos.";
        messageDiv.style.color = "red";
    }
}

// Actualizar la lista de libros disponibles
function updateLibrosDisponibles() {
    const librosList = document.getElementById("librosDisponibles");
    librosList.innerHTML = librosDisponibles
        .map(libro => `<li>${libro}</li>`)
        .join("");
}
