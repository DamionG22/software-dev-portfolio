import React from 'react';
// import './assets/css/App.css';
import avatar from '../../assets/css/images/avatar.png';

export default function Home() {
  return (
    <>

 <body class="home-body">
    
    <h1 class="h1myname">Damion Gallarza </h1><h2 class="h2header">Web Development Student</h2><h3 class="propic">
      <img src={avatar} alt="Profile avatar image ">
      </img>
    </h3>

    <h3 class="home-filler">I THINK WE ARE GOING TO NEED A BIGGER DIV</h3>



    <footer class="footer">
        <div class="title">
          <h1>Contact Me</h1>
        </div>
        <section class="ref-links">
          <p><a href="mailto:damiongallarza@gmail.com">Email Me</a></p>
        </section>
        <section class="ref-links">
          <p><a href="https://www.linkedin.com/in/damion-gallarza-8706b7147/">LinkedIn</a></p>
        </section>
        <section class="ref-links">
          <p><a href="tel:623-687-4585">Call or Text Me</a></p>
        </section>
        <section class="ref-links">
          <p><a href="https://github.com/DamionG22">Visit My GitHub</a></p>
        </section>
      </footer>


   

  </body>
    </>
  );
}
