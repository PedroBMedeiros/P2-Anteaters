import React from "react";
import { Link } from "react-router-dom";
import { Feature } from "../components/Home/Feature";
import { FaRegIdBadge } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { TiArrowRightThick } from "react-icons/ti";
import MemberCard from "../components/Home/MemberCard";
// import { MdMoreVert } from "react-icons/md";
export const Home = () => {
  const team = [
    { name: "Mackenzie", field: "frontend", github: "kenzie-rylie" },
    { name: "Anthony", field: "backend", github: "Giustanthony" },
    { name: "Pedro", field: "backend", github: "PedroBMedeiros" },
    { name: "Naweid", field: "frontend", github: "Naweid" },
    { name: "Cherry", field: "frontend", github: "YanqiaoD" },
  ];

  return (
    <div>
      <section className="mt-32 mb-0 lg:w-3/4 mx-auto text-center" id="landing">
        <h2 className="text-lg text-indigo-600 uppercase font-semibold">
          P2 - Anteaters
        </h2>
        <h1 className="text-8xl font-bold">
          The simplist todo application ever.
        </h1>
        <div className="mt-12">
          <Link
            to="/auth"
            className="mr-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg leading-6 font-semibold py-2 px-6 border-2 border-indigo-600 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-700 focus:outline-none transition-colors duration-200"
          >
            Get started
          </Link>
          <a
            href="#features"
            className="text-indigo-600 border-2 hover:border-indigo-700 hover:text-indigo-700 border-indigo-600 bg-transparent text-lg leading-6 font-semibold py-2 px-6 rounded-xl duration-200"
          >
            Learn more
          </a>
        </div>
      </section>

      <section id="features" className="w-full lg:w-3/4 mx-24 mt-80">
        <Feature
          icon="easy"
          tag={["Fundamentally easy", 1, "text-green-400"]} //green
          header="We prioritize simplicity."
        >
          Generally todo applications these days have very cluttered user
          interfaces and advertisements in every corner, we aim to change that.
          Our ui was built passion and the people in mind and makes everything
          from viewing your todos to adding new ones a breeze.
          <div className="text-gray-300 text-left mt-8">
            <Link to="/auth" className="inline-block text-center">
              <div className="h-36 w-52 group px-12 py-8 rounded-2xl border-2 bg-white hover:shadow-xl hover:text-green-500 hover:border-green-500 hover:border-4 duration-200">
                <FaRegIdBadge className="text-5xl mx-auto" />
                <h1 className="mt-2 font-semibold text-xl">Register</h1>
              </div>
            </Link>
            <div className="inline-block group px-6 py-8 text-3xl bg-white">
              <TiArrowRightThick />
            </div>
            <Link to="/auth" className="inline-block text-center">
              <div className="relative h-36 w-52 group px-12 py-8 rounded-2xl border-2 bg-white hover:shadow-xl hover:text-green-400 hover:border-green-400 hover:border-4 duration-200">
                <HiOutlineUser className="text-5xl mx-auto" />
                <h1 className="mt-2 font-semibold text-xl">Login</h1>
              </div>
            </Link>
            <div className="inline-block group px-6 py-8 text-3xl bg-white">
              <TiArrowRightThick />
            </div>
            <Link to="/dashboard" className="inline-block text-center">
              <div className="relative h-36 w-52 group px-12 py-8 rounded-2xl border-2 bg-white hover:shadow-xl hover:text-green-300 hover:border-green-300 hover:border-4 duration-200">
                <BsCardChecklist className="text-5xl mx-auto" />
                <h1 className="mt-2 font-semibold text-xl">Todos</h1>
              </div>
            </Link>
          </div>
        </Feature>

        <Feature
          icon="speed"
          tag={["Incredibly fast", 2, "text-yellow-400"]} //yellow
          header="The latest technology means fastest experience."
        >
          Behind the scenes our application is connected and synced with a
          custom flask api with a dedicated database. Paired with a ReactJS
          frontend, our backend server can deliver blazing interaction speeds to
          you, the user. We have our API deployed to Mr. Mortensen's hardware under antsapi.nighthawkcodingsociety.com
          <div></div>
        </Feature>

        <Feature
          icon="team"
          tag={["Reliable team", 3, "text-blue-400"]} // blue
          header="A dedicated team to deliver you the best experience."
        >
          We are a team of 4 individuals with different expertise in the world
          of computer science. Our hard working team is committed to bringing
          you the best experience that you can possibly have whilst creating
          your beautiful todo list.
          <div className="mt-4 grid grid-cols-layout gap-6">
            {team.map((member, index) => (
              <MemberCard
                name={member.name}
                field={member.field}
                github={member.github}
                scheme={index}
              />
            ))}
          </div>
        </Feature>
      </section>

      {/* <section id="team">
        <div className="mt-20 w-full h-20 bg-indigo-600">
          <h1>The team</h1>
        </div>
      </section> */}
    </div>
  );
};
