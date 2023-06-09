import Formulario from './Formulario.jsx';
import SocialButton from './SocialButton.jsx';

function Registro() {

    return (
      <>
      <SocialButton socialMedia="facebook" link="https://www.facebook.com"></SocialButton>
      <SocialButton socialMedia="github" link="https://github.com/sergiorioseco"></SocialButton>
      <SocialButton socialMedia="linkedin" link="https://www.linkedin.com/in/sergio-rioseco-carrasco-801947224/"></SocialButton>
      <Formulario></Formulario>
      </>
    )
  }

  export default Registro
