import React,{useEffect} from "react";
import {client} from '../prismic'
import {RichText} from 'prismic-reactjs'

export async function getStaticProps() {
  const data = await client.getByType("about")

  return {
      props: {
          data:data.results[0].data
      },
  };
}


function ChiSono({data}) {
  
  return (
    <div className="about-wrapper" data-scroll-section>
      <div className="about-wrapper-image" data-scroll>
        <img src={data.image.url} />
      </div>
      <div className="about-wrapper-description" data-scroll>
        <RichText render={data.testo} />
      </div>
    </div>
  );
}

export default ChiSono;
