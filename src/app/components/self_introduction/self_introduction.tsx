import Image from 'next/image'
import "./self_introduction.scss"
import { LinkedinIcon } from '../icons/LinkedinIcon'
import { GitIcon } from '../icons/GitIcon'

export function SelfIntroduction () {
    return (
        <div className='introduction-container'>
            <div>
                <h1>
                    <span>Prazer,</span>
                    <span>Eduardo Lopes</span>
                </h1>
                <h3>Desenvolvedor Web</h3>
            </div>
            <div>
                <Image
                    src="/perfil_pic.jpg"
                    alt="Eduardo perfil picture"
                    width={250}
                    height={250}
                    priority
                    />
            </div>
            <div className='contact-btns'>
                <nav className="social-medias">
                    <a href="https://www.linkedin.com/in/carlos-eduardo-lopes-bezerra/" target='_blank'>
                        <LinkedinIcon/>
                    </a>
                    <a href="https://github.com/CaduLopes87" target='_blank'>
                        <GitIcon/>
                    </a>
                </nav>
                <div >
                    <button className="btn email-btn">Entre em Contato</button>
                </div>
                <div >
                    <button className="btn cv-btn">Baixe o CV</button>
                </div>
            </div>
        </div>
    )
}