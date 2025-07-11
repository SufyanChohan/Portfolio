import React from 'react'
import '../Styles/Footer.css'
import { Link, useNavigate } from 'react-router-dom'
import Github from './Github'
import Linkedinlogo from './Linkedinlogo'
import Whatsapplogo from './Whatsapplogo'


export default function Footer() {

  const navigate = useNavigate()
  return (
    <div>
      <div className='bg-dark text-light pt-5 pb-4'>
        <div className='container d-flex justify-content-between'>
        <div className='w-25'> <h1 onClick={()=>navigate("/")} className='myname'>Sufyan Chohan</h1>
        <p className='text-light'>I'm a passionate web developer dedicated to crafting clean, modern, and user-focused websites. With a strong foundation in HTML, CSS, JavaScript, and popular frameworks, I turn ideas into responsive and engaging digital experiences.</p>
        </div>
        <div><h3 className='font'>Social Links:</h3>
        <div className="socials d-flex mt-4">
        <Github/>
        <Linkedinlogo/>
        <Whatsapplogo/>
        </div>
        </div>
        <div>
          <h4 className="font">Phone:</h4>
        <p className='phone '><a target='_blank' href="tel:923131071174">0313-1071174</a></p>
          <h4 className="font">Email:</h4>
        <p className='email'><a target='_blank' href="mailto:chohansufyan4@gmail.com">chohansufyan4@gmail.com</a></p>
</div>
        </div>
      </div>
    </div>
  )
}
