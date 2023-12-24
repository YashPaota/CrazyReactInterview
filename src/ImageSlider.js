import { useEffect, useState } from "react";
import { data } from "../constant";



const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handlePrevClick = () => {
    setActiveImageIndex(
      !activeImageIndex ? data.length - 1 : activeImageIndex - 1
    );
  };
  const handleNextClick = () => {
    setActiveImageIndex(
      activeImageIndex === data.length - 1 ? 0 : activeImageIndex + 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    },5000);
    return () => {
        clearTimeout(timer);
    }
  }, [activeImageIndex]);


  return (
    <div className="flex justify-center">
      <button className="font-bold p-2 m-10" onClick={handlePrevClick}>
        Prev
      </button>
      {data.map((url, index) => (
        <img
          key={index}
          className={
            "w-[400] object-contain h-[300px] " +
            (activeImageIndex === index ? "block" : "hidden")
          }
          src={url}
          alt="Imagesofcarousel"
        />
      ))}
      <button className="font-bold p-2 m-10" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
