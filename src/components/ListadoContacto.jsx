import React from 'react';
import { Contacto } from '../models/contacto.class';
import ContactoComponent from './contacto';



const ListadoContacto = () => {

    const defaultContact = new Contacto('Gustavo','Quiroga','quiroga.gustavo@gmail.com',true);

    return (
        <div>
            <div>
                Contacto:
            </div>
            <ContactoComponent contacto={ defaultContact }></ContactoComponent>
        </div>
    );
};




export default ListadoContacto;
