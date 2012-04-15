var TipoDeBloque = function(tipoBloque,golpesDestruccion,puntaje,destructible){
	this.tipoBloque =  tipoBloque;
	this.golpesDestruccion = golpesDestruccion;
	this.puntaje = puntaje;
	this.destructible = destructible;
}
var Bloque = function (tipoDeBloque,golpeResivido,x,y,poder){
	this.tipoDeBloque = tipodDeBloque;
	this.golpeResivido = golpeResivido;
	this.x = x;
	this.y = y;
	this.poder = poder;
}
var Bola = function(x,y,alpha,velocidad){
	this.x = x;
	this.y = y;
	this.alpha = alpha;
	this.velocidad = velocidad;
}
var Nave = function(x,velocidad){
	this.x = x;
	this.velocidad =  velocidad;
}
var Tablero = function(bloque,x,y){
	this.bloque = bloque;
	this.x = x;
	this.y = y;
}
var Usuario = function (vida,puntaje){
	this.vida = vida;
	this.puntaje = puntaje;
}
var Poderes = {
	ganarvida: "vida",
	naveMasGrande: "grande",
	nuevaBola: "newBall",
	bloqueExplosivo: "Boom!",
	bolaRapida: "faster!",
	bolaFuego: "Fire",
	bolaLenta: "leeeeeennnnnttttoooo",
	navePequenia: "chiquita",
	controlesEspejo: "invertido",
	atraparBola: "atrapar",
	dispararBala: function(x,y,velocidad){},
	bolaFantasma: "fantasma",
	lanzarBomba: function(x,y,velocidad){},
	salvaVida: "Yupi!!!",
	magnetismo: "magneto"
}
