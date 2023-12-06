document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('encuestaForm').addEventListener('submit', function (event) {
    
    event.preventDefault();

    var edad = document.getElementById('edad').value;
    var sexo = document.getElementById('sexo').value;
    var educacion = document.getElementById('educacion').value;
    var ocupacion = document.getElementById('ocupacion').value;
    var url = 'Resultado-Emiliano-Rodriguez.html?edad=' 
    + encodeURIComponent(edad) + '&sexo=' 
    + encodeURIComponent(sexo) + '&educacion=' 
    + encodeURIComponent(educacion) + '&ocupacion=' 
    + encodeURIComponent(ocupacion);
    window.location.href = url;

});
})

function obtenerParametro(name){
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    resultados = regex.exec(location.search);
    return resultados === null ? "" : decodeURIComponent (resultados [1]);
}

edad = obtenerParametro('edad');
sexo = obtenerParametro('sexo');
eduacion = obtenerParametro('educacion');
ocupacion = obtenerParametro('ocupacion');
document.getElementById('resultado').innerHTML =
'<p>Edad: ' + edad + '</p>' + 
'<p>sexo: ' + sexo   + '</p>' + 
'<p>Nivel educativo: ' + eduacion + '</p>'+
'<p>ocupacion: ' + ocupacion + '</p>';


