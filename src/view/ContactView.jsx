import contact from "../assets/contact.png"

// eslint-disable-next-line react/prop-types
const ContactView = ({ contactRef }) => {
    return (
        <div ref={contactRef} className="w-full h-[100vh] text-white bg-black flex flex-col justify-center items-center relative">
            <p className="text-xl text-[#83fdea] mb-4">FOR BOOKING AND INQURIES</p>
            <p>CALL +959962575917</p>
            <p>khantboneshein99@gmail.com</p>

            <div className="w-full h-2/6 bg-[url('/src/assets/contact.png')] bg-top bg-cover absolute bottom-0"></div>
        </div>
    )
};

export default ContactView;