import Image from 'next/image'
import './tecnologies.scss'

export function Tecnologies() {
    return (
        <div className='tecnologies'>
            <div className="title-line">
            <h2 className='title'>TECNOLOGIAS</h2>
            <div className="line"></div>
            </div>
            <div className='tec-container'>
                <div className="react-tec box-tec">
                    <Image
                        src="/React-icon.png"
                        alt="Eduardo perfil picture"
                        width={76}
                        height={76}
                        priority
                        />
                        <span>REACT</span>
                </div>
                <div className="react-tec box-tec">
                    <Image
                        src="/next-icon.png"
                        alt="Eduardo perfil picture"
                        width={76}
                        height={76}
                        priority
                        />
                        <span>NEXT</span>
                </div>
                <div className="javascript-tec box-tec">
                    <Image
                        src="/Javascript-icon.png"
                        alt="Eduardo perfil picture"
                        width={76}
                        height={76}
                        priority
                        />
                    <span>JAVASCRIPT</span>
                </div>
                <div className="html-tec box-tec">
                    <Image
                        src="/html-icon.png"
                        alt="Eduardo perfil picture"
                        width={76}
                        height={76}
                        priority
                        />
                    <span>HTML</span>
                </div>
                <div className="css-tec box-tec">
                    <Image
                        src="/css-icon.png"
                        alt="Eduardo perfil picture"
                        width={76}
                        height={76}
                        priority
                        />
                    <span>CSS</span>
                </div>
                <div className="sass-tec box-tec">
                    <Image
                        src="/sass-icon.png"
                        alt="Eduardo perfil picture"
                        width={76}
                        height={76}
                        priority
                        />
                    <span>SASS</span>
                </div>
                <div className="node-tec box-tec">
                    <Image
                        src="/node-icon.png"
                        alt="Eduardo perfil picture"
                        width={76}
                        height={76}
                        priority
                        />
                    <span>NODEJS</span>
                </div>
                <div className="express-tec box-tec">
                    <Image
                        src="/express-icon.png"
                        alt="Eduardo perfil picture"
                        width={76}
                        height={76}
                        priority
                        />
                    <span>EXPRESS</span>
                </div>
                <div className="postgresql-tec box-tec">
                    <Image
                        src="/postgresql-icon.png"
                        alt="Eduardo perfil picture"
                        width={76}
                        height={76}
                        priority
                        />
                    <span>POSTGRESQL</span>
                </div>
                <div className="api-tec box-tec">
                    <Image
                        src="/api-icon.png"
                        alt="Eduardo perfil picture"
                        width={76}
                        height={76}
                        priority
                        />
                    <span>API</span>
                </div>
            </div>
        </div>
    )
}