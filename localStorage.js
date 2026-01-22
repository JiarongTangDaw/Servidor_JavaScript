function mostrar() {
    let text = document.getElementById("texto").value;

    localStorage.setItem("texto", text);

    console.log(localStorage);
    alert("Texto introducico: " + localStorage.getItem("texto"));
}