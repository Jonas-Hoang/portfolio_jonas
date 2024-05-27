// pages/index.js

import Layout from "../components/Layout";
import Introduce from "../components/Introduce";
import Expertise from "../components/Expertise";

export default function Home() {
  return (
    <Layout>
      <Introduce />
      <Expertise />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6"> About Me </h2>{" "}
          <p className="text-xl text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce vel
            sapien elit.In malesuada semper mi, nec pulvinar.{" "}
          </p>{" "}
          <img
            src="/path/to/your-photo.jpg"
            alt="Your Name"
            className="mx-auto rounded-full w-48 h-48 object-cover mb-4"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta.Refert
            tamen, quo modo.{" "}
          </p>{" "}
        </div>{" "}
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6"> My Portfolio </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <img
                src="/path/to/project1.jpg"
                alt="Project 1"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2"> Project One </h3>{" "}
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>{" "}
              <a href="#" className="text-blue-600 hover:underline mt-2 block">
                View Details{" "}
              </a>{" "}
            </div>{" "}
            <div className="bg-white p-6 rounded-lg shadow">
              <img
                src="/path/to/project2.jpg"
                alt="Project 2"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2"> Project Two </h3>{" "}
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>{" "}
              <a href="#" className="text-blue-600 hover:underline mt-2 block">
                View Details{" "}
              </a>{" "}
            </div>{" "}
            <div className="bg-white p-6 rounded-lg shadow">
              <img
                src="/path/to/project3.jpg"
                alt="Project 3"
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2"> Project Three </h3>{" "}
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>{" "}
              <a href="#" className="text-blue-600 hover:underline mt-2 block">
                View Details{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6"> Customer Testimonials </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce
                vel sapien elit.{" "}
              </p>{" "}
              <p className="font-bold"> Customer Name </p>{" "}
              <p className="text-gray-700"> Company </p>{" "}
            </div>{" "}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce
                vel sapien elit.{" "}
              </p>{" "}
              <p className="font-bold"> Customer Name </p>{" "}
              <p className="text-gray-700"> Company </p>{" "}
            </div>{" "}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce
                vel sapien elit.{" "}
              </p>{" "}
              <p className="font-bold"> Customer Name </p>{" "}
              <p className="text-gray-700"> Company </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6"> Contact Me </h2>{" "}
          <form className="bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-3 rounded-lg"
              />
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-3 rounded-lg"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded-lg"
              />
            </div>{" "}
            <div className="mb-4">
              <select className="border border-gray-300 p-3 rounded-lg w-full">
                <option> Choose a Topic </option>{" "}
                <option> Project Inquiry </option>{" "}
                <option> General Question </option> <option> Other </option>{" "}
              </select>{" "}
            </div>{" "}
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="border border-gray-300 p-3 rounded-lg w-full h-32"
              ></textarea>{" "}
            </div>{" "}
            <div className="mb-4 text-left">
              <input type="checkbox" className="mr-2" />
              <label> I agree to the terms and conditions </label>{" "}
            </div>{" "}
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded"
            >
              Submit{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </section>{" "}
    </Layout>
  );
}
