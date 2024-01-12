import CustomPage from '../molecules/CustomPage'
import CustomGallery from '../molecules/CustomGallery';

const CustomMain = () => {
    return (
        <>
        <CustomPage/>
        

        <div className="section1 p-5">
        <h4>Batman</h4>
        <CustomGallery url="http://www.omdbapi.com/?apikey=b8ac787a&s=batman"/>
        </div>

        
        <div className="section1 p-5">
        <h4>Matrix</h4>
        <CustomGallery url="http://www.omdbapi.com/?apikey=b8ac787a&s=matrix"/>
        </div>
        
        <div className="section1 p-5">
        <h4>Attack on Titan</h4>
        <CustomGallery url="http://www.omdbapi.com/?apikey=b8ac787a&s=attack%20on%20titan"/>
        </div>

        <div className="section1 p-5">
        <h4>Star Wars</h4>
        <CustomGallery url="http://www.omdbapi.com/?apikey=b8ac787a&s=star%20wars" />
        </div>

        <div className="section1 p-5">
        <h4>Doctor Who</h4>
        <CustomGallery url="http://www.omdbapi.com/?apikey=b8ac787a&s=doctor%20who"/>
        </div>
        </>
    )
};

export default CustomMain