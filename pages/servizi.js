import Head from 'next/head'
import React, { useEffect } from "react";
import { client } from "../prismic";
import { RichText } from "prismic-reactjs";
import Slider from "../components/Slider";
export async function getStaticProps() {
  const data = await client.getByType("servizi");

  return {
    props: {
      data: data.results[0].data,
    },
  };
}

function Servizi({ data }) {

/* useEffect(()=>{
  if(typeof window == 'undefined') return
  
  let options = {
    root: document.querySelector('.descrizione-servizi-wrapper'),
    rootMargin: '0px',
    threshold: 1.0
  }
  const callback = (entries, observer)=>{
    console.log(entries);
  }
  let observer = new IntersectionObserver(callback, options);

  observer.observe(document.querySelector('img'))

}) */

  return (
    <>
      <Head>
        <title>{data.metatitle}</title>
        <meta name="description" content={`${data.metadescription}`} />
      </Head>
      <div className="servizi-wrapper">
        <div className="descrizione-servizi-wrapper" data-scroll-section>
          <RichText render={data.descrizione_servizi} />
        </div>
       {/*  <div className="gallery-servizi-wrapper" data-scroll-section>
          <Slider images={data.gallery_servizi} />
        </div> */}
      </div>
    </>
  );
}

export default Servizi;
