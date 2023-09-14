import { Fragment } from "react"
import './home.css'

function Home(){
    return (
        <Fragment>
            <div className="img-Background"></div>
            <form action="#" className="relative text-cyan-400">
                <input type="text" placeholder="hello" className="bg-[#1e202b] mb-[6rem]" />
                <button type="submit" className="bg-[#039fd9] text-white">Find</button>
            </form>
        </Fragment>
    )
}

export default Home;