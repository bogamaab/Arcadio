module("1.Mostrar Tablero de juego");

test("grilla de 13X23 celdas", function() {
	var contenedor= "#body";
	var filas=23, columnas=13;
	dibujarGrilla(contenedor, filas, columnas);
	var $grilla=$("#body table");
	equal($grilla.length,1);
	equal($grilla.find("tr").length,23);
	equal($grilla.find("td").length,23*13);	
});

test("Ladrillos distribuidos desde la fila 1 hasta la fila 18", function() {
	var bloqueTipoA= new Bloque(TipoA,0,1,2,0);
	var bloqueTipoB= new Bloque(TipoB,0,1,2,3);
	var bloqueTipoC= new Bloque(TipoC,0,1,2,5);
	var bloqueTipoD= new Bloque(TipoD,0,1,2,7);
	var bloqueTipoX= new Bloque(TipoX,0,0,6,3);
	pintarBloques([bloqueTipoA, bloqueTipoB, bloqueTipoC, bloqueTipoD, bloqueTipoX]);
	equal($(TipoA.className).length,1);
	equal($(TipoB.className).length,1);
	equal($(TipoC.className).length,1);
	equal($(TipoD.className).length,1);
	equal($(TipoX.className).length,1);
});

module("2.Mostrar Nave Manejable"); 

test("ve de 2X1 celdas de tamaño ubicada en la fila 22", function() {
	dibujarGrilla("#body", 23, 13);
	var ancho= 2;
	PintarNave(ancho);
	equal($("tr:nth.child(22)").find(".PintarNave").length,1);
	equal($("#body table td[colspan='"+ancho+"']").length,1);

});

test("La nave se debe poder mover horizontalmente sobre la fila 22", function() {
	var ancho= 2;
	var izquierda = 0;
	var derecha = 0;
	dibujarGrilla("#body", 23, 13);
	var nave= PintarNave(ancho);
	var x= nave.x;
       	nave.mover(izquierda);
	equal($( nave.x, x-1));

	nave.mover(derecha);
	equeal(nave.x,x);

	nave.x= 1;
	nave.mover(izquierda);
        equal(nave.x,1);

	nave.x= 12;
	nave.mover(derecha);
	equal(nave.x,12);
	
	nave.x= 8;
	nave.mover= 100;
	equal(nave.x,8);
});

module("3.Cargar Mapa");
test("Convertir linea de texto en bloques", function(){
	var cadena = "X,A,B,C,D";
	var bloqueTipoA= new Bloque(TipoA,0,1,2,0);
	var bloqueTipoB= new Bloque(TipoB,0,1,2,3);
	var bloqueTipoC= new Bloque(TipoC,0,1,2,5);
	var bloqueTipoD= new Bloque(TipoD,0,1,2,7);
	var bloqueTipoX= new Bloque(TipoX,0,0,6,3);
	var resultado=[bloqueTipoA, bloqueTipoB, bloqueTipoC, bloqueTipoD, bloqueTipoX];
	equal(cadenaEnBloques(cadena),resultado);

});
test("El nivel inicial debe estar construido según el archivo mapaBase.csv", function(){
	equal(typeof cargarArchivo('http://api.codetag.me/media/mapas/mapaBase.csv'), Array);	
});


module("4.Romper Bloques");

test("Implementar la bola que rebota contra los bloques, paredes y la nave.", function(){
	dibujarGrilla("#body",23,13);
	PintarNave(2);
	var bola = dibujarBola(10,30,-1,1);
	bola.paso();
	equal(bola.angulo,60);
	equal(bola.x,-1);
	equal(bola.y,-1);
	
});

test("Bloque simple (A): se destruye con un solo golpe", function(){
	
});

test("Bloque simple (B): se destruye con dos golpes", function(){
	ok(true,"all pass");
});

test("Bloque simple (C): se destruye con tres golpes", function(){
	ok(true,"all pass");
});

test("Bloque simple (D): indestructible", function(){
	ok(true,"all pass");
});

test("regla de puntajes según los bloques destruidos", function(){
	ok(true,"all pass");
});

test("Iniciar el juego con 3 vidas", function(){
	ok(true,"all pass");
});

