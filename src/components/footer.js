import React from 'react'

export default function Footer() {
  return (
    <div className='media-contact'>
        <div className='media-img'>
          <img src={require('../assests/media.png')} id="media-img" alt="media"/>
          <div className='media-text'>
              <h3>Media</h3>
              <p><a href="https://drive.google.com/drive/folders/1a6s5iZdMBySIpOKtSciioqbewA711hnA?usp=sharing" target="_blank">Download</a> our logos and brand photography for media use.</p>
          </div>
        </div>
        <div className='contact-img'>
          <img src={require('../assests/contact.png')} id="contact-img" alt="contact"/>
          <div className='contact-text'>
            <h3>Contact</h3>
            <p>For additional information contact us on<br/></p>
            <p><a href="mailto:info@enterpriseleague.com?subject=Press Enquiry">info@enterpriseleague.com</a></p>
          </div>
        </div>
    </div>
  )
}
