import  { useState } from "react";
import PageTitle from "../PageTitle/PageTitle";

const TechSpotlight = () => {
  const gadgets = [
    {
      id: 1,
      name: "Smart VR Headset",
      description:
        "Immerse yourself in the virtual world with the latest Smart VR Headset, featuring 4K resolution and ultra-smooth tracking.",
      image: "https://i.ibb.co.com/k2BgRDr/download-9.jpg", 
    },
    {
      id: 2,
      name: "AI-Powered Mobile",
      description:
        "Stay connected and track your health with an AI-powered Mobile that learns your habits and adapts to your needs.",
      image: "https://i.ibb.co.com/GWnB62L/download-10.jpg", 
    },
    {
      id: 3,
      name: "Foldable Smartphone",
      description:
        "Experience innovation with the latest foldable smartphone that combines portability with productivity.",
      image: "https://i.ibb.co.com/ydN3C7g/download-8.jpg", 
    },
  ];

  const [currentGadget, setCurrentGadget] = useState(0);

  const handleNext = () => {
    setCurrentGadget((prev) => (prev + 1) % gadgets.length);
  };

  const handlePrev = () => {
    setCurrentGadget((prev) => (prev - 1 + gadgets.length) % gadgets.length);
  };

  return (
    <div className="relative flex flex-col items-center bg-base-300">
            <PageTitle title="TechSpotlight" />

            <div className="hero  bg-[#9538E2] py-10 md:p-10">
                <div className="hero-content text-center">
                    <div className="flex flex-col items-center text-white">
                        <h1 className="text-4xl font-bold">SpotLight</h1>
                        <p className="py-6 md:w-3/4">
                            Explore the latest gadgets that has recently released will take your experience to the next level. For All Latest Tech news Plese follow our Website!
                        </p>
                    </div>
                </div>
            </div>
            
    <section className="tech-spotlight my-7">
      <h2 className="text-3xl font-bold text-center my-6">Tech Spotlight</h2>
      <div className="gadget-display flex flex-col items-center">
        <img
          src={gadgets[currentGadget].image}
          alt={gadgets[currentGadget].name}
          className="wh-64 object-cover rounded-lg shadow-md"
        />
        <h3 className="text-xl font-semibold mt-4">
          {gadgets[currentGadget].name}
        </h3>
        <p className="text-gray-600 text-center mt-2">
          {gadgets[currentGadget].description}
        </p>
        <div className="controls mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default TechSpotlight;
