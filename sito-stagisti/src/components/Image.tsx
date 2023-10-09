import React, { useState, useRef } from "react";

type props = {
    "link" : string
}


function Image({link}: props) {
  // create a state variable for the scale of the image
  const [scale, setScale] = useState(1);

  // create a ref variable for the image element
  // use the type assertion operator to specify the type of HTMLImageElement
  const imgRef = useRef<HTMLImageElement>(null);

  // define a function that toggles the scale between 1 and 1.5
  const toggleScale = () => {
    setScale((prevScale) => (prevScale === 1 ? 1.5 : 1));
  };

  // define a function that resets the scale to 1
  const resetScale = () => {
    setScale(1);
  };

  // use the useEffect hook to update the style of the image element based on the scale
  React.useEffect(() => {
    // get the image element from the ref
    // use the non-null assertion operator to tell TypeScript that img is not null
    const img = imgRef.current!;

    // set the transform property to scale the image
    img.style.transform = `scale(${scale})`;

    // set the transform origin property to center the image
    img.style.transformOrigin = "center";

    img.style.cursor = img.style.cursor == "zoom-out" ? "zoom-in" : "zoom-out"
    
  }, [scale]);

  //Check if device is small,
  const isSmallDevice = window.matchMedia("(max-width: 768px)").matches;

  return (
    <img
      src={link}
      className="min-h-[18rem] max-h-96 min-w-[24rem] sm:mx-4 mx-0 mb-4 shadow rounded-lg hover:cursor-zoom-in duration-200"
      ref={imgRef}
      // conditionally render the onClick and onMouseLeave props based on the device size
      onClick={isSmallDevice ? undefined : toggleScale}
      onMouseLeave={isSmallDevice ? undefined : resetScale}
    />
  );
}

export default Image;
