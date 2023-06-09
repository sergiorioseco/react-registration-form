import Formulario from './Formulario.jsx';
import SocialButton from './SocialButton.jsx';

function Registro() {

    return (
      <>
      <div className='mainSection p-5'>
      <h1>Crea una cuenta</h1>
      <div className='socialButtons fs-1'>
      <SocialButton socialMedia="facebook" link="#"></SocialButton>
      <SocialButton socialMedia="github" link="#"></SocialButton>
      <SocialButton socialMedia="linkedin" link="#"></SocialButton>
      </div>
      <p><b>O usa tu email para registrarte</b></p>
      <Formulario></Formulario>
      </div>
      </>
    )
  }

  export default Registro
