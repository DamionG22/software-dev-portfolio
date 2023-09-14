import React from 'react';
// import './assets/css/App.css';
import dayPlanner from '../../assets/css/images/dayplanner.png';
import rainyDay from '../../assets/css/images/rainydayparkz.png';
import randomPassword from '../../assets/css/images/randompassword.png';
import horiseonLand from '../../assets/css/images/horiseon.png'

export default function Work() {
    return (
        <article id="work-history" class="article-1 work">
            <div class="title">
                <h1>Work History</h1>
            </div>
            <div class="content">
            <section class="content">
    <h2>
        <a href="https://damiong22.github.io/Horiseon-landing-page-refactor/">
            <img src={horiseonLand}
            alt="Screenshot of Horiseon landing page">
            </img>
            Horiseon Landing Page
        </a>
    </h2>
</section>


<section class="content">
    <h2>
        <a href="https://damiong22.github.io/day-planner/">
            <img src={dayPlanner}
            alt="Agenda style day planner">
            </img>
            Interactive Day Planner
        </a>
    </h2>
</section>


<section class="content">
    <h2>
        <a href="https://github.com/AdamJohnson92/Rainy-Day-Flightz">
            <img src={rainyDay}
            alt="mountain view with trees">
            </img>
            Rainy Day Parkz
        </a>
    </h2>
</section>


<section class="content">
    <h2>
        <a href="https://damiong22.github.io/random-password-generator/">
            <img src={randomPassword}
            alt="Empty text box">
                </img>
            Random Password Generator
        </a>
    </h2>
</section>

            </div>


        </article>


    );
}