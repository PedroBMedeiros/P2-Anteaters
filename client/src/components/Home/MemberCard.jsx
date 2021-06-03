import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { MdPerson } from "react-icons/md";
import mackenzie from "../../static/team/mackenzie.jpeg";
import anthony from "../../static/team/anthony.jpeg";
import pedro from "../../static/team/pedro.png";
import naweid from "../../static/team/naweid.png";
import cherry from "../../static/team/cherry.png";
const MemberCard = ({ name, field, github, scheme }) => {
  const primary =
    scheme === 0
      ? "from-purple-500"
      : scheme === 1
      ? "from-blue-500" //blue
      : scheme === 2
      ? "from-yellow-500"
      : scheme === 3
      ? "from-green-500"
      : "from-red-500";
  const secondary =
    scheme === 0
      ? "to-indigo-500"
      : scheme === 1
      ? "to-indigo-500" //indigo
      : scheme === 2
      ? "to-red-500"
      : scheme === 3
      ? "to-green-500"
      : "to-pink-500";
  return (
    <div
      className={`bg-gradient-to-br ${primary} ${secondary} px-10 py-10 rounded-3xl`}
    >
      <div>
        <img
          src={
            name === "Mackenzie"
              ? mackenzie
              : name === "Anthony"
              ? anthony
              : name === "Pedro"
              ? pedro
              : name === "Naweid"
              ? naweid
              : cherry
          }
          alt={name}
          width="100px"
          height="100px"
          className="float-left rounded-full border-4 border-white border-opacity-30 shadow-xl"
        />
        <div className="ml-28 p-3 text-white ">
          <h1 className="opacity-50 text-2xl font-semibold">{name}</h1>
          <h2 className="uppercase opacity-50 text-sm font-semibold">
            {field}
          </h2>
        </div>
        <div className="ml-32 text-white text-opacity-40">
          <div className="inline mr-4 px-1 py-1 rounded-md bg-white bg-opacity-20">
            <MdPerson className="inline relative -top-0.5" />
            <Link to={`/member/${name}`} className="inline ml-1">
              Member
            </Link>
          </div>

          <div className="inline px-1 py-1 rounded-md bg-white bg-opacity-20">
            <AiFillGithub className="inline relative -top-0.5" />
            <a href={`https://github.com/${github}`} className="inline ml-1">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
