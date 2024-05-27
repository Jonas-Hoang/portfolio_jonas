// components/Layout.js

import Head from "next/head";

export default function Layout({ children, title = "Jonas Portfolio" }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6"> My Expertise </h2>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4"> Strategy & Direction </h3>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.Suspendisse varius enim in eros elementum tristique.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4"> Branding & Logo </h3>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.Suspendisse varius enim in eros elementum tristique.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4"> UI & UX Design </h3>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.Suspendisse varius enim in eros elementum tristique.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4"> Workflow Development </h3>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.Suspendisse varius enim in eros elementum tristique.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
