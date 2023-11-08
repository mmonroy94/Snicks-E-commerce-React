import loginImg from '../loginImg.jpg'
import { validateLogin } from '../../formValidation'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { signIn } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [ data, setData ] = useState({
    email: '',
    password: ''
  })

  const [ errors, setErrors] = useState({
    email: '',
    password: ''
  })
  
  // const [showPassword, setShowPassword] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    const newErrors = validateLogin({
      ...data,
      [name]: value,
    });
    setErrors(newErrors);
  };

  const disableByEmptyProps = () => {
    let disabledAux = true;
    if (data.email === "" || data.password === "") {
      disabledAux = true;
    } else {
      disabledAux = false;
    }
    return disabledAux;
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then((response) => {
        console.log('Inicio de sesión exitoso:', response.data);
        dispatch(signIn(true))
        navigate("/")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

return(
  <div className="container">
    <div className="row align-items-center">

      {/* CONTENEDOR CENTRAL */}
      <div className='d-flex justify-content-center align-items-center'>

        <div className="col-md-5 image-container">
          <img src={loginImg} alt="whiteSneakersImage" className="img-fluid"/>
        </div>
      
        <div className="col-md-7 d-flex justify-content-center align-items-center">
        <div className="text-container d-flex flex-column justify-content-center align-items-center">
          
          <h2 className="display-4">¡Te damos la bienvenida!</h2>
          <p className="lead text-secondary px-2">Iniciar sesión</p>

          <form onSubmit={handleSubmit} id="loginForm" className="container col">
            
            <div className="pt-4" id="emailContainer">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input onChange={handleChange} type="email" name='email' id="emailInput"  placeholder="ejemplo@correo.com" value={data.email} className="form-control" />
              <div className="error-container">
                  {errors.email ? (
                    <p className='text-danger'>{errors.email}</p>
                  ) : (
                    <p></p>
                  )}
              </div>
            </div>

            <div className="mb-3" id="passwordContainer">
              <label htmlFor="passwordInput" className="form-label">Contraseña</label>
              <input onChange={handleChange} type='password' className="form-control" name="password" id="passwordInput" value={data.password}/>
              {/* <input onChange={handleChange} type={showPassword ? 'text' : 'password'} className="form-control" name="password" id="passwordInput" value={data.password}/> */}
                {/* <button onClick={togglePasswordVisibility}>
                  {!showPassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-fill"></i>}
                </button> */}
            </div>          

            <div className="d-grid pt-4">
              <button className="btn btn-primary" type="submit" id="submitButton" disabled={disableByEmptyProps()}>
                Iniciar sesión
              </button>
            </div>
          </form>

          <div className="pt-4">
            <p>No tengo una cuenta, <NavLink to='/registro'>quiero registrarme.</NavLink></p>
          </div>

        </div>
      </div>

      </div>
    
    </div>
  </div>
  )

}

export default Login