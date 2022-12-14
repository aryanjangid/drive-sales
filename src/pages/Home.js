import React, { useState } from 'react'
import LandingImage from '../images/landing-image.png'
import Card from '../components/Card.js'
import Testimonialcard from '../components/TestimonialCard.js'
import './home.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { howItWorks, achievements, testimonials, questions, salesStory, partners, findJobs, jobs, matchmakingContent, matchmakingImages } from '../data/data'

const Home = () => {


    const [currentJobCategory, setCurrentJobCategory] = useState(findJobs['Business Development'])
    const [currentJobCategoryButton, setCurrentJobCategoryButton] = useState(0)
    const [currentMatchCategory, setCurrentMatchCategory] = useState(matchmakingImages['Post Your Sales Role Requirement'])
    const [currentMatchCategoryButton, setCurrentMatchCategoryButton] = useState(0)

    const [viewQuestion, setViewQuestion] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <div className='home'>
            <div className='landing'>
                <div className='landingContent'>
                    <h1>Hire Top & Verified <br /> <span>Sales Talent</span> in 72 Hours
                    </h1>
                    <h3>India s First AI Based Matchmaking
                        Talent Platform
                    </h3>
                    <div className='landingLine'></div>
                    <p>The DriveSales?????? scans and verifies thousands of applicants via<br />
                        our stringent onboarding process and match you with right<br />
                        sales talents who fits well with your culture and job responsibilities.
                    </p>
                    <div className='button'>GET STARTED</div>
                </div>
                <div className='landingImage'>
                    <img src={LandingImage} alt="landing"></img>
                </div>
            </div>

            <div className='trustedPartners'>
                <h1>Most Trusted Partners</h1>
                <div className='partners'>
                    {partners.map((partner, i) => (
                        <img src={partner} alt="trusted  partners"></img>
                    ))}
                </div>
            </div>

            <div className='howItWorks'>
                <h1>How The DriveSales?????? Helps You Find the Right Sales Talent?</h1>
                <div className='howItWorksCardsDiv'>
                    {howItWorks.map((m, i) => (
                        <Card m={m} key={i} />
                    ))}
                </div>
                <div className='button'>GET STARTED</div>
            </div>

            <div className='???matchmaking'>
                <h1>The DriveSales?????? Matchmaking Magic</h1>
                <div className='???matchmakingDiv'>
                    <div style={{ display: "flex" }}>
                        <div className='sideLine'>
                        </div>
                        <div className='matchmakingContent'>
                            {matchmakingContent.map((m, i) => (
                                <div key={i} style={{ backgroundColor: `${currentMatchCategoryButton === i ? '#B7C4CF' : 'white'}`, padding: '0 2%' }} className='MatchCategoryButton' onClick={() => (setCurrentMatchCategoryButton(i), setCurrentMatchCategory(matchmakingImages[m]))}><p>{m}</p></div>
                            ))}
                        </div>
                    </div>
                    <div className='matchmakingImage'>
                        <img src={currentMatchCategory} alt="trusted  partners"></img>
                    </div>
                </div>
            </div>

            <div className='achievements'>
                <h1>Recent Achievements</h1>
                <div className='achievementsDiv'>
                    {achievements.map((m, i) => (
                        <div key={i}>
                            <h1>{m.value}</h1>
                            <h3>{m.category}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className='findJobs'>
                <h1>Find Sales Jobs That's Fits Your Skillset!</h1>
                <div className='findJobsDiv'>
                    <div className='findJobsFirstContent'>
                        <div className='sideLine'>
                        </div>
                        <div className='findJobsContents'>
                            {jobs.map((job, i) => (
                                <div key={i} style={{ backgroundColor: `${currentJobCategoryButton === i ? '#B7C4CF' : 'white'}`, padding: '0.7rem 2%' }} className='jobCategoryButton' onClick={() => (setCurrentJobCategoryButton(i), setCurrentJobCategory(findJobs[job]))}><p>{job}</p></div>
                            ))}
                        </div>
                    </div>

                    <div className='allJobs'>
                        <p>{currentJobCategory}</p>
                    </div>
                </div>
            </div>

            <div className='testimonial'>
                <h1>What Clients Say About Us</h1>
                <div className='testimonialContent'>
                <Slider {...settings}>
                    {testimonials.map((m, i) => (
                            <div>
                                <Testimonialcard m={m} key={i} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className='questions'>
                <h1>Frequently Asked Questions</h1>
                <div className='questionsContent'>
                    {questions.map((question, i) => (
                        <div className='question'>
                            <div className='questionsHeading'>
                                <p key={i}>{question}</p>
                                <div className='addButton' onClick={() => (setViewQuestion(!viewQuestion), setCurrentQuestion(i))} style={{marginLeft:'1rem'}}><h1>{currentQuestion === i ? '-' : '+'}</h1></div>
                            </div>
                            <div style={{ display: `${currentQuestion === i ? 'block' : 'none'}` }}><h4>Content</h4></div>
                        </div   >
                    ))}
                </div>
            </div>

            <div className='salesStory'>
                <h1>
                    Read Our Sales Stories
                </h1>
                <div className='salesStoryLogo'>
                    {salesStory.map((story, i) => (
                        <img src={story} alt="logo"></img>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
