import React from "react";
import '../styles/Testimonio.css';




export default function Testimonio(props){
    return (
      <div className="contenedor-testimonio">
        <img
        className="imagen-testimonio"
        src={require(`../img/testimonio${props.img}.jpg`)}
        alt='imagen testimonio 1' />
        <div className="contenedor-texto-testimonio">
          <p className="nombre">
            <strong>{props.nombre}</strong> de {props.pais}</p>
          <p className="cargo">
            {props.cargo} en <strong>{props.empresa}</strong></p>
          <p className="texto">
            {props.testimonio}</p>
        </div>
      </div>
    );
}