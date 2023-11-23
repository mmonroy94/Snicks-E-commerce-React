import style from './AdminHome.module.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { validateProduct } from '../../../formValidation';
import { useSelector } from 'react-redux'; 

const AdminHome = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts)    

    // const genders = ['Mujer','Hombre', 'Unisex']
    // const [data, setData] = useState({
    //     name: '',
    //     brand: '',
    //     price: '',
    //     stock: '',
    //     detail: '',
    //     image: '',
    //     gender: []
    // })
  
    // const [errors, setErrors] = useState({
    //     name: '',
    //     brand: '',
    //     price: '',
    //     stock: '',
    //     detail: '',
    //     image: ''
    // })

    // const handleChange = (event) =>{
    //     const { name, value } = event.target;
    //     if(name==="gender"){
    //         if(value==='') return data
    //         if(!data.gender.includes(value)){
    //             return setData({
    //                     ...data,
    //                     [name]: [...data[name], value]
    //                   })
    //         }}else{
    //             setData({
    //                 ...data,
    //                 [name]: value
    //                 })
    //             }
    //             const newErrors = validateProduct({
    //                 ...data,
    //                 [name]: value,
    //               });
    //               setErrors(newErrors);
    // }
  
    // const disableByEmptyProps = () => {
    //   let disabledAux = true;
    //   if (data.email === "" || data.password === "") {
    //     disabledAux = true;
    //   } else {
    //     disabledAux = false;
    //   }
    //   return disabledAux;
    // }
  
    // const handleSubmit = (ev) => {
    //   ev.preventDefault();
  
    //   axios.post('https://jsonplaceholder.typicode.com/posts', data)
    //     .then((response) => {
    //       console.log('Producto creado exitosamente:', response.data);
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    // };
    
    // const handleDelete = (event) => {
    //     const { name } = event.target;
    //     setData({
    //     ...data,
    //     [name]: [...data[name].filter(element=> element!==event.target.id)]
    //     })

    // }

    return(

              <div className='d-flex flex-column justify-content-center align-items-center '>
                <h2 className="display-6">Inventario</h2>
                <p className="lead text-secondary px-2">Creación y edición de productos</p>
                <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    {/* <th scope="col">Imagen</th> */}
                    <th scope="col">Nombre</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Género</th>
                    <th scope="col">Precio - USD</th>
                    <th scope="col">Stock/Cantidad</th>
                    <th scope="col">Modificar</th>
                  </tr>
                </thead>
                <tbody>
                  
                {products?.map((product, index) => {
                return (
                    <tr>
                    <th scope="row">{index}</th>
                    {/* <td><img src={product.image} alt={product.name} className=''/></td> */}
                    <td>{product.name}</td>
                    <td>{product.type}</td>
                    <td>{product.brand}</td>
                    <td>{product.gender}</td>
                    <td>{product.price}</td>
                    <td>PDTE</td>
                    <td><button className="px-3 py-1 mx-2 btn btn-outline-primary" type="button"><i class="bi bi-pencil"></i></button></td>
                    <td><button className="px-3 py-1 mx-2 btn btn-outline-primary">Ver detalle</button></td>  
                    </tr>
                )
            })}
                </tbody>
                </table>
              </div>  
              

    )   
}

export default AdminHome





{/* <div className='d-flex flex-column justify-content-center align-items-center '>
<h2 className="display-6">Productos</h2>
<p className="lead text-secondary px-2">Creación y edición</p>

<form onSubmit={handleSubmit} id="createProductForm">

  <div className="mb-3 input-group-sm">
    <label htmlFor="productName" className="form-label">Nombre producto</label>
    <input onChange={handleChange} type="text" name='name' id="productName" value={data.name} className="form-control" />
    <div className="error-container">
      {errors.name ? (
        <p className='text-danger'>{errors.name}</p>
      ) : (
        <p className='text-light'>{errors.stock}</p>
      )}
    </div>
  </div>

  <div className="mb-3 input-group-sm">
    <label htmlFor="productBrand" className="form-label">Marca</label>
    <input onChange={handleChange} type="text" name='brand' id="productBrand" value={data.brand} className="form-control" />
    <div className="error-container">
      {errors.brand ? (
        <p className='text-danger'>{errors.brand}</p>
      ) : (
        <p className='text-light'>{errors.stock}</p>
      )}
    </div>
  </div>

  <div className="mb-3 input-group-sm">
    <label htmlFor="productPrice" className="form-label">Precio</label>
    <input onChange={handleChange} type="text" name='price' id="productPrice" value={data.price} className="form-control" />
    <div className="error-container">
      {errors.price ? (
        <p className='text-danger'>{errors.price}</p>
      ) : (
        <p className='text-light'>{errors.stock}</p>
      )}
    </div>
  </div>
  
  <div className="mb-3 input-group-sm">
    <label htmlFor="productStock" className="form-label">Inventario disponible</label>
    <input onChange={handleChange} type="text" name='stock' id="productStock" value={data.stock} className="form-control" />
    <div className="error-container">
      {errors.stock ? (
        <p className='text-danger'>{errors.stock}</p>
      ) : (
        <p className='text-light'>{errors.stock}</p>
      )}
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="productDetail" className="form-label">Descripción del producto</label>
    <textarea onChange={handleChange} type="text" name='detail' value={data.detail} class="form-control" id="productDetail" rows="3"></textarea>
    <div className="error-container">
      {errors.detail ? (
        <p className='text-danger'>{errors.detail}</p>
      ) : (
        <p className='text-light'>{errors.stock}</p>
      )}
    </div>
  </div>

  <div className="mb-3 input-group-sm">
    <label htmlFor="productImage" className="form-label">URL imagen</label>
    <input onChange={handleChange} type="text" name='image' id="productImage" value={data.image} className="form-control" />
    <div className="error-container">
      {errors.image ? (
        <p className='text-danger'>{errors.image}</p>
      ) : (
        <br />
      )}
    </div>
  </div>

  <div className="mb-3 input-group-sm">
    <label htmlFor="productGender" className="form-label">Género</label>
  <select class="form-select" aria-label="Default select example" name='gender' onChange={handleChange}>

    <option selected value=''>Selecciona una opción</option>
    {genders.map(gender=> <option value={gender} id={gender} key={gender}> {gender} </option>)}
    </select>
</div>

<div>
    {
        data.gender.map((element)=> 
            <div>
                <label >{element}</label> <button name='gender' id={element} key={element} onClick={handleDelete}>X</button>
            </div>)
    }
</div>

  <div className="d-grid pt-1">
    <button className="btn btn-primary" type="submit" id="submitButton" disabled={disableByEmptyProps()}>
      Guardar
    </button>
  </div>
</form>

</div>   */}