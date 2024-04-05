// eslint-disable-next-line react/prop-types
const LocationView = ({ locationRef }) => {
    return (
        <div ref={locationRef} className="w-full h-[100vh] relative">
            <div className="w-full h-full flex ">
                <div className="w-1/2 h-full bg-black"></div>
                <div className="w-1/2 bg-[url('/src/assets/location.png')] bg-center bg-cover">
                </div>
            </div>

            <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0">
                <p className="text-9xl text-white font-bold">Creative <span className="text-[#83fdea]">SPOT</span></p>
                <p className="text-white text-lg">
                    L ward,North Okkalapa Tsp, <br/>
                    Kyanug Lan Bus Stop, Yangon
                </p>
            </div>
        </div>
    )
};

export default LocationView;