import React, { useState } from "react";
import Main from './components/Main.js'
import TopBar from './components/TopBar.js'
import Footer from './components/Footer.js'

const App = () => {
    return (
        <div className="App">
            <TopBar />
            <Main />
            <Footer />
        </div>
    );
}

export default App;