export function cantidadCaracteres(input) {
  if (input.value.trim().length >= 3 && input.value.trim().length <= 50) {
    console.log("dato valido");
    input.className = "form-control is-valid";
    return true
  } else {
    console.log("dato invalido");
    input.className = "form-control is-invalid";
    return false
  }
}
//   trim es para quitar los espacios vacios al perder el foco

export function validarEdad(input) {
  let patron = /^[0-9]{1,3}$/;
  // el metodo se llama test
//   === true forma implicita
// el .test valida la expresion regular
  if (patron.test(input.value)  && input.value<=130) {
    input.className = "form-control is-valid";
    return true
  } else {
    input.className = "form-control is-invalid";
    return false
  }
}
export function validarDni(input) {
    // /^[\d]{7,8}}$/ otra opcion
  let patron = /^[\d]{1,2}[\d]{6}$/;
  if (patron.test(input.value)  && input.value<=99999999) {
    input.className = "form-control is-valid";
    return true
  } else {
    input.className = "form-control is-invalid";
    return false
  }
}
export function validarAnio(input) {
  let patron = /^[0-9]{1,4}$/;
  if (patron.test(input.value)  && input.value<=9999) {
    input.className = "form-control is-valid";
    return true
  } else {
    input.className = "form-control is-invalid";
    return false
  }
}
export function validarAltura(input) {
  let patron =/^[0-2](\,[\d]{1,2})?$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
    return true
  } else {
    input.className = "form-control is-invalid";
    return false
  }
}
export function validarPeso(input) {
  let patron =/^[0-2]{1,3}(\,[\d]{1,2})?$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
    return true
  } else {
    input.className = "form-control is-invalid";
    return false
  }
}

