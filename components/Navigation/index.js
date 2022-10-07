import React,{useEffect, useState} from "react";
import Link from 'next/link'
import NavLink from './NavLink'
import Burger from "./Burger";
import gsap from 'gsap'

function Navigation() {

const [open,setOpen] = useState(false)

useEffect(()=>{
  window.addEventListener('resize',()=>{
  setOpen(false)
  })
})

useEffect(()=>{
  const tl = gsap.timeline()
  if(open){
    tl.to('.navigation-list',{
      x:0
    }).to('.navigation-item > a',{
      y:0
    })
  }else{
  tl.to('.navigation-item > a',{
    y:'120%'
  }).to('.navigation-list',{
    x:'-100%'
  })
  }
},[open])
  return (
    <div className="navigation-wrapper" >
      <div className="logo-wrapper"  >
        <Link href="/" >
        <img src={'/logo.png'} className="logo" />
        </Link>
      </div>
      <div className="navigation-container">
        <ul className="navigation-list">
          <NavLink href='/' >
                  Home
            </NavLink>
            <NavLink href='/chi-sono' >
                  Chi sono
            </NavLink>

            <NavLink href="/servizi" >
                        Servizi
            </NavLink>
          <NavLink href="/contatti">
              Contatti
          </NavLink>
        </ul>
      </div>
      <Burger onClick={()=>{
        console.log('clic');
        setOpen(!open)
        console.log(open);
      }} />
    </div>
  );
}

export default Navigation;
