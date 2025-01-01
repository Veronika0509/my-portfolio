import React from "react";
import './App.css';

import Title from "./assets/components/Title";
import Fullviewapp from "./assets/components/Fullviewapp";
import Womazing from "./assets/components/Womazing";
import Javascript from "./assets/components/Javascript";
import Blockchain from "./assets/components/Blockchain";
import Metamask from "./assets/components/Metamask";
import Register from "./assets/components/Register";
import Socials from "./assets/components/Socials";

function App() {
    return (
        <div>
            <Title />
            <Fullviewapp />
            <Womazing />
            <Blockchain />
            <Metamask />
            <Register />
            <Socials />
        </div>
    );
}

export default App;
