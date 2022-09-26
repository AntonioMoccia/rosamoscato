import React,{useEffect} from 'react'
import {client} from '../prismic'
import {RichText} from 'prismic-reactjs'
import Slider from '../components/Slider'
export async function getStaticProps() {
  const data = await client.getByType("servizi")

  return {
      props: {
          data:data.results[0].data
      },
  };
}



function Servizi({data}) {

    useEffect(()=>{
        console.log(data);
    },[data])

    return (
        <div className="servizi-wrapper">
            <div className="descrizione-servizi-wrapper" data-scroll-section>
                <RichText render={data.descrizione_servizi} />
            </div>
            <div className="gallery-servizi-wrapper" data-scroll-section>
                <Slider images={data.gallery_servizi} />
            </div>

        </div>
    )
}

export default Servizi
