import { BarsIcon } from "../icons/BarsIcon"
import { SunIcon } from "../icons/SunIcon"

import './header.scss'

export function Header() {
    return(
      <div className='header'>
        <a href="" className="bars">
          <BarsIcon/>
        </a>
        <button className="sun-icon">
          <SunIcon/>
        </button>
        <nav>
          <a href="">Sobre</a>
          <a href="">Projetos</a>
          <a href="">Contatos</a>
        </nav>
      </div>
    )
}