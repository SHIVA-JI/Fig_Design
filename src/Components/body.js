import React from "react";
import "./body.css";
import SliderComponent from "./Slider";

const Body = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="header">
          <h2>New product</h2>
        </div>
        <div className="line-1"></div>
      </div>
      <div className="row">
        <div className="col-3">
          <ul className="vertical">
            <li>Apparel</li>
            <li>Accessories</li>
            <li>Best sellers</li>
            <li>50% off</li>
          </ul>
        </div>
        <div className="col-9">
          {/* Use col-9 to allocate the remaining space for the SliderComponent */}
          <SliderComponent />
        </div>
      </div>
    </div>
  );
};

export default Body;



// import React from "react";
// import "./body.css";
// // import Card from "./Card";
// import SliderComponent from "./Slider";

// const Body=()=>{
//     return<>
//     <div className="container-fluid">
//         <div className="row">
//             <div className="header"><h2>New product</h2></div>
//             <div className="line-1"></div>
//             </div>
//             <div className="row">
//             <div className="col-3">
//                 <ul className="vertical">
//                     <li>Apparel</li>
//                     <li>Accessories</li>
//                     <li>Best sellers</li>
//                     <li>50% off</li>
//                 </ul>
//             </div>
//             <div>
//                 <SliderComponent/>
//             </div>
//         </div>
//     </div>
//     </>
// }
// export default Body;