import React from 'react';
import "../styles/App.css"
import call from "../assests/call.png"
import facebook from "../assests/facebook.png"
import globe from "../assests/globe.png"

function App() {
    return (
        <div>
            <footer className='footer'>
                <div className='icon'>
                    <img src={call} alt='call' width={30} height={30}/>Toll free 1800 200 1234
                </div>
                <div className='icon'>
                    <img src={facebook} alt='facebook' width={30} height={30}/>www.facebook.com/cripumps
                </div>
                <div className='icon'>
                    <img src={globe} alt='globe' width={30} height={30}/>www.crigroups.com
                </div>
            </footer>
        </div>
    )
}

export default App;