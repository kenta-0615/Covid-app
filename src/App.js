//App.js

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPage";
import WorldPage from "./pages/WorldPage";
import "./App.css";

function App() {
    const [country, setCountry] = useState("japan");
    const [countryData, setCountryData] = useState({
        date: "",
        newConfirmed: "",
        totalConfirmed: "",
        newRecovered: "",
        totalRecovered: "",
    });

    const getScreenSize = () => {
        console.log("画面サイズの横幅");
        console.log(window.parent.screen.width);

        console.log("画面サイズの高さ");
        console.log(window.parent.screen.height)
    }

    const [allCountriesData, setAllCountriesData] = useState([]);


        const getCountryData = () => {
            fetch(`https://api.covid19api.com/country/${country}`)
                .then(res => res.json())
                .then(data => {
                    setCountryData({
                        date: data[data.length - 1].Date,
                        newConfirmed: data[data.length - 2].Confirmed,
                        totalConfirmed: data[data.length - 1].Confirmed,
                        newRecovered: data[data.length - 2].Recovered,
                        totalRecovered: data[data.length - 1].Recovered
                    });
                })
        }

    useEffect(() => {
        fetch("https://reactbook-corona-tracker-api.herokuapp.com/summary")
            .then(res => res.json())
            .then(data => setAllCountriesData(data.Countries))
}, [])

    return (
            <Routes>
            <Route>
                    <Route exact path="/" element={<TopPage countriesJson={countriesJson} setCountry={setCountry} countryData={countryData} />} />
                    <Route exact path="/world" element={<WorldPage allCountriesData={allCountriesData} />} />
            </Route>
            </Routes>
    );
}


export default App;
