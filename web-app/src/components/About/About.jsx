import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from'../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>About UNIVERSITY</h3>
            <h2>Nuturing Tommorow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge,skills, and experiences needed to excel in the dynamic field of education </p>
            <p>With a focus on innovaton, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to acheieve your goals and unlocking the full potential in shaping the future of education</p>
        </div>
      
    </div>
  )
}

export default About
