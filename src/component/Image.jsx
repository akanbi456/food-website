// import { useState, useEffect } from "react";
// import { ImageData } from "../data/ImageData";

// function Image(){
//     const[image, setImage] = useState(0);

//     useEffect(()=>{
//         const render = setInterval(()=>{
//             setImage((count)=> (count +1)%
//                 ImageData.length);
//         }, 2000);
//         return () => clearInterval(render);
//     },[]);
//     return(
//         <div>
//             <img src={ImageData[image].Image} alt="" />
//         </div>
//     )
// }
// export default Image
import { useState, useEffect } from "react";
import { ImageData } from "../data/ImageData";

function Carousel() {
  const [carousel, setCarousel] = useState(0);

  useEffect(() => {
    const render = setInterval(() => {
      setCarousel((count) => (count + 1) % ImageData.length);
    }, 3000);
    return () => clearInterval(render);
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[500px] bg-center bg-cover rounded-full">
      <img
        src={ImageData[carousel].Image}
        alt={`Slide ${carousel}`}
        className="object-cover w-full h-full rounded-full p-2mt-10 animate-slide-in-right md:w-auto md:mt-0"
      />
    </div>
  );
}

export default Carousel;
