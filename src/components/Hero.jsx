
import profileImage from "../../public/images/profile.jpeg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src={profileImage} className="profile-img" width={300} height={300} alt="Hércules personal headshot" />
      <div className="hero-text">
        <h1>Hey, Eu sou Hércules 👋</h1>
        <p>
            Sou desenvolvedor de software. Eu me especializei em construir (e ocasionalmente projetar)
            sites, aplicativos e tudo mais excepcionais.
        </p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/herculescawarinny/"
            aria-label="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://github.com/cawarinny"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/herculescawarinny/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;