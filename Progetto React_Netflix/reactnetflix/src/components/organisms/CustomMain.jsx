import CustomPageTitleSection from '../molecules/CustomPageTitleSection'
import CustomGallery from '../molecules/CustomGallery';

const CustomMain = () => {
    return (
        <>
        <CustomPageTitleSection/>
        
        <div className="section1 p-5">
        <h4>Star Wars</h4>
        <CustomGallery url="http://www.omdbapi.com/?apikey=b8ac787a&s=star%20wars" />
        </div>

        <div className="section1 p-5">
        <h4>Doctor Who</h4>
        <CustomGallery url="http://www.omdbapi.com/?apikey=b8ac787a&s=doctor%20who"/>
        </div>

        <div className="section1 p-5">
        <h4>Lord of the Rings</h4>
        <CustomGallery url="http://www.omdbapi.com/?apikey=b8ac787a&s=lord%20of%20the%20rings"/>
        </div>
        </>
    )
};

export default CustomMain