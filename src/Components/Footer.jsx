import React from 'react'
import '../Styles/Footer.css'
import { useNavigate } from 'react-router-dom'
import Github from './Github'
import Linkedinlogo from './Linkedinlogo'
import Whatsapplogo from './Whatsapplogo'


export default function Footer() {

  const navigate = useNavigate()
  return (
    <div>
      <div className='bg-dark text-light pt-5'>
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
          <h4 className="font">Contact:</h4>
        <p>0313-1071174</p>
          <h4 className="font">Email:</h4>
        <p>chohansufyan4@gmail.com</p>
</div>
        </div>
      </div>
    </div>
  )
}
