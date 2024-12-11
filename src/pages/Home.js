import React, { useState } from "react";
import "../styles/Home.css";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import NutritionImage from "../assets/nutrition.jpg";
import ActivityImage from "../assets/activity.jpg";
import SleepImage from "../assets/sleep.jpg";
import StressImage from "../assets/stress.jpg";
import SocialImage from "../assets/social.jpg";
import SubstanceImage from "../assets/substance.jpg";

function Home() {
  const [activeTab, setActiveTab] = useState("Nutrition");

  const tabs = [
    "Nutrition",
    "Physical activity",
    "Restorative sleep",
    "Stress management",
    "Social connection",
    "Substance abuse",
  ];

  const cardData = {
    Nutrition: {
      imgSrc: NutritionImage,
      label: "121/80 mmHg",
      title: "Nutrition",
      description:
        "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
    },
    "Physical activity": {
      imgSrc: ActivityImage,
      label: "32 minutes",
      title: "Physical activity",
      description:
        "Regular physical activity is key to managing weight, improving mental health, and reducing the risk of chronic disease.",
    },
    "Restorative sleep": {
      imgSrc: SleepImage,
      label: "8 hours",
      title: "Restorative sleep",
      description:
        "Consistent, quality sleep is crucial for cognitive function and physical health.",
    },
    "Stress management": {
      imgSrc: StressImage,
      label: "60 bpm",
      title: "Stress management",
      description:
        "Effective stress management techniques are crucial for mental well-being and overall health.",
    },
    "Social connection": {
      imgSrc: SocialImage,
      label: "Feeling better",
      title: "Social connection",
      description:
        "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
    },
    "Substance abuse": {
      imgSrc: SubstanceImage,
      label: "62 days",
      title: "Substance abuse",
      description:
        "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
    },
  };

  return (
    <div className="home">
      {/* Header Section */}
      <div className="headerContainer">
        <h1>
          Book an appointment with <span>lifestyle medicine</span> experts
        </h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </div>

      {/* Image Grid */}
      <div className="imageGrid">
        <img src={Image1} alt="Cooking" />
        <img src={Image2} alt="Meditation" />
        <img src={Image3} alt="Bookshelf" />
        <img src={Image4} alt="Beach" />
      </div>

      {/* Search Bar */}
      <div className="searchBar">
        <input type="text" placeholder="Condition, procedure, specialty..." />
        <input type="text" placeholder="City, state, or zipcode" />
        <input type="text" placeholder="Insurance carrier" />
        <button>Find now</button>
      </div>

      {/* How It Works Section */}
      <div className="howItWorks">
        <h2 className="sectionHeader">
          How It Works
          <span className="sectionSubHeader">: Lifestyle as medicine: The six pillars</span>
        </h2>
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tabButton ${activeTab === tab ? "activeTab" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="cardContainer">
          {cardData[activeTab] && (
            <div className="card">
              <img
                className="cardImage"
                src={cardData[activeTab].imgSrc}
                alt={cardData[activeTab].title}
              />
              <div className="cardOverlay">{cardData[activeTab].label}</div>
              <div className="cardContent">
                <h3>{cardData[activeTab].title}</h3>
                <p>{cardData[activeTab].description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;