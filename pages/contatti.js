import React from 'react'
import {AiOutlinePhone,AiOutlineMail,AiOutlinePushpin} from 'react-icons/ai'
function Contatti() {
    return (
        <div className='contatti-wrapper' data-scroll-section>
            <div className='info-wrapper' >
                <div className='telefono'>
                    <AiOutlinePhone />
                    3314487994
                    </div>
                <div className='address'>
                    <AiOutlinePushpin />
                    Via Luca Signorelli,2 Grottaminarda, AV</div>
                <div className='email'>
                    <AiOutlineMail />
                    moccia.ant@gmail.com</div>
            </div>
        </div>
    )
}

export default Contatti
