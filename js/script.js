const formulario = document.querySelector("#loginForm");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    console.log("Email:", email);
    console.log("Senha:", senha);
});