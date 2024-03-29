import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Burger from "./Burger";
import gsap from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import {useRouter} from 'next/router'
function Navigation() {
  const [open, setOpen] = useState(false);
  const { scroll, isReady } = useLocomotiveScroll();
  const {asPath} = useRouter()
  useEffect(() => {
    const Items = document.querySelectorAll(".navigation-item");
    Items.forEach((item) => {
      item.addEventListener("click", () => {
        setOpen(false);
      });
    });
  }, []);
  useEffect(()=>{ 
      if(typeof window == 'undefined') return

    if(window.innerWidth<=620){
    if(asPath=='/'){
      document.querySelector('.navigation-wrapper').style.background='rgba(255,255,255,0.5)'
    }else{
      document.querySelector('.navigation-wrapper').style.background='rgb(210, 210, 206)'
    }
   }
  },[asPath])
  useEffect(() => {
    if (typeof window !== "undefined") 

    if (window.innerWidth <= 620) {
      document
      .querySelector(".navigation-wrapper")
      .removeAttribute("data-scroll-section");

    } else {
      document
        .querySelector(".navigation-wrapper")
        .setAttribute("data-scroll-section", true);
      setOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 620) {
        document
          .querySelector(".navigation-wrapper")
          .removeAttribute("data-scroll-section");
      } else {
        document
          .querySelector(".navigation-wrapper")
          .setAttribute("data-scroll-section", true);
        setOpen(true);
      }
    });
  },[]);

  useEffect(() => {
    if (!isReady) return;
    if (window.innerWidth <= 700) {
      const tl = gsap.timeline();
      if (open) {
        tl.to(".burger-wrapper", {
          rotateZ: 0,
        })
          .to(".navigation-container", {
            x: 0,
          })
          .to(".navigation-item > a", {
            y: 0,
            stagger: 0.09,
          }).fromTo('.social-wrapper-menu > .social',{
            opacity:0
          },{
            opacity:1
          },"-=0.8")
      } else {
        tl.fromTo('.social-wrapper-menu > .social',{
          opacity:1
        },{
          opacity:0
        }).to(".navigation-item > a", {
          y: "120%",
          stagger: 0.09,
        },"-=0.8")
          .to(".navigation-container", {
            x: "-100%",
          })
          .to(".burger-wrapper", {
            rotateZ: "-40deg",
          });
      }
    } else {
    }
  }, [open]);
  return (
    <div className="navigation-wrapper">
      <div
        className="logo-wrapper"
        onClick={() => {
          setOpen(false);
        }}
      >
        <Link href="/">
          <img src={"/Logobianco.png"} className="logo" />
        </Link>
      </div>
      <div className="navigation-container">
        <ul className="navigation-list">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/chi-sono">Chi sono</NavLink>

          <NavLink href="/servizi">Servizi</NavLink>
          <NavLink href="/contatti">Contatti</NavLink>
        </ul>
        <div className="social-wrapper-menu">
        <div className="social">
        <a  target='_blank' href='https://www.facebook.com/rosamoscatoevents'>
          <FaFacebook />
        </a>
        </div>
        <div className="social">
        <a target='_blank' href='https://www.instagram.com/rosamoscato_events/'>
          <FaInstagram />
          </a>
        </div>
      </div>
      </div>
      <Burger
        onClick={() => {

          setOpen(!open);

        }}
      />

    </div>
  );
}

export default Navigation;
