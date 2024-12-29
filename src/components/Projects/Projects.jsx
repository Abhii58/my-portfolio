import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Online Quiz site',
    description: 'An interactive web application developed using PHP and MySQL, designed to create and manage quizzes for educational or training purposes. The platform allows users to register, log in, and take quizzes on various topics. Administrators can easily add, update, or delete quiz questions, manage users, and analyze quiz results through a user-friendly dashboard.',
    link: '#'
  },
  {
    title: 'Personal blogging site',
    description: 'Developed a fully functional personal blog web application with a content management system (CMS) using the MERN stack. Established a clean and intuitive user interface featuring post creation, categorization, and search functionality. Built a secure backend with REST API integration and deployed the site for public access.',
    link: '#'
  },
  {
    title: 'Dynamic Event Calendar',
    description: 'Created a React.js application with features like event management, calendar navigation, and local Storage data persistence using React.js, Context API, local-Storage, Netlify.Implemented a clean UI - components and deployed on Netlify.Enabled adding, editing, and deleting events with detailed forms.',
    link: 'https://calendar-ab.netlify.app'
  },
  {
    title: 'Stock price predictor',
    description: 'Built a machine learning model to predict stock prices using historical market data.Implemented data preprocessing, feature engineering, and model training with algorithms like LSTM and Random Forest.Integrated real-time data fetching through APIs and visualized prediction results using interactive dashboards.',
    link: '#'
  },
  {
    title: 'Fake News Detection using ML',
    description: 'A web-based application that utilizes machine learning algorithms to detect and classify news articles as real or fake. The project involves NLP techniques to analyze the content and metadata of news articles, extracting key features to train models like Logistic Regression, Naive Bayes, or Random Forest. Users can input news headlines or articles, and the system provides a credibility score or label based on the trained model. This tool helps users easily identify misleading information and promotes awareness of reliable news sources.',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
