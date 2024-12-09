import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
//styles
import {
  NavbarStyled,
  ContainerLinksStyled,
  LogoStyled
} from './navbarstyled'


function Navbar() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <>
      <NavbarStyled>
        <LogoStyled src='/img/logo.png'/>
        <ContainerLinksStyled>
          <Link to='/'  className={currentPath === '/' ? 'active' : ''}>HOME</Link>
          <Link to='/About'  className={currentPath === '/About' ? 'active' : ''}>ABOUT</Link>
          <Link to='/Projects'  className={currentPath === '/Projects' ? 'active' : ''}>PROJETS</Link>
          <Link to='/Contact'  className={currentPath === '/Contact' ? 'active' : ''}>CONTACT</Link>
        </ContainerLinksStyled>
      </NavbarStyled>
      <Outlet/>
    </>
  )
}

export default Navbar
