

function input() {
	let a = false
	x = document.getElementById("nombre").value;
	if (checkEmpty(x,"nombre")) {
		a = true;
	} else {
		pattern = /^[A-Za-z]+$/;
		a = !checkPattern(x,"nombre",pattern) || a;
	}
	
	x = document.getElementById("email").value;
	if (checkEmpty(x,"email")) {
		a = true;
	} else {
		pattern = /[\w-\.]+@+([\w-]+\.)+[\w-]/;
		a = !checkPattern(x,"email",pattern) || a;
	}
	
	x = document.getElementById("clave").value;
	if (checkEmpty(x,"clave")) {
		a = true;
	} else if (x.length < 8) {
		text = "Debe tener más de 8 caracteres"
		document.getElementById("claveR").innerHTML = text;
		document.getElementById("clave").style.borderWidth = "3px";
		document.getElementById("clave").style.borderColor = "E05959";
		createImage("clave",0);
		a = true;
	}

	let y = document.getElementById("clave2").value;
	if (checkEmpty(y,"clave2")) {
		a = true;
	} else if (x != y) {
		text = "Las contraseñas no coinciden"
		document.getElementById("clave2R").innerHTML = text;
		document.getElementById("clave2").style.borderWidth = "3px";
		document.getElementById("clave2").style.borderColor = "E05959";
		createImage("clave2",0);
		a = true;
	}
	
	if (!a) {
		alert("La inscripción ha sido correcta");
	}
}

function createImage(elementId,correct) {
	imagen = new Image();
	path = '';
	if (correct == 0)
		path = 'images/incorrect.png';
	else
		path = 'images/correct.png';
	imagen.src = path;
	imagen.style.height = "25%";
	imagen.style.right = "3%";
	imagen.style.top = "50%";
	document.getElementById(elementId).before(imagen);
}

function checkEmpty (x, id) {
	if (x == "") {
		text = "Rellene este campo"
		document.getElementById(id).style.borderWidth = "3px";
		document.getElementById(id).style.borderColor = "E05959";
		createImage(id,0);
		returned = true;
	} else {
		text = ""
		document.getElementById(id).style.borderWidth = "3px";
		document.getElementById(id).style.borderColor = "4DCA64";
		createImage(id,1);
		returned = false;
	}
	document.getElementById(id+"R").innerHTML = text;
	return returned;
}

function checkPattern(x,id,filter) {
	returned = filter.test(x);
	if (!returned) {
		document.getElementById(id).style.borderColor = "E05959";
		createImage(id,0);
		if (id == "email") text = "Email inválido";
		else if (id == "nombre") text = "Nombre inválido";
		document.getElementById(id+"R").innerHTML = text;
	}

	return returned;
}