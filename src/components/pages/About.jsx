import React from 'react'

const About = () => {
  return (
    <>
      <div id='about-page-container'>
        <div id='about-page-content'>

          <div id='about-me-card'>
              <img src='/pic-of-me.jpeg' alt='picture of myself' id='pic-of-me'/>
              <h2> Caitlin Anderson </h2>
              <h3> Digital Design Student | 20yrs </h3>
              <p> In terms of design and development, I am very much a minimal and organised designer. I love to
                design websites and applications that will help make the users lives easier when exploring online.
                This also reflects myself as a person, I am very much organised and love to create and build things like Lego Sets 
                and I enjoy spending time reading a good book, exploring places with friends and family, and spending time with animals.</p>
          </div>

          <div id='about-project-card'>
            <img src='/news-project-mockup.png'/>
            <h2> News API Website </h2>
            <h3> Formative 3.1 </h3>
            <p> In this project, I was given the task of creating
              a news application using Vite + React, that grabbed the news article data from NewsAPI. 
              Within this project I used a few tools to allow me to design and create this web application such
              as, Figma, VSCode, and NewsAPI. </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default About
