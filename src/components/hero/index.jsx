import { Container } from 'react-bootstrap';
import hero from '../../images/hero.jpg';
import { HeroBtn } from '../../style/buttons';
import { useModel } from '../../hooks/index';
import { SignUpModel, LoginModel } from '../index';

function Hero() {
  const {
    showLoginModel,
    showSignUpModel,
    handleLoginModel,
    handleCloseLoginModel,
    handleSignUpModel,
    handleCloseSignUpModel,
  } = useModel();
  return (
    <Container className="hero my-4">
      <div className="hero-lead">
        <div className="hero-text">
          <div className="hero-text-container">
            <h1>Want to host your own place?</h1>
            <p>Earn passive income by renting properties!</p>
            <div className="hero-text-button">
              <HeroBtn onClick={handleSignUpModel}>Become a host</HeroBtn>
              <LoginModel
                show={showLoginModel}
                onClose={handleCloseLoginModel}
                onSignUpClick={handleSignUpModel}
              />
              <SignUpModel
                show={showSignUpModel}
                onClose={handleCloseSignUpModel}
                onSignUpClick={handleLoginModel}
              />
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src={hero} alt="House located in the north" />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
