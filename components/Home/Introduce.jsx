// components/Introduce.js
import Head from "next/head";

export default function Layout({ children, title = "Jonas Portfolio" }) {
  return (
    <section className="text-center py-20 bg-[#F5FCFF] grid grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-t-3xl">
      <div className="max-w-4xl mx-auto ">
        <span className="font-bold">Hi I'm Jonas</span>
        <h1 className="text-4xl font-bold mb-4">
          Hi👋 I'm <span className="text-blue-600">front-end</span> developer
          and really love coding
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <a href="#contact" className="bg-blue-600 text-white py-2 px-4 rounded">
          Get in Touch
        </a>
      </div>
      <iframe
        src="https://lottie.host/embed/ab396e01-5adf-464a-a487-70c584bd4288/ar01xcjRDz.json"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </section>
  );
}
