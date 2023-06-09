import PropTypes from 'prop-types';

function SocialButton({socialMedia, link}) {

    return (
      <>
      <a href={link} target="_blank" rel="noreferrer">
      <i className={`fa-brands fa-${socialMedia}`}></i>
      </a>
      </>
    )
  }

  SocialButton.propTypes = {
    socialMedia: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  };
  export default SocialButton