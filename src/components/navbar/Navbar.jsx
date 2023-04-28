import React from 'react';
import { Link } from 'react-router-dom';
import Container from "../../utils/Components"
import c from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <div className={c.navbar}>
       <Container>
           <div className={c.navbar__menu}>
              <ul className={c.navbar__register__list}>
                
              </ul>
              <Link className={c.navbar__link}>
              
              </Link>
           </div>       
       </Container>
    </div>
  )
}

export default Navbar
// routs ga sovol ertaga boshlaganinda!!!!!!!!!