// eslint-disable-next-line react/prop-types
const AboutView = ({aboutRef}) => {
    return (
        <div ref={aboutRef} className="w-full h-[100vh] bg-[url('/src/assets/about.jpg')] bg-center bg-cover overflow-hidden" >
            <div className="w-full h-full bg-black bg-opacity-60 text-6xl text-white font-bold flex items-center">
                <h2 className="w-1/2 ml-20">We are on a mission to positively impact the world through our shadow storytelling.We are the Junior Creative.</h2>
            </div>
        </div>
    )
};

export default AboutView;