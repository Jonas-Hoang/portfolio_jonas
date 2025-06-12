// components/Layout.js

import Head from "next/head";

export default function Layout({ children, title = "Jonas Portfolio" }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-yellow-200 text-black">
      <Head>
        <title> {title} </title>{" "}
      </Head>{" "}
      <header className="border-b-1 border-black border-solid">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-3 gap-3">
          <a
            href="/"
            className="text-2xl font-bold"
            style={{ placeSelf: "center start" }}
          >
            JonasDev{" "}
          </a>{" "}
          <div className="place-self-center">
            <a href="/" className="mx-2 hover:text-orange-500">
              Home{" "}
            </a>{" "}
            <a href="/portfolio" className="mx-2 hover:text-orange-500">
              Portfolio{" "}
            </a>{" "}
            <a href="/about" className="mx-2 hover:text-orange-500">
              About{" "}
            </a>{" "}
            <a href="/contact" className="mx-2 hover:text-orange-500">
              Contact{" "}
            </a>{" "}
          </div>{" "}
          <a
            href="/contact"
            className="mx-2 hover:text-orange-500 "
            style={{ placeSelf: "center end" }}
          >
            Contact{" "}
          </a>{" "}
        </nav>{" "}
      </header>{" "}
      <main className=""> {children} </main>{" "}
      <footer className="bg-transparent  shadow py-6 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p> ©2024 Jonas Portfolio </p>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}
