import React from 'react'
import LandingImage from '../images/landing-image.png'
import Card from '../components/Card.js'
import Testimonialcard from '../components/TestimonialCard.js'
import './home.css'
import { howItWorks, achievements, testimonials, questions, salesStory, partners } from '../data/data'

const Home = () => {
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
                    <p>The DriveSales™️ scans and verifies thousands of applicants via<br />
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
                    {partners.map((partner,i)=>(
                        <img src={partner} alt="trusted  partners"></img>
                    ))}
                </div>
            </div>

            <div className='howItWorks'>
                <h1>How The DriveSales™️ Helps You Find the Right Sales Talent?</h1>
                <div className='howItWorksCardsDiv'>
                    {howItWorks.map((m, i) => (
                        <Card m={m} key={i} />
                    ))}
                </div>
                <div className='button'>GET STARTED</div>
            </div>

            <div className='️matchmaking'>
                <h1>The DriveSales™️ Matchmaking Magic</h1>
                <div className='️matchmakingDiv'>
                    <div style={{ display: "flex" }}>
                        <div className='sideLine'>
                        </div>
                        <div className='matchmakingContent'>
                            <h1>Post Your Sales Role Requirement<br />
                                Get Verified Sales Talent Match<br />
                                Check Sales Talent Credentials<br />
                                Conduct Discussion<br />
                                Select Right Match<br />
                            </h1>
                        </div>
                    </div>
                    <div className='matchmakingImage'>
                        <img src={LandingImage} alt="trusted  partners"></img>
                    </div>
                </div>
            </div>

            <div className='achievements'>
                <h1>Recent Achievements</h1>
                <div className='achievementsDiv'>
                    {achievements.map((m, i) => (
                        <div>
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
                        <h1>Business Development<br />
                            Sales Intern<br />
                            Sales Consultant<br />
                            Sales Coach<br />
                            Sales Trainer<br />
                        </h1>
                    </div>
                    <div className='findJobsContent'>
                        <p>B2C CRM Client Relationship RFPs PowerPoint
                            Presentation Design Thinking System Design Corporate Sales
                            Enterprise Sales SaaS Sales Agile Pitch Outbound Sales
                            Direct Selling Key Account Management Inside Sales
                            Email Marketing Sales Engagement Forecasting
                            Business Intelligence B2B Pre sales Inbound Sales B2C2B
                            Sales Enablement Channel Sales</p>
                    </div>
                </div>
            </div>

            <div className='testimonial'>
                <h1>What Clients Say About Us</h1>
                <div className='testimonialContents'>
                    {testimonials.map((m, i) => (
                        <Testimonialcard m={m} key={i} />
                    ))}
                </div>
            </div>

            <div className='questions'>
                <h1>Frequently Asked Questions</h1>
                <div className='questionsContent'>
                    {questions.map((question, i) => (
                        <p key={i}>{question}</p>
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
