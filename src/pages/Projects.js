// src/pages/Projects.js

import React from 'react';
import Project from '../components/Project';

const Projects = () => {
  const projects = [
    {
      title: 'Stress Detection System',
      description: 'Developed and implemented a Stress Detection System using PyTorch and Convolutional Neural Networks (CNN) for voice recognition and analysis.',
      githubLink: 'https://github.com/shreyas-9601/stress_detection_system'
    },
    {
      title: 'Attendance System',
      description: 'Developed an Attendance System using Python and OpenCV for automated attendance tracking.',
      githubLink: 'https://github.com/shreyas-9601/Attendance_system'
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} title={project.title} description={project.description} githubLink={project.githubLink} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
