import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseImage from "../assets/choose-image.png";
import DeleveryMeals from "../assets/delivery-image.png";
const Work = () => {
  const workInfo = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseImage,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeleveryMeals,
      title: "Fast Delivaries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
      <p className="primary-text">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.
        Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>
      </div>
      
      <div className="work-section-bottom">
        {
            workInfo.map((data)=>(
                <div className="work-section-info">
                    <div className="info-boxes-image-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Work;
