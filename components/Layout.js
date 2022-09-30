import React, { useRef, useEffect, useState } from "react";
import Navigation from "./Navigation";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRouter } from "next/router";

function Layout({ children }) {
  const containerRef = useRef(null);
  const { asPath } = useRouter();
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.07,
          multiplier: 1,
          reloadOnContextChange: true,
          tablet: { smooth: false, lerp: 1 , multiplier: 5,},
          smartphone: { smooth: true, lerp: 0.07, multiplier: 15, },
        }}
        watch={["router.asPath"]}
        location={asPath}
        containerRef={containerRef}
        onLocationChange={(scroll) => {
          scroll.scrollTo(0, { duration: 0, disableLerp: true });
          //          document.querySelectorAll(".c-scrollbar")[0].style.display = "none";
          //        scroll.start();
          //        router.reload(window.location.pathname)
        }} // If you want to reset the scroll position to 0 for example
        onUpdate={(scroll) => {
          const el = document.querySelectorAll(".c-scrollbar");
          if (el.length > 0) {
            el[0].style.display = "none";
          }
        }}
      >
        <main ref={containerRef} className="container" data-scroll-container>
          <Navigation />
          {children}
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default Layout;
