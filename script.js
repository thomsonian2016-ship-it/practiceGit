const skills = [
  {
    name: "JavaScript",
    description: "Logic, State Management, DOM manipulation"
  },
  {
    name: "HTML & Semantic Markup",
    description: "Accessible, Structured, SEO-friendly markup"
  },
  {
    name: "CSS Layout (Flexbox & Grid)",
    description: "Responsive layouts with clean spacing"
  },
  {
    name: "API Integration",
    description: "Async/await and logic-driven data handling"
  }
];

const projects = [
  {
    name: "Weather-Based Travel Advisor",
    description: "Recommends travel destinations based on weather conditions.",
    tech: "JavaScript, APIs, HTML, CSS",
    live: "#", // placeholder link
    github: "#" // placeholder link
  },
  {
    name: "Smart Todo System",
    description: "Manage tasks efficiently with logic-driven features.",
    tech: "JavaScript, LocalStorage, HTML, CSS",
    live: "#",
    github: "#"
  },
  {
    name: "Logic-Driven App",
    description: "A future project to showcase advanced JS logic.",
    tech: "JavaScript, HTML, CSS",
    live: "#",
    github: "#"
  }
];



let skillHTML ='';
skills.forEach((skill)=>{
    skillHTML += `
    <article class="skill-card">
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
    </article>
    `;
});

document.querySelector('.skills-container').innerHTML=skillHTML;

let projectHTML = '';
projects.forEach((project) => {
  projectHTML += `
    <article class="project-card">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <p><strong>Tech:</strong> ${project.tech}</p>
      <div class="project-links">
        <a href="${project.live}" target="_blank">Live</a>
        <a href="${project.github}" target="_blank">GitHub</a>
      </div>
    </article>
  `;
});

document.querySelector('.projects-container').innerHTML = projectHTML;
