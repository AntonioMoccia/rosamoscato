import React,{useState,useEffect} from 'react'
import {WhatsAppWidget} from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'


import { client } from '../../prismic'

const Whatsapp = ()=>{



        return(
        <div className='whatsapp'>
        <WhatsAppWidget  replyTimeText={new Date().toLocaleDateString()} phoneNumber = {`+39 3890926133`} placeholder='Inserisci il messaggio' companyName='Rosa Moscato Events' message='Ciao! 👋🏼  Come posso aiutarti?' sendButton='Invia'/>
        </div>
    )
}

export default Whatsapp