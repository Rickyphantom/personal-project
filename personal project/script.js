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
// JavaScript 코드

// 기술의 경험 수준을 저장할 객체
const skills = {
  HTML: 2, // 0: 경험 없음, 1: 최하급, 2: 하급, 3: 중하급, 4: 중급, 5: 중상급, 6: 상급, 7: 최상급, 8: 전문가
  CSS: 3,
  JS: 3,
  React: 0,
  Angular: 0,
  Bootstrap: 1,
  Python: 3,
  Java: 3,
  PHP: 0,
  Node: 0,
};

// 기술의 경험 수준을 조절하는 함수
function adjustSkill(skill, direction) {
  if (direction === '-') {
    skills[skill] = Math.max(skills[skill] - 1, 0);
  } else if (direction === '+') {
    skills[skill] = Math.min(skills[skill] + 1, 8);
  }
  updateSkills();
}

// 기술의 경험 수준을 업데이트하는 함수
function updateSkills() {
  const frontendSkills = document.getElementById('frontend-skills');
  const backendSkills = document.getElementById('backend-skills');

  const frontendArticles = frontendSkills.getElementsByTagName('article');
  const backendArticles = backendSkills.getElementsByTagName('article');

  // 프론트엔드 기술 업데이트
  Array.from(frontendArticles).forEach((article) => {
    const skillName = article.getElementsByTagName('h3')[0].textContent.trim();
    const skillLevel = skills[skillName];
    const skillParagraph = article.getElementsByTagName('p')[0];
    skillParagraph.textContent = getSkillLevelText(skillLevel);
  });

  // 백엔드 기술 업데이트
  Array.from(backendArticles).forEach((article) => {
    const skillName = article.getElementsByTagName('h3')[0].textContent.trim();
    const skillLevel = skills[skillName];
    const skillParagraph = article.getElementsByTagName('p')[0];
    skillParagraph.textContent = getSkillLevelText(skillLevel);
  });
}

// 경험 수준에 따른 텍스트 반환 함수
function getSkillLevelText(level) {
  switch (level) {
    case 0:
      return '경험 없음';
    case 1:
      return '최하급';
    case 2:
      return '하급';
    case 3:
      return '중하급';
    case 4:
      return '중급';
    case 5:
      return '중상급';
    case 6:
      return '상급';
    case 7:
      return '최상급';
    case 8:
      return '전문가';
    default:
      return '';
  }
}

// 메뉴 토글 함수
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  menu.classList.toggle('show-menu');
}
