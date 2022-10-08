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
        <div className='contatti-wrapper' data-scroll-section>
            <div className='info-wrapper' >
                <div className='telefono'>
                    <AiOutlinePhone />
                {data.phone}
                    </div>
                <div className='address'>
                    <AiOutlinePushpin />
                        {data.address}
                    </div>
                <div className='email'>
                    <AiOutlineMail />
                        {data.email}
                    </div>
            </div>
        </div>
    )
}

export default Contatti
