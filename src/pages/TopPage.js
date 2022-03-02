//TopPage.js

import Header from "../Components/Header";
import Title from "../Components/Title";
import Selector from "../Components/Selector";
import Results from "../Components/Results";


const TopPage = (props) => {
    return (
        <div className="top-page-container">
            <Header />
            <Title />
            <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} />
            <Results countryData={props.countryData} loading={props.loading} />
        </div>
    );
};

export default TopPage;