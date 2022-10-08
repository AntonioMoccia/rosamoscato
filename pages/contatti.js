import Head from 'next/head'
import React ,{useEffect}from 'react'
import {AiOutlinePhone,AiOutlineMail,AiOutlinePushpin} from 'react-icons/ai'
import {client} from '../prismic'
import {RichText} from 'prismic-reactjs'

export async function getStaticProps() {
  const data = await client.getByType("contact")

  return {
      props: {
          data:data.results[0].data
      },
  };
}

function Contatti({data}) {

    return (
        <>
              <Head>
      <title>{data.metatitle}</title>
        <meta name="description" content={`${data.metadescription}`} />
      </Head>
        <div className='contatti-wrapper' data-scroll-section>
            <div className='info-wrapper' >
                <div className='telefono'>
                    <AiOutlinePhone />
                    <a href={`tel:${data.phone}`} >
                    {data.phone}
                    </a>
                    </div>
                <div className='address'>
                    <AiOutlinePushpin />
                    <a target={'_blank'} href='https://www.google.it/maps/place/Via+Nazionale,+3,+83036+Passo+di+Mirabella-pianopantano+AV/@41.0549907,15.0116702,17z/data=!3m1!4b1!4m5!3m4!1s0x133a2834118523d9:0xced982fb05cca6f0!8m2!3d41.0549907!4d15.0138642'>
                        {data.address}
                    </a>
                    </div>
                <div className='email'>
                    <AiOutlineMail />
                      <a href={`mailto:${data.email}`}>
                        {data.email}
                      </a>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Contatti
