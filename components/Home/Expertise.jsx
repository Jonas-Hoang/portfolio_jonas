// components/Layout.js

import Head from "next/head";

export default function Layout({ children, title = "Jonas Portfolio" }) {
  return (
    <section className="py-20 bg-black max-w-[1280px] mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white"> My Expertise </h2>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow flex flex-col">
            <h3 className="text-xl font-bold mb-4 flex-grow-0">
              {" "}
              Strategy & Direction{" "}
            </h3>{" "}
            <p className="flex-grow">
              As a front-end software engineer, I excel at developing strategic
              plans and providing clear direction for project success. I utilize
              thorough analysis and innovative thinking to drive growth and
              achieve objectives.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col">
            <h3 className="text-xl font-bold mb-4 flex-grow-0 whitespace-nowrap">
              {" "}
              Front-End Development
            </h3>{" "}
            <p className="flex-grow">
              In my role, I create responsive and visually appealing web
              interfaces. My work focuses on writing clean, maintainable code
              and implementing modern front-end frameworks to enhance user
              experience and functionality.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4"> UI & UX Design </h3>{" "}
            <p>
              I collaborate closely with design teams to implement user-centric
              UI/UX designs. My goal is to translate design concepts into
              seamless, interactive web experiences that enhance user
              satisfaction and engagement.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4 whitespace-nowrap">
              {" "}
              Workflow Development{" "}
            </h3>{" "}
            <p>
              I optimize front-end workflows and develop efficient processes. My
              expertise ensures streamlined operations, increased productivity,
              and effective collaboration within development teams.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
