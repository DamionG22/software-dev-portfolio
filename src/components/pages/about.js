import React from 'react';
// import './assets/css/App.css';

export default function About() {
  return (
    <body>
      <article id="about-me" class="article-1" >
      <h1 class="h1myname">Damion Gallarza </h1><h2 class="h2NonHome">Web Development Student</h2>
        <div class="title">
          <h1>About Me</h1>
        </div>
        <div class="about-content">
          <p>Aspiring Software Developer, who enjoys learning new things and challenging myself in unfamiliar territory. 
        </p>
        </div>
      </article>

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


  );
}