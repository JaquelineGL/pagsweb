
/*FUNCIONES DE LA CALCULADORA*/
function suma() {
	var var1 = parseFloat(document.getElementById('variable1').value);
	var var2 = parseFloat(document.getElementById('variable2').value);
	document.getElementById('resultado').innerHTML = var1+var2;

}

function resta() {
	var var1 = parseFloat(document.getElementById('variable1').value);
	var var2 = parseFloat(document.getElementById('variable2').value);
	document.getElementById('resultado').innerHTML = var1-var2;

}

function multiplicacion() {
	var var1 = parseFloat(document.getElementById('variable1').value);
	var var2 = parseFloat(document.getElementById('variable2').value);
	document.getElementById('resultado').innerHTML = var1*var2;

}

function division() {
	var var1 = parseFloat(document.getElementById('variable1').value);
	var var2 = parseFloat(document.getElementById('variable2').value);
	document.getElementById('resultado').innerHTML = var1/var2;

}

function borrar() {
	document.getElementById('calculadora').reset();
	document.getElementById('resultado').innerHTML = " ";
	
}

/*FUNCIONES DE LA LINEA DEL TIEMPO*/
function fecha1() {
	document.getElementById('titulofecha').innerHTML= "Ondas electromagnéticas";
	document.getElementById('texto').innerHTML = "Las comunicaciones inalámbricas comenzaron con la postulación de las ondas electromagnéticas por James Cleck";
	document.getElementById('imagentiempo').innerHTML = '<img src="imagenes/1.png">';
}

function fecha2() {
	document.getElementById('titulofecha').innerHTML= "El fotófono";
	document.getElementById('texto').innerHTML = "Graham Bell y Summer Tainter fueron sus inventores. Este permitía la transmisión del sonido por medio de una emisión de luz.";
	document.getElementById('imagentiempo').innerHTML = '<img src="imagenes/2.png">';
}
function fecha3() {
	document.getElementById('titulofecha').innerHTML= "Primera transmisión sin cables";
	document.getElementById('texto').innerHTML = "Rudolf Hertz la realizó con ondas electromagnéticas mediante un oscilador como emisor y un resonadorde receptor. ";
	document.getElementById('imagentiempo').innerHTML = '<img src="imagenes/3.png">';
}

function fecha4() {
	document.getElementById('titulofecha').innerHTML= "Primera comunicación por radio";
	document.getElementById('texto').innerHTML = "Marconi establece la primera comunicación por radio entre Inglaterra y Francia a través del Canal de la Mancha";
	document.getElementById('imagentiempo').innerHTML = '<img src="imagenes/4.png">';
}
function fecha5() {
	document.getElementById('titulofecha').innerHTML= "Primer sistema de transmisión";
	document.getElementById('texto').innerHTML = "Se construye en América el primer sistema para la transmisión de voz a través de ondas electromagnéticas";
	document.getElementById('imagentiempo').innerHTML = '<img src="imagenes/5.png">';
}

function fecha6() {
	document.getElementById('titulofecha').innerHTML= "Aloha";
	document.getElementById('texto').innerHTML = "Creación del primer sistema de conmutación de paquetes mediante una red de comunicación por radio, dicha red se llamó ALOHA. ";
	document.getElementById('imagentiempo').innerHTML = '<img src="imagenes/6.png">';
}
function fecha7() {
	document.getElementById('titulofecha').innerHTML= "Telefonía móvil";
	document.getElementById('texto').innerHTML = "Martin Cooper el padre de la telefonía móvil celular presenta el primer radioteléfono mientras trabajaba para Motorola (EEUU)";
	document.getElementById('imagentiempo').innerHTML = '<img src="imagenes/7.png">';
}

