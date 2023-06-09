import { useState } from 'react';
import Alert from './Alert.jsx';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmacion, setConfirmacion] = useState('');

    const [error, setError] = useState(0);

    const validarDatos = (e) => {
        e.preventDefault();
        //Validación;
        if (nombre === '' || email === '' || contrasena === '' || confirmacion === '')
        {
        setError(1);
        }
        else if (contrasena !== confirmacion) {
        setError(2);
        }
        else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setError(3);
        }
        else{
        setError(4);
        setNombre('');
        setEmail('');
        setContrasena('');
        setConfirmacion('')
        }
        };
    return (
    <>
        <form className="formulario" onSubmit={validarDatos}>
        {error === 4 ? <Alert color='bg-success' text='Registro Exitoso'></Alert> : null}
        {error === 1 ? <Alert color='bg-danger' text='Debe rellenar todos los campos'></Alert> : null}
        {error === 2 ? <Alert color='bg-danger' text='Las contraseñas no coinciden'></Alert> : null}
        {error === 3 ? <Alert color='bg-danger' text='Debe ingresar un mail válido'></Alert> : null}
        <div className="form-group">
        <label>Nombre</label>
        <input
        type="text"
        name="nombre"
        className="form-control"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
        />
        </div>
        <div className="form-group">
        <label>email</label>
        <input
        type="email"
        name="email"
        className="form-control"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
        </div>
        <div className="form-group">
        <label>Contraseña</label>
        <input
        type="text"
        name="contrasena"
        className="form-control"
        onChange={(e) => setContrasena(e.target.value)}
        value={contrasena}
        />
        </div>
        <div className="form-group">
        <label>Confirmar contraseña</label>
        <input
        type="text"
        name="confirmacion"
        className="form-control"
        onChange={(e) => setConfirmacion(e.target.value)}
        value={confirmacion}
        />
        </div>
        <button type="submit" className="btn btn-primary">
        Enviar
        </button>
        </form>
        <h1>Datos ingresados</h1>
        {nombre} - {email} - {contrasena} - {confirmacion}

    </>
    );
};
    export default Formulario;