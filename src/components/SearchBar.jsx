import Weather from "./Weather";
function SearchBar(){
    return(
        <form action="#" className="relative -mt-64 container mx-auto px-32">
        <input type="text" placeholder="Find your location..." className="w-full pt-[20px] pr-[50px] pb-[20px] pl-[20px] rounded-[30px] bg-[#1e202b] text-white" />
        <button type="submit" className="absolute top-1 right-[133px] bottom-1 px-10 rounded-[30px] bg-[#009ad8] text-white cityInput" onClick={()=>{search()}}>Find</button>
    </form>
    )
}

export default SearchBar;