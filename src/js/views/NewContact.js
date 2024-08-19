import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewContact =()=> {
    const navigate = useNavigate();
        function createContact(){
            //1 um POST com a info
            console.log("Enviar info a API")
            //2 redirecionar a home
            navigate('/');
        }
    return (
        <div className='container mt-5'>
            <h4>Pagina - Criar novo contato</h4>
            <h3>Formulario - novo contato</h3>
            <button className='btn btn-success'
            onClick={()=>{
                createContact();
            }}
            >Criar contato</button>
        </div>
    )
}

export default NewContact