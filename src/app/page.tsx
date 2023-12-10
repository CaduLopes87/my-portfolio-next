import { Header } from './components/header/header'
import { SelfIntroduction } from './components/self_introduction/self_introduction'
import { About } from './components/about/about'
import { Tecnologies } from './components/tecnologies/tecnologies'


export default function Home() {
  return (
    <main>
      <Header/>
      <section className='top-page'>
        <SelfIntroduction/>
        <About/>
        <Tecnologies/>
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
