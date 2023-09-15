import React from 'react';
// import './assets/css/App.css';
import dayPlanner from '../../assets/css/images/dayplanner.png';
import rainyDay from '../../assets/css/images/rainydayparkz.png';
import randomPassword from '../../assets/css/images/randompassword.png';
import horiseonLand from '../../assets/css/images/horiseon.png';
import weather from '../../assets/css/images/weather.png';
import quiz from '../../assets/css/images/quiz.png';
import octocat from '../../assets/css/images/Octocat.png';


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
                        <a href="https://github.com/DamionG22/Horiseon-landing-page-refactor">
                            (GitHub)
                            <img src={octocat}
                            alt="Octocat"
                            ></img>
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
                        <a href="https://github.com/DamionG22/day-planner/">
                            (GitHub)
                            <img src={octocat}
                            alt="Octocat"
                            ></img>
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
                        <a href="https://github.com/AdamJohnson92/Rainy-Day-Flightz/">
                            (GitHub)
                            <img src={octocat}
                            alt="Octocat"
                            ></img>
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
                        <a href="https://github.com/DamionG22/random-password-generator">
                            (GitHub)
                            <img src={octocat}
                            alt="Octocat"
                            ></img>
                        </a>
                    </h2>
                </section>

                <section class="content">
                    <h2>
                        <a href="https://damiong22.github.io/weather-check/">
                            <img src={weather}
                                alt="weather app">
                            </img>
                            Weather App
                        </a>
                        <a href="https://github.com/DamionG22/weather-check/">
                            (GitHub)
                            <img src={octocat}
                            alt="Octocat"
                            ></img>
                        </a>
                    </h2>
                </section>
                <section class="content">
                    <h2>
                        <a href="https://damiong22.github.io/Timed-Coding-Quiz/">
                            <img src={quiz}
                                alt="Timed Coding Quiz">
                            </img>
                           Coding quiz start
                        </a>
                        <a href="https://github.com/DamionG22/Timed-Coding-Quiz/">
                            (GitHub)
                            <img src={octocat}
                            alt="Octocat"
                            ></img>
                        </a>
                    </h2>
                </section>

            </div>


        </article>


    );
}