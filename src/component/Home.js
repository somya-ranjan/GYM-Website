import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css"

function Home() {
    return (
        <>
        <div className="home_comp">
            <div className="home_content">
                <h1>reach your <br /><span>fitness goals efficiently</span></h1>
                <p>here's all you need to know about weight training,cardio,yoga and supplements so you can walk into the gym and rock it!</p>
                <NavLink to='/contact'><button>Join Now</button></NavLink>
            </div>
        </div>
        </>
    )
}

export default Home
