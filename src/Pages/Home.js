import React from 'react';
import Featured from '../Components/Home/Featured'
import Matches from '../Components/Home/Matches'
import MeetPlayers from '../Components/Home/MeetPlayers'
import Promotion from '../Components/Home/Promotion'



const Home = () => {
    return (
        <div className="bck_blue">
            <Featured />
            <Matches />
            <MeetPlayers />
            <Promotion/>
        </div>
    )
}

export default Home