import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img3.jpg";
import Common from './Common'

const Home = () => {
    return (
        <>
            <Common name="Grow your business with" imgsrc={web} visit='/service' btname="Get started" />
        </>
    )
};
export default Home;