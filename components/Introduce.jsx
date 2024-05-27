// components/Introduce.js

import Head from "next/head";

export default function Layout({ children, title = "Jonas Portfolio" }) {
  return (
    <section className="text-center py-20 bg-[#F5FCFF]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          I create <span className="text-blue-600">product design</span> and
          brand experience
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <a href="#contact" className="bg-blue-600 text-white py-2 px-4 rounded">
          Get in Touch
        </a>
      </div>
    </section>
  );
}
