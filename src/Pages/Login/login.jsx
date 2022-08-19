import React from 'react'
import "./login.css"
import {Link} from "react-router-dom";


const Login = () => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        <title>Login</title>
                        <link rel="stylesheet" href="login.css"/>
        </head>
        <body>
        <form action="action_page.php" method="post">
            <div className="container">
                <h1 className="header">INICIAR SESIÓN</h1>
                <label htmlFor="uname"><b>Nombre de usuario</b></label>
                <input type="text" placeholder="Ingrese nombre de usuario" name="uname" required/>

                    <label htmlFor="psw"><b>Contraseña</b></label>
                    <input type="password" placeholder="Ingrese contraseña" name="psw" required/>

                        <div className="greenButton">
                            <button type="submit">Iniciar Sesión</button>
                        </div>

                        <div className="footer">
                            <Link to='/'>
                                <button type="button" className="cancelbtn">Cancelar</button>
                            </Link>
                            <Link to='/register'>
                            <button type="button" className="regButton">Registrarse</button>
                            </Link>
                        </div>
            </div>
        </form>
        </body>
        </html>
    )
}

export default Login;