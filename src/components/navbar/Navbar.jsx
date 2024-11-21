import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

//styles
import {
  NavbarStyled,
  ContainerLinksStyled,
  LogoStyled
} from './navbarstyled'

function Navbar() {
  return (
    <>
      <NavbarStyled>
        <LogoStyled src='/img/logo.png'/>
        <ContainerLinksStyled>
          <Link to='/'>HOME</Link>
          <Link to='/About'>ABOUT</Link>
          <Link to='/Projects'>PROJETS</Link>
          <Link to='/Contact'>CONTACT</Link>
        </ContainerLinksStyled>
      </NavbarStyled>
      <Outlet/>
    </>
  )
}

export default Navbar
