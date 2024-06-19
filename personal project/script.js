// script.js

document.addEventListener('DOMContentLoaded', function () {
  const projects = [
    {
      title: '24학년 중간고사 개인 포트폴리오',
      github: 'https://github.com/Rickyphantom/projact-solo',
      members: '',
    },
    {
      title: '24학년 기말고사 팀플 프로젝트',
      github: 'https://github.com/limgunny/final_personal_project-',
      members: '박이슬, 유선빈, 임건희',
    },
  ];

  const projectList = document.getElementById('project-list');

  function displayProjects() {
    projectList.innerHTML = '';
    projects.forEach((project, index) => {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'details-container color-container';
      projectDiv.innerHTML = `
        <div class="article-container"></div>
        <h2 class="experience-sub-title project-title">${project.title}</h2>
        <div class="btn-container">
          ${project.members ? `<h1>조원 : ${project.members}</h1>` : ''}
          <button class="btn btn-color-2 project-btn" onclick="window.open('${
            project.github
          }')">Github</button>
          <button class="btn btn-color-2 project-btn" onclick="deleteProject(${index})">삭제</button>
        </div>
      `;
      projectList.appendChild(projectDiv);
    });
  }

  function deleteProject(index) {
    projects.splice(index, 1);
    displayProjects();
  }

  const addProjectForm = document.getElementById('add-project-form');
  addProjectForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('project-title').value;
    const github = document.getElementById('project-github').value;
    const members = document.getElementById('project-members').value;
    projects.push({ title, github, members });
    displayProjects();
    addProjectForm.reset();
  });

  displayProjects();
});
