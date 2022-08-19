import React from 'react'
import './register.css'
import {Link} from "react-router-dom";

const Register = () => {
    return (

        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        <title>Sign up</title>
                        <link rel="stylesheet" href="register.css"/>
        </head>
        <body>
        <form action="action_page.php" method="post">
            <div className="container">
                <h1 className="header">REGISTRARSE</h1>
                <label htmlFor="name"><b>Nombre</b></label>
                <input type="text" placeholder="Ingrese su nombre" name="uname" required/>

                    <label htmlFor="lname"><b>Apellido</b></label>
                    <input type="text" placeholder="Ingrese su apellido" name="uname" required/>

                        <label htmlFor="uname"><b>Nombre de usuario</b></label>
                        <input type="text" placeholder="Ingrese su nombre de usuario" name="uname" required/>

                            <label htmlFor="psw"><b>Contraseña</b></label>
                            <input type="password" placeholder="Ingrese su contraseña" name="psw" required/>

                                <label htmlFor="psw"><b>Confirmar contraseña</b></label>
                                <input type="password" placeholder="Ingrese su contraseña nuevamente" name="psw"
                                       required/>

                                    <div className="greenButton">
                                        <button type="submit">Registrarse</button>
                                    </div>

                                    <div className="footer">
                                        <Link to='/login'>
                                            <button type="button" className="cancelbtn">Cancelar</button>
                                        </Link>
                                    </div>
            </div>
        </form>
        </body>
        </html>

    )}
 export default Register;