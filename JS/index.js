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

// Función para validar los campos del formulario
function validarFormulario(inputs) {
    for (let input of inputs) {
        if (!input.value.trim()) {
            mostrarMensaje(`Por favor, completa el campo: ${input.name}`, "red");
            return false;
        }
    }
    return true;
}

// Función para registrar el préstamo de un libro
function registrarPrestamo() {
    const inputs = [
        document.getElementById("nombre"),
        document.getElementById("carrera"),
        document.getElementById("semestre"),
        document.getElementById("libro"),
        document.getElementById("plazo")
    ];

    if (validarFormulario(inputs)) {
        const nombre = inputs[0].value;
        const libro = inputs[3].value;
        const libroIndex = librosDisponibles.indexOf(libro);

        if (libroIndex > -1) {
            librosDisponibles.splice(libroIndex, 1);
            updateLibrosDisponibles();
            mostrarMensaje(`Préstamo registrado para el estudiante ${nombre}.`, "green");
        } else {
            mostrarMensaje("El libro solicitado no está disponible.", "red");
        }
    }
}

// Función para registrar la donación de un libro
function registrarDonacion() {
    const inputs = [
        document.getElementById("donador"),
        document.getElementById("tituloDonacion"),
        document.getElementById("fechaDonacion")
    ];

    if (validarFormulario(inputs)) {
        const tituloDonacion = inputs[1].value;
        const donador = inputs[0].value;

        librosDisponibles.push(tituloDonacion);
        updateLibrosDisponibles();
        mostrarMensaje(`Donación registrada del libro "${tituloDonacion}" por ${donador}.`, "green");
    }
}

// Actualizar la lista de libros disponibles
function updateLibrosDisponibles() {
    const librosList = document.getElementById("librosDisponibles");
    librosList.innerHTML = librosDisponibles
        .map(libro => `<li>${libro}<span class="tooltip">❓<span class="tooltiptext">Disponible para préstamo</span></span></li>`)
        .join("");
}

// Mostrar mensaje de confirmación o error
function mostrarMensaje(mensaje, color) {
    const messageDiv = document.getElementById("message");
    messageDiv.innerText = mensaje;
    messageDiv.style.color = color;
    messageDiv.style.opacity = 1;
    setTimeout(() => {
        messageDiv.style.opacity = 0;
    }, 3000);
}

// Función para cambiar el tema de la página
function cambiarTema() {
    const body = document.body;
    body.classList.toggle("dark-theme");
}
