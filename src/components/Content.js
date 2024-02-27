import React from 'react';
import "../styles/App.css"
import tropy from "../assests/1.png"
import award from "../assests/2.png"
import project from "../assests/3.png"

function App() {
    return (
        <div>
            {/* tropy and award section */}
            <div className='container'>
                <div className='left-container'>
                    <img src={tropy} alt='tropy'/>
                </div>

                <div className='right-container' style={{ fontFamily: "Times New Roman, Times, serif" }}>
                    <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                    <ul>
                        <li>
                        C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                        </li>
                        <li>
                        C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                        </li>
                    </ul>
                    <div className='award'>
                        <img src={award} alt='award'/>
                    </div>
                    <p style={{ fontFamily: "Times New Roman, Times, serif" }}>
                    Government of India has awarded the <mark className="highlight">"National Energy Conservation Award 2018"</mark>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                    </p>
                </div>
            </div>
            
            {/* projects section */}    
            <div className='new-container' style={{ fontFamily: "Times New Roman, Times, serif" }}>
                <h5>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h5>
                <div className='project'>
                    <div className='project_img'>
                        <img src={project} alt='project' />
                    </div>
                    <h4 className='bottom'>
                        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
                    </h4>
                </div>

                <div className='line'>
                    <hr></hr>
                </div>
                <div className='project-bottom'>
                    <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
                    <p>CHEMICALS & PROCESS <span></span> POWER WATER & WASTE WATER <span></span> OILS & GAS PHARMA <span></span> SUGARS & DISTILLERIES <span></span> PAPER & PULP <span></span> MARINE & DEFENCE <span></span> METAL & MINING <span></span> FOOD & BEVERAGE <span></span> PETROCHEMICAL & REFINERIES <span></span> SOLAR <span></span> BUILDING <span></span> HVAC <span></span> FIRE FIGHTING <span></span> AGRICULTURE & RESIDENTIAL</p>
                </div>
            </div>

        </div>

    )
}

export default App;