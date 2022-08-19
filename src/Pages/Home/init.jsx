import React from 'react'
import './init.css'
import {Link} from "react-router-dom";

const Init = () => {
    return (

        <html>
        <head>
            <title>Inicio</title>
            <link rel="stylesheet" href="inicio.css"/>
        </head>
        <body background="fondoInicio.jpeg">
        <p><a id="inicio" href="index.html">inicio</a> <a href="../aboutUs/sobreNosotros.html">Sobre nosotros</a> <a
            href="">Mas</a></p>
        <br/><br/>
            <br/><br/>
                <br/><br/>
                    <br/><br/>
                        <br/><br/>
            <h1 style="color: white;">BetterMe</h1>
            <h2 style="color: white;">Be strong when you are weak, brave when you are scared and humble when you are
                victorious</h2><br/>
            <div className="botonicio">
                <a href="../login/login.html">
                    <button type="button" className="botenetro">Iniciar
                    </button>
                </a>
            </div>
        </body>
        </html>

)
}

export default Init