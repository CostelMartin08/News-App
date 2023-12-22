import React from "react";
import Header from "../components/Header";
import MainNews from "../components/MainCardNews";
import CardGrid from "../components/CardGrid";


const MainPage = () => {



    return (

        <div className="container">

            <Header />
            <MainNews />
            <CardGrid />
       
        </div>

    )
}


export default MainPage;