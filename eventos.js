window.addEventListener('DOMContentLoaded', () => {
	const boton = document.getElementById("boton");
	const divBoton = document.getElementById("div_boton");

	divBoton.addEventListener("click", 
		() => {
		alert("Hola! Soy el div");
	});
	
	boton.addEventListener("click",
	(event) => {
		event.stopPropagation();
		alert("Hola!");
	}
	);
});
