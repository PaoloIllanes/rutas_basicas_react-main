import React from 'react'
import './init.css'
import {Link} from "react-router-dom";

const Init = () => {
    return (

       <>
        <head>
            <title>Inicio</title>
            <link rel="stylesheet" href="init.css"/>
        </head>
        <body background="fondoInicio.jpeg">
        <p><Link id="inicio" to="/">inicio</Link> <Link to="../aboutUs/sobreNosotros.html">Sobre nosotros</Link></p>
            <h1 style="color: white;">BetterMe</h1>
            <h2 style="color: white;">Be strong when you are weak, brave when you are scared and humble when you are
                victorious</h2><br/>
            <div className="botonicio">
                <Link to="../login/login.html">
                    <button type="button" className="botenetro">Iniciar
                    </button>
                </Link>
            </div>
        </body>
        </>

)
}

export default Init