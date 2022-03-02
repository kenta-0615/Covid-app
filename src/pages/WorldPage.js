//WorldPage.js

import Header from "../Components/Header";
import Title from "../Components/Title";
import Card from "../Components/Card";

const WorldPage = (props) => {
    return (
        <div className="world-page-container">
            <Header />
            <Title />
            <Card allCountriesData={props.allCountriesData} />
        </div>
    );
};

export default WorldPage;