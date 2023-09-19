import { Fragment } from "react"
import './home.css'
import SearchBar from "../components/SearchBar";
import Weather from "../components/Weather";
function Home(){
    return (
        <Fragment>
            <div className="img-Background"></div>
            <SearchBar/>
            <Weather/>
        </Fragment>
    )
}

export default Home;