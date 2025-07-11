import React from 'react'
import '../Styles/Home.css'
import img from '../assets/sufyan.png'
import Github from '../Components/Github'
import Linkedinlogo from '../Components/Linkedinlogo'
import Whatsapplogo from '../Components/Whatsapplogo'
import htmllogo from '../assets/html.png'
import csslogo from '../assets/css.png'
import jslogo from '../assets/javascript.png'
import reactlogo from '../assets/react.png'
import nextlogo from '../assets/next.png'
import bootlogo from '../assets/bootstrap.png'
import wordlogo from '../assets/wordpress.png'
import shoplogo from '../assets/shopify.png'

export default function Home() {
  return (
    <div>
      <div>
        <div className='bg-dark'>
      <div className="main container ">
        
        <div className='first col-12 col-md-6 mb-4 mb-md-0'><h1 className='firsthead'>Hey, It,s <span className="clrblue">Sufyan</span></h1>
        <p className='firstp'>I am <span className="clrblue">Front-End Developer</span> </p>
        <div className='d-flex'>
        <Github/>
        <Linkedinlogo/>
        <Whatsapplogo/>
        </div>
    <div className='pt-3'>
      <a href="tel:923131071174" target='-blank'><button className='hirebtn'> Hire me</button></a>
      </div>
        </div>
        <div className=' col-12 col-md-6 text-center'><img src={img} alt="" />
        </div>
       

        </div>
      
        </div>
      </div>
      {/* hero section end */}
      {/* experiences section start */}
      <div className='bg-dark text-light ' id='expsec'>
      <div className="container bd">
        <div>
        <h2 className="font text-center pt-5 heading">Experience</h2>
        </div>
        <div className='d-flex '>
          <p className='font pt-5'>Nov-2023-Feb-2024</p>
        </div>
  
          <div>
        <h3 className="clrblue">Mystic Advertising</h3>
        <p className='font'>Intern Web-Developer</p>
        <p className='font'>As a Web Developer Intern at Mystic Advertising, I worked on WordPress and Shopify projects, gaining hands-on experience in customizing themes and building e-commerce websites. This internship helped me improve my practical skills and understand real-world web development workflows.</p>
      </div>
        </div>
        {/* first expwrience end */}
        {/* second experience start */}
    <div className="container bd">
        <div className='d-flex '>
          <p className='font pt-5'>March-2023-Present</p>
        </div>
  
          <div>
        <h3 className="clrblue">Mystic Advertising</h3>
        <p className='font'>Junior Web-Developer</p>
        <p className='font'>As a Junior Web Developer at Mystic Advertising, I contributed to WordPress and Shopify projects, working on theme customization and e-commerce site development. This role further strengthened my practical skills and deepened my understanding of real-world web development.</p>
      </div>
        </div>
        </div>
        {/* second experience end */}
  
      {/* skills section Start */}
      <div className='bg-dark text-light pt-5' id='skillsec' >
        <div className='container text-center'>
          <h2 className='heading'>Skills</h2>
        <div className=''>
          <div className='d-flex justify-content-center'>
          <div className='skillbox'><img width={"80px"} src={htmllogo} alt="" /><p>HTML</p></div>
          <div className='skillbox'><img width={"80px"} src={csslogo} alt="" /><p>CSS</p></div>
          <div className='skillbox'><img width={"80px"} src={jslogo} alt="" /><p>JavaScript</p></div>
          <div className='skillbox'><img width={"80px"} src={reactlogo} alt="" /><p>React JS</p></div>
          </div>
          <div className="d-flex justify-content-center">
          <div className='skillbox'><img width={"80px"} src={nextlogo} alt="" /><p>Next JS</p></div>
          <div className='skillbox'><img width={"90px"} src={bootlogo} alt="" /><p>Bootstrap</p></div>
          <div className='skillbox'><img width={"80px"} src={wordlogo} alt="" /><p>Wordpress</p></div>
          <div className='skillbox'><img width={"80px"} src={shoplogo} alt=""/><p>Shopify</p></div>
          </div>
        </div>
        </div>
      </div>
      {/* Skills section end? */}

      
  </div>  
 )
}