function fecha8() {
	document.getElementById('titulofecha').innerHTML= "Red de infrarrojos";
	document.getElementById('texto').innerHTML = "IBM publicaba los resultados de su experimento con infrarrojos en una fábrica suiza. Resultados publicados en el vol 67 del Proceeding IEEE";
	document.getElementById('imagentiempo').innerHTML = '<img src="imagenes/8.png">';
}
function fecha9() {
	document.getElementById('titulofecha').innerHTML= "Banda ISM";
	document.getElementById('texto').innerHTML = "Fecha clave para la historia del WiFI: Se libera la banda ISM para transmitir datos inalámbricos sin necesidad de sacar una licencia";
	document.getElementById('imagentiempo').innerHTML = '<img src="imagenes/9.png">';
}

function fecha10() {
	document.getElementById('titulofecha').innerHTML= "Wave LAN";
	document.getElementById('texto').innerHTML = "NCR y AT&T inventaron un sistema de transmisión inalámbrica para cajeros a la cual llamaron WaveLAN. ";
	document.getElementById('imagentiempo').innerHTML = '<img src="imagenes/10.png">';
}
function fecha11() {
	document.getElementById('titulofecha').innerHTML= "WiFi";
	document.getElementById('texto').innerHTML = " El WiFi se lanzó por primera vez para los consumidores. Cuando se creó un comité llamado 802.11. Creando asi el IEEE802.11";
	document.getElementById('imagentiempo').innerHTML = '<img src="imagenes/11.png">';
}

/*FUNCIONES DEL CURRICULUM VITAE*/

function cambiarfondo(){
	document.getElementById('exp').style.background= '#B9770E';
	document.getElementById('educ').style.background= '#B9770E';
	document.getElementById('contacts').style.background= '#B9770E';
	document.getElementById('idiomas').style.background= '#B9770E';
	document.getElementById('underline').style.background= '#B9770E';
	document.getElementById('wrapper').style.background= '#FFF8D2';
	
}

function cambiarletras(){
	document.getElementById('wrapper').style.color= '#9B3D00';
	document.getElementById('exp').style.color= '#ffffff';
	document.getElementById('educ').style.color= '#ffffff';
	document.getElementById('contacts').style.color= '#ffffff';
	document.getElementById('idiomas').style.color= '#ffffff';
	document.getElementById('name').style.color= '#AF1E07';


	
	
}

function fotoformal(){
	document.getElementById('imagenc').innerHTML = '<img src="imagenes/xd.png">';
}

function fotocasual(){
	document.getElementById('imagenc').innerHTML = '<img src="imagenes/fotoc.png">';
}

function primertrabajo(){
	document.getElementById('tienda0').innerHTML= "Novedades Ale";
	document.getElementById('tienda1').innerHTML= "-Atención al cliente";
	document.getElementById('tienda2').innerHTML= "-Corte de caja";
}

function segundotrabajo(){
	document.getElementById('pw0').innerHTML= "Phanda";
	document.getElementById('pw1').innerHTML= "-Programación en HTML";
	document.getElementById('pw2').innerHTML= "-Programación en PHP";
	document.getElementById('pw3').innerHTML= "-Programación en CSS";
	document.getElementById('pw4').innerHTML= "-Uso básico de Hostinger ";
}

function estudio1(){
	document.getElementById('es0').innerHTML= "CECYTEA Plantel Pabellón de Arteaga ";
	document.getElementById('es1').innerHTML= "-Programacion básica en Java y HTML";
}

function estudio2(){
	document.getElementById('est0').innerHTML= "Intituto Tecnológico de Pabellón de Artega";
	document.getElementById('est1').innerHTML= "-Programación en HTML";
	document.getElementById('est2').innerHTML= "-Programación en PHP";
	document.getElementById('est3').innerHTML= "-Programación en CSS";
	document.getElementById('est4').innerHTML= "-Programación básica en C#";
	document.getElementById('est5').innerHTML= "-Experiencia en planificación de proyectos";
	document.getElementById('est6').innerHTML= "-Aplicación básica del modelo SCRUM a los proyectos";
	document.getElementById('est7').innerHTML= "-Uso de diversos sistemas operativos como Linux Mint, Ubuntu, Debian, Windows, Zorin.";
}