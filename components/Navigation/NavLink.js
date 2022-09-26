import React from 'react'
import Link from "next/link";

function NavLink({href,children}) {
  return (
      <div className="navigation-item">
        <Link className="navigation-link" href={href} passHref>
                    <a>
                    {children}
                    </a>
        </Link>
      </div>
  )
}

export default NavLink