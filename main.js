
function agregarTarea() {
	let titulo = document.getElementById('titulo').value;
	let descripcion = document.getElementById('descripcion').value;
    
	let entrada = document.createTextNode(titulo +": " + descripcion);
	let elemento = document.createElement("div");
	elemento.appendChild(entrada);

	var publicaciones = document.getElementById("tareas");
	publicaciones.innerHTML += `<div class="card mb-3">
								  <div class="card-body">
									<p>${titulo} - ${descripcion}
									  <a href="#" onclick="alert('La tarea fue enviada!')" class="btn btn-info ml-5">ESTADO</a>
									  <a href="https://moodle.cilsa.org/" target= _blank class="btn btn-info ml-5">MÁS INFO</a>
									</p>
								  </div>
								</div>`;


	document.getElementById('formulario').reset();

}

function borrarTarea() {
	formulario.reset();
}