import React from 'react'
import Hero from './Hero/Hero'
import AboutUs from './AboutUs/AboutUs'
import BirdEyeView from './Bird eye view/BirdEyeView'
import EventHighlights from './EventHighlights/EventHighlights'
import HackathonTracks from './HackathonTracks/HackathonTracks'
import Prizes from './Prizes/Prizes'
import Sponsors from './Home_Sponsors/Sponsors'

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutUs />
            <BirdEyeView />
            <EventHighlights />
            <HackathonTracks />
            <Prizes />
            <Sponsors />
        </div>
    )
}

export default Home
