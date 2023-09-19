import { Fragment } from "react"
import './home.css'
import Weather from "../components/Weather";
function Home(){
    return (
        <Fragment>
            <div className="img-Background"></div>
            <Weather/>
        </Fragment>
    )
}

export default Home;