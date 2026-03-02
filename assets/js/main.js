$(function () {

    // Cambiar el color de texto de los elementos <li>
    $("#Lista li").css("color", "blue");

    // Agregar dinámicamente un cuarto elemento
    $("#Lista").append("<li>Clase Mundial</li>");

});

$(function() {

    // Botón ocultar/mostrar lista
    $("#toggleBtn").click(function() {
        $("#Lista").toggle(400);
        if ($(this).text() === "Ocultar lista") {
            $(this).text("Mostrar lista");
        } else {
            $(this).text("Ocultar lista");
        }
    });

});

$(document).ready(function(){
    // Inicializa todos los tooltips
    $('[data-toggle="tooltip"]').tooltip();
});