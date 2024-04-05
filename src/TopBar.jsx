import logo from "./assets/logo.jpg"

const navdata = [
    {
        routeName: "#home",
        name: "HOME"
    },
    {
        routeName: "#about",
        name: "ABOUT"
    },
    {
        routeName: "#media",
        name: "MEDIA"
    },
    {
        routeName: "#location",
        name: "LOCATION"
    },
    {
        routeName: "#contact",
        name: "CONTACT"
    },
]

// eslint-disable-next-line react/prop-types
const TopBar = ({ scrollToOther, currentPage }) => {

    return (
        <div className="w-full font-serif flex justify-around fixed top-0 z-10">
            <img src={logo} className="w-20 h-20"  alt="logo"/>

            <div className="w-3/4 flex text-2xl text-white font-bold justify-around items-center">
                {
                    navdata.map(nav => (
                        <button onClick={() => scrollToOther(nav.name)} className={`${currentPage === nav.name ? "text-[#83fdea]" : ""} hover:text-[#83fdea]`} key={nav.routeName}>{nav.name}</button>
                    ))
                }
            </div>
        </div >
    )
};

export default TopBar;