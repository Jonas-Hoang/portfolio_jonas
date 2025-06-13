import Head from "next/head";

export default function Layout({ children, title = "Jonas Portfolio" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="py-20 bg-white max-w-[1280px] mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-700 mb-6">
            I'm a software engineer with 3 years of experience specializing in
            Vue.js and Nuxt.js. Passionate about creating dynamic,
            high-performance web applications and continuously improving my
            skills.
          </p>
          <img
            src="https://adqowpxixvgpgzdsylps.supabase.co/storage/v1/object/public/imageUpload/public/jonas.jpg"
            alt="Jonas Image"
            className="mx-auto rounded-full w-48 h-48 object-cover mb-4"
          />
          <p className="text-lg">
            Eager to learn and explore more, I strive to continuously expand my
            knowledge and expertise in software development.
          </p>
        </div>
      </section>
    </>
  );
}
