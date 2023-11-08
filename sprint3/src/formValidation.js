export const validateLogup = (data) => {
    let errors = {};
  
    if (data.name === "" || data.name.length > 20 || data.name.length < 3) {
      errors.name = "Ingresa un nombre de mínimo 3 y máximo 20 caracteres";
    }
  
    if (!/(?=.*[a-z])/.test(data.password)) {
      errors.password = "Requiere una letra minúscula";
    } else if (!/(?=.*[A-Z])/.test(data.password)) {
      errors.password = "Requiere una letra mayúscula";
    } else if (data.password.length < 6 || data.password.length > 10) {
      errors.password = "Requiere entre 6 y 10 caracteres";
    } 
  
    if( data.password !== data.passwordConfirmation) {
      errors.passwordConfirmation = 'Las contraseñas no coinciden'
    }
  
    if (data.address === "" || data.address.length > 30 || data.address.length < 3) {
      errors.address = "La dirección debe tener mínimo 3 y máximo 30 caracteres";
    }
  
    if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)) {
      errors.email = "Ingresa un email valido - ejemplo@correo.com";
    }
  
    if (data.cellphone === "" || isNaN(Number(data.cellphone)) || data.cellphone.length < 10 || data.cellphone.length > 10) {
      errors.cellphone = "Ingresa un número celular de 10 dígitos";
    }
    
     return errors;
  };
  
  
  export const validateLogin = (data) => {
    let errors = {};

    if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)) {
      errors.email = "Ingresa un email valido - ejemplo@correo.com";
    }
  
     return errors;
  };