import Nav from './nav.jsx';

const main = () => {
    return (
        <div className="bg-indigo-600">
            <Nav/>
            <div className="border-t border-white"></div> {/* Thin white line */}
            <Hero/>
            <div className="border-t border-white"></div>
            <Portfolio/>
            <div className="border-t border-white"></div>
            <Resume/>
            <Contact/>
            <Footer/>
        </div>
    )
};