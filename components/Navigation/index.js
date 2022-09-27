import React from "react";
import Link from 'next/link'
import NavLink from './NavLink'

function Navigation() {
  return (
    <div className="navigation-wrapper" data-scroll-section>
      <div className="logo-wrapper" data-scroll >
        <Link href="/" data-scroll>
        <img src={'/logo.png'} className="logo" data-scroll/>
        </Link>
      </div>
      <div className="navigation-container" data-scroll>
        <ul className="navigation-list" data-scroll>
          <NavLink href='/' data-scroll>
                  Home
            </NavLink>
            <NavLink href='/chi-sono' data-scroll>
                  Chi sono
            </NavLink>

            <NavLink href="/servizi" data-scroll>
                        Servizi
            </NavLink>
          <NavLink href="/contatti">
              Contatti
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
