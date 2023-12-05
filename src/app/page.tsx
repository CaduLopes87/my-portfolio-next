import Image from 'next/image'
import { Header } from './components/header/header'

export default function Home() {
  return (
    <main>
      <Header/>
      <section className='top-page'>
        <div>
          <h1>Prazer, <span>Eduardo Lopes</span></h1>
        </div>
        <div>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
            />
        </div>
        <div className='self-info-box'>
          <h3>Desenvolvedor Web</h3>
          <div className='contact-btns'>
            <div className="social-medias">
              <span>Linkedin</span>
              <span>Git</span>
              <span>Insta</span>
            </div>
            <div className="email-btn">
              <button>Entre em Contato</button>
            </div>
            <div className="cv-btn">
              <button>Baixe o CV</button>
            </div>
          </div>
        </div>
        <div className='about'>
          <h2>SOBRE</h2>
            <p> Sou um desenvolvedor Web com experiência
              em React.js, JavaScript, HTML, CSS, SASS, 
              NodeJS, Express e consumo de APIs.
                Iniciei minha carreira como desenvolvedor em 
              junho de 2023, atuando principalmente como
              freelancer.
            </p>
        </div>
        <div className='tecnologies'>
          <h2>TECNOLOGIAS</h2>
          <div className='tec-container'></div>
        </div>
      </section>
      <section className='mid-page'>
        <h2>PROJETOS</h2>
        <div className="professional-projects-container">
          <h4>Profissionais</h4>
        </div>
        <div className="personal-projects-container">
          <h4>Pessoais</h4>
        </div>
      </section>
    </main>
  )
}
