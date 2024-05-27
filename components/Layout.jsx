// components/Layout.js

import Head from "next/head";

export default function Layout({ children, title = "Jonas Portfolio" }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title> {title} </title>{" "}
      </Head>{" "}
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-3 gap-3">
          <a
            href="/"
            className="text-2xl font-bold"
            style={{ placeSelf: "center start" }}
          >
            Logo{" "}
          </a>{" "}
          <div className="place-self-center">
            <a href="/" className="mx-2 hover:text-blue-800">
              Home{" "}
            </a>{" "}
            <a href="/portfolio" className="mx-2 hover:text-blue-800">
              Portfolio{" "}
            </a>{" "}
            <a href="/about" className="mx-2 hover:text-blue-800">
              About{" "}
            </a>{" "}
            <a href="/contact" className="mx-2 hover:text-blue-800">
              Contact{" "}
            </a>{" "}
          </div>{" "}
          <a
            href="/contact"
            className="mx-2 hover:text-blue-800 "
            style={{ placeSelf: "center end" }}
          >
            Contact{" "}
          </a>{" "}
        </nav>{" "}
      </header>{" "}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {" "}
        {children}{" "}
      </main>{" "}
      <footer className="bg-white shadow py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p> ©2024 Jonas Portfolio </p>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}
