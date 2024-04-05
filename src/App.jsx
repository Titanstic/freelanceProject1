import { BrowserRouter } from "react-router-dom"
import TopBar from "./TopBar"
import HomeView from "./view/HomeView"
import AboutView from "./view/AboutView.jsx";
import {useEffect, useRef, useState} from "react";
import MediaView from "./view/MediaView.jsx";
import LocationView from "./view/LocationView.jsx";
import ContactView from "./view/ContactView.jsx";

function App() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [currentPage, setCurrentPage] = useState("HOME");

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const mediaRef = useRef(null);
    const locationRef = useRef(null);
    const contactRef = useRef(null);

    const handleScrollPosition = () => {
        const position = window.pageYOffset;
        console.log(position);
        if(position >=0 && position <= 620){
            setCurrentPage("HOME");
        }else if(position > 620 && position < 1300) {
            setCurrentPage("ABOUT");
        }else if(position > 1400 && position < 2000) {
            setCurrentPage("MEDIA");
        } else if(position > 2000 && position < 2850) {
            setCurrentPage("LOCATION");
        }else{
            setCurrentPage("CONTACT");
        }

        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPosition, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScrollPosition);
        };
    }, []);

    const scrollToOther = (name) => {
        setCurrentPage(name);

        switch (name){
            case "HOME":
                homeRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case "ABOUT":
                aboutRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case "MEDIA":
                mediaRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case "LOCATION":
                locationRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case "CONTACT":
                contactRef.current.scrollIntoView({behavior: "smooth"});
                break;

        }
    }

  return (
    <>
      <BrowserRouter>
        <TopBar scrollToOther={scrollToOther} currentPage={currentPage}/>
          <HomeView homeRef={homeRef} />
          <AboutView aboutRef={aboutRef} />
          <MediaView mediaRef={mediaRef}/>
          <LocationView locationRef={locationRef}/>
          <ContactView contactRef={contactRef}/>
      </BrowserRouter>
    </>
  )
}

export default App
