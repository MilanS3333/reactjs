import Header from "./web/Header";
import Section_01 from "./web/Section_01";
import Section_02 from "./web/Section_02";
import Section_03 from "./web/Section_03";
import Section_04 from "./web/Section_04";
import FAQ_Section from "./web/FAQ_Section";
import Footer from "./web/Footer";

import React from 'react';

function Index(props) {
    return (
        <>
            <Header />
            <div className="br"></div>
            <Section_01 />
            <div className="br"></div>
            <Section_02 />
            <div className="br"></div>
            <Section_03 />
            <div className="br"></div>
            <Section_04 />
            <div className="br"></div>
            <FAQ_Section />
            <div className="br"></div>
            <Footer />
        </>
    );
}

export default Index;