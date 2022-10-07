import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Burger from "./Burger";
import gsap from "gsap";
import {useLocomotiveScroll} from 'react-locomotive-scroll' 
function Navigation() {
  const [open, setOpen] = useState(false);
  const {scroll,isReady} = useLocomotiveScroll()

    useEffect(()=>{
      const Items =  document.querySelectorAll('.navigation-item')
      Items.forEach(item=>{
        item.addEventListener('click',()=>{
          setOpen(false)
        })
      })
      if(window.innerWidth<=700){
        document.querySelector('.navigation-wrapper').removeAttribute('data-scroll-section')
      }else{

        document.querySelector('.navigation-wrapper').setAttribute('data-scroll-section',true)
      }
    },[])

  useEffect(() => {
    if(!isReady) return
    if (window.innerWidth <= 700) {
  
      const tl = gsap.timeline();
      if (open) {
        tl.to(".burger-wrapper",{
          rotateZ:0
        }).to(".navigation-list", {
          x: 0,
        }).to(".navigation-item > a", {
          y: 0,
          stagger:0.09
        });
      } else {
        tl.to(".navigation-item > a", {
          y: "120%",
          stagger:0.09
        }).to(".navigation-list", {
          x: "-100%",
        }).to(".burger-wrapper",{
          rotateZ:'-40deg'
        });
        
      }
    }else{

    }
  }, [open]);
  return (
    <div className="navigation-wrapper"  >
      <div className="logo-wrapper" onClick={()=>{
        setOpen(false)
      }}>
        <Link href="/">
          <img src={"/logo.png"} className="logo" />
        </Link>
      </div>
      <div className="navigation-container">
        <ul className="navigation-list">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/chi-sono">Chi sono</NavLink>

          <NavLink href="/servizi">Servizi</NavLink>
          <NavLink href="/contatti">Contatti</NavLink>
        </ul>
      </div>
      <Burger
        onClick={() => {
          console.log("clic");
          setOpen(!open);
          console.log(open);
        }}
      />
    </div>
  );
}

export default Navigation;
