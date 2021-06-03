import React from "react";
import { BsLightningFill } from "react-icons/bs";
import { BiAward } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
export const Feature = ({ icon, tag, header, children }) => {
  const getIcon = () => {
    switch (icon) {
      case "easy":
        return <BiAward />;
      case "speed":
        return <BsLightningFill />;
      case "team":
        return <RiTeamFill />;
    }
  };

  const primary =
    tag[1] === 1
      ? "from-green-400"
      : tag[1] === 2
      ? "from-yellow-400" //blue
      : "from-blue-400";
  const secondary =
    tag[1] === 1
      ? "to-green-600"
      : tag[1] === 2
      ? "to-yellow-600" //blue
      : "to-blue-600";

  return (
    <div className="mt-36">
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center ${primary} ${secondary} text-2xl text-white`}
      >
        {getIcon()}
      </div>
      <h4 className={`mt-4 uppercase ${tag[2]} font-semibold text-lg`}>
        {tag[0]}
      </h4>
      <h3 className="text-6xl font-bold">{header}</h3>
      <p className="mt-2 max-w-4xl text-xl text-gray-600 font-medium leading-8 mb-6">
        {children[0]}
      </p>
      <div>{children[1]}</div>
    </div>
  );
};
