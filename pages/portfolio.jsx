// pages/projects.js

import Layout from "../components/Layout";

const projects = [
  { title: "Project One", description: "This is project one description." },
  { title: "Project Two", description: "This is project two description." },
  // Add more projects here
];

export default function Projects() {
  return (
    <Layout title="My Projects">
      <h1> Projects </h1>{" "}
      <ul>
        {" "}
        {projects.map((project, index) => (
          <li key={index}>
            <h2> {project.title} </h2> <p> {project.description} </p>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </Layout>
  );
}
