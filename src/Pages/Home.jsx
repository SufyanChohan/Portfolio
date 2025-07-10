import React from 'react'
import '../Styles/Home.css'
import img from '../assets/sufyan.png'
import githud from '../assets/github.png'
import Github from '../Components/Github'
import Linkedinlogo from '../Components/Linkedinlogo'
import Whatsapplogo from '../Components/Whatsapplogo'

export default function Home() {
  return (
    <div>
      <div>
        <div className='bg-dark'>
      <div className="main container">
        
        <div className='first'><h1 className='firsthead'>Hey, It,s <span className="clrblue">Sufyan</span></h1>
        <p className='firstp'>I am <span className="clrblue">Front-End Developer</span> </p>
        <div className='d-flex'>
        <Github/>
        <Linkedinlogo/>
        <Whatsapplogo/>
        </div>
    <div className='pt-3'>
      <a href="tel:923131071174" target='-blank'>  <button className='hirebtn'> Hire me</button></a>
      </div>
        </div>
        <div><img src={img} alt="" /></div>
        </div>
        </div>
      </div>
    </div>
  )
}
