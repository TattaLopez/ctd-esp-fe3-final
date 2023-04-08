import React from 'react';
import Form from '../Components/Form/Form';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contact-view'>
      <h2 className='text-center'>¿Quieres saber más?</h2>
      <p className='text-center'>Envíanos tus consultas y nos pondremos en contacto contigo</p>
      <Form/>
    </div>
  )
}

export default Contact