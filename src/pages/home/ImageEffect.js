import React from 'react';
import ImageSlider from "react-image-comparison-slider";
import BeforeAfterSlider from 'react-before-after-slider'
const ImageEffect = () => {
    return (
        <div>
            <BeforeAfterSlider
            
            before="https://placeimg.com/400/225/arch"
            after="https://i.ibb.co/F8mFqkw/1.jpg"
            width={640}
            height={480}
            />

        
          
        </div>
    );
};

export default ImageEffect;