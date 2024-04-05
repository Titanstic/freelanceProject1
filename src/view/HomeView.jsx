import homevideo from '../assets/video/home.mp4';

// eslint-disable-next-line react/prop-types
const HomeView = ({homeRef}) => {
    return (
        <div ref={homeRef} className="h-[100vh] w-full overflow-hidden" id="home">
            <video autoPlay muted loop id="myVideo">
                <source src={homevideo} type="video/mp4" />
            </video>
        </div>
    )
};

export default HomeView;