var tipoDeBloque = function(tipoBloque,golpesdestruccion,puntaje,destructible){
	this.tipoBloque =  tipoBloque;
	this.golpesdestruccion = golpesdestruccion;
	this.puntaje = puntaje;
	this.destructible = destructible;
}
var bloque = function (tipoDeBloque,golpeResivido,x,y,poder){
	this.tipoDeBloque = tipodDeBloque;
	this.golpeResivido = golpeResivido;
	this.x = x;
	this.y = y;
	this.poder = poder;
}
var bola = function(x,y,alpha,velocidad){
	this.x = x;
	this.y = y;
	this.alpha = alpha;
	this.velocidad = velocidad ;
}
var nave = function(x,velocidad){
	this.x = x;
	this.velocidad =  velocidad;
}
var tablero = function(bloque,x,y){
	this.bloque = bloque;
	this.x = x;
	this.y = y;
}
var usuario = function (vida,puntaje){
	this.vida = vida;
	this.puntaje = puntaje;
}
var poderes = {
	ganarvida: "vida",
	naveMasGrande: "grande",
	nuevaBola: "newBall",
	bloqueExplosivo: "Boom!",
	bolaRapida: "faster!",
	bolaFuego: "Fire",
	bolaLenta: "leeeeeennnnnttttoooo",
	navePequeña "chiquita",
	atraparBola: "atrapar",
	dispararBala: "ta ta ta",
	bolaFantasma: "fantasma",
	lanzarBomba: "The Bomb",
	salvaVida: "Yupi!!!",
	magnetismo: "magneto"
}
