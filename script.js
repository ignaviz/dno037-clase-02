var elEncabezado = document.querySelector("header");
var laHora = new Date().getHours();
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Hola, que tengas una linda mañana";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Hola, ojalá tengas una linda tarde";
} else {
    elSaludo = "Hola, espero hayas disfrutado tu día y tengas buena noche";
}
var elColor;
function setup() {
    createCanvas(windowWidth -200, windowHeight -400).position(100,300).style("z-index", -1);
    background(255);
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "Index").parent("vinculos");
    createA("page.html", "Page").parent("vinculos");
    createA("dibujo.html", "Dibujo").parent("vinculos");
    elColor = createColorPicker("#555555").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}
function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function portada() {
    createSpan(". Te encuentras actuamente en index.html, puedes dibujar en el rectángulo de más abajo :)").parent("title");
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#000000");
}
function pagina() {
    createSpan(". Esta pagina es page.html, puedes dibujar en el rectángulo de más abajo :)").parent("title");
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#000000");
}