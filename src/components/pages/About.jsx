import React from 'react'

const About = () => {
  return (
    <>
      <div id='about-page-container'>
        <div id='about-page-content'>

          <div id='about-me-card'>
              <img src='/pic-of-me.jpg' alt='picture of myself'/>
              <h2> Caitlin Anderson </h2>
              <h3> Digital Design Student | 20yrs </h3>
              <p> Here is a little paragraph about myself as a designer/person in general. </p>
          </div>

          <div id='about-project-card'>
            <img src='/news-project-mockup.png'/>
            <h2> News API Website </h2>
            <h3> Formative 3.1 </h3>
            <p> Description about this project, brief, tools, etc </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default About
