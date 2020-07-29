import React from 'react'
import Logo from '../../assets/img/LogoMain.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink'
import Button from './Button'

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="logo da Aluraflix" />
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>

            <Button as = 'a' href="http://youtube.com" target='_blank'>
                Youtube.com
            </Button>
            

        </nav>
    );
}

export default Menu;