import React from "react";

const CV = () => {
  const cvData = {
    name: "John Doe",
    jobTitle: "Full Stack Developer",
    contact: {
      email: "john.doe@example.com",
      phone: "+1234567890",
      location: "New York, USA",
    },
    skills: ["React", "JavaScript", "Node.js", "CSS"],
    experience: [
      {
        company: "Tech Corp",
        position: "Software Engineer",
        duration: "2020 - Present",
      },
      {
        company: "Web Solutions",
        position: "Frontend Developer",
        duration: "2018 - 2020",
      },
    ],
  };

  return (
    <div className="cv-container">
      <h1>{cvData.name}</h1>
      <h2>{cvData.jobTitle}</h2>
      <p>Email: {cvData.contact.email}</p>
      <p>Phone: {cvData.contact.phone}</p>
      <p>Location: {cvData.contact.location}</p>

      <h3>Skills</h3>
      <ul>
        {cvData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Experience</h3>
      {cvData.experience.map((job, index) => (
        <div key={index}>
          <h4>{job.position} at {job.company}</h4>
          <p>{job.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default CV;