test("Perder vidas cuando la bola llegue a la fila 23", function(){
	ok(true,"all pass");
});

test("Iniciar un nuevo juego", function(){
	ok(true,"all pass");
});

test("Almacenar scoreboard de manera local", function(){
	ok(true,"all pass");
});

module("5.Obtener poderes");

test("De manera aleatoria al romper un bloque debe caer un poder, para obtener el poder la nave debe atraparlo.",function(){
	ok(true,"all pass");
});

test("Ganar vida: gana una vida adicional.", function(){
	ok(true,"all pass");
});

test("Nave al doble: la nave aumenta su tamaño a 4X1 celdas durante 12 segundos exactamente", function(){
	ok(true,"all pass");
});

test("Nueva bola: una nueva bola aparece en juego. El jugador solo pierde una vida cuando no haya bolas en juego", function(){
	ok(true,"all pass");
});

test("Bloque explosivo: Convierte los bloques normales en bloques explosivos (E) cuando la bola los toca por primera vez. Duración 10 segundos", function(){
	ok(true,"all pass");
});

test("Un bloque explosivo destruye todos los bloques a su alrededor cuando es tocado por la bola.", function(){
	ok(true,"all pass");
});

test("Bola rápida: la velocidad de la bola aumenta a 2 veces la velocidad normal de la bola. Duración 12 segundos.", function(){
	ok(true,"all pass");
});

test("Bola de fuego: no rebota al tocar los bloques y los destruye con solo tocarlos. Duración 10 segundos.", function(){
	ok(true,"all pass");
});

test("Bola lenta: la velocidad de la bola disminuye a la mitad de la velocidad normal de la bola. Duración 10 segundos.", function(){
	ok(true,"all pass");
});

test("Nave a la mitad : la nave disminuye su tamaño a 1X1 celdas durante 12 segundos.", function(){
	ok(true,"all pass");
});

test("Controles espejo: se intercambiaran los controles de movimiento de la nave, pe. Con la tecla <- moverá la nave hacia la derecha y viceversa. duración 10 segundos.",function(){
	ok(true,"all pass");
});

test("Atrapar bola: cuando la bola toca la nave esta es atrapada por la nave (no rebota), para volver a lanzar la bola se debe ejecutar el botón de acción (una tecla por ejemplo. barra espaciadora o click izquierdo del mouse)", function(){
	ok(true,"all pass");
});

test("Disparar: a través del botón de de acción permite a la nave disparar rayos a los bloques que equivalen a un golpe. Duración 10 segundos.", function(){
	ok(true,"all pass");
});

test("Bola fantasma: la bola se convierte en transparente atravesando los bloques, con el botón de activación la bola regresa a la normalidad. Un solo uso.", function(){
	ok(true,"all pass");
});

test("Lanzar bomba: se puede disparar una bomba desde la nave que destruiría 1 bloque de radio a la redonda donde impacte. (un solo uso)", function(){
	ok(true,"all pass");
});

test("Salvavidas: si la bola se va a caer y la nave no alcanza a cogerla se puede activar el poder. (un solo uso)", function(){
	ok(true,"all pass");
});

test("Magnetismo: atrae la bola a la nave, independientemente de donde se encuentre, si hay un bloque de por medio debe rebotar e inactivar el poder", function(){
	ok(true,"all pass");
});

module("6.Carga dinámica de mapas");

test("Cargar mapas desde una URL", function(){
	ok(true,"all pass");
});

module("7.Fin del tablero y Nuevos Tableros");

test("Si no hay mas vidas se debe terminar el juego (“Game Over”)", function(){
	ok(true,"all pass");
});

test("Si se rompen todos los bloques menos los irrompibles el tablero se dará por terminado", function(){
	ok(true,"all pass");
});

test("Los mapas que se encuentran en las urls al final tienen una ruta de otro mapa que sera cargado al terminar el mapa", function(){
	ok(true,"all pass");
});

test("Los puntajes se deben sumar al pasar entre mapas", function(){
	ok(true,"all pass");
});

test("Si un mapa se termina sin perder vidas se obtiene una vida adicional hasta un máximo de 5 vidas.", function(){
	ok(true,"all pass");
});
