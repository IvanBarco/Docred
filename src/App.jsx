import React from "react";
import '../src/styles/App.scss';
import { Header } from "./container/Header";
import { Content } from "./container/Content";
import { Footer } from "./container/Footer";

export default function App () {
    return(
        <div className='App'>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}