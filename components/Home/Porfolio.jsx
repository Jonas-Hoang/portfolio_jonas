// components/Home/Porfolio.jsx

import Head from "next/head";

export default function Layout({ children, title = "Jonas Portfolio" }) {
  return (
    <section className="py-20 bg-black max-w-[1280px] mx-[146px]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white text-3xl font-bold mb-6"> My Portfolio </h2>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="relative w-full h-0 pb-[60.25%] mb-4 rounded-lg overflow-hidden">
              <img
                src="https://adqowpxixvgpgzdsylps.supabase.co/storage/v1/object/public/imageUpload/public/Screenshot_2024-04-23_at_16.01.00.png"
                alt="Project 1"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2"> Running Diamond Cup </h3>{" "}
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>{" "}
            <a href="#" className="text-blue-600 hover:underline mt-2 block">
              View Details{" "}
            </a>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="relative w-full h-0 pb-[60.25%] mb-4 rounded-lg overflow-hidden">
              <img
                src="https://adqowpxixvgpgzdsylps.supabase.co/storage/v1/object/public/imageUpload/public/Screenshot_2024-04-26_at_09.47.14.png"
                alt="Project 2"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2"> Social Admin Layout </h3>{" "}
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>{" "}
            <a href="#" className="text-blue-600 hover:underline mt-2 block">
              View Details{" "}
            </a>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="relative w-full h-0 pb-[60.75%] mb-4 rounded-lg overflow-hidden">
              <img
                src="https://adqowpxixvgpgzdsylps.supabase.co/storage/v1/object/public/imageUpload/public/Screenshot_2024-04-25_at_14.18.29.png"
                alt="Project 3"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg scale-125"
              />
            </div>
            <h3 className="text-xl font-bold mb-2"> E-commerce Mobile App </h3>{" "}
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
  );
}
