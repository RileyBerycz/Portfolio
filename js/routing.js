// routing.js
window.addEventListener('DOMContentLoaded', () => {
    // Check the current URL path
    const path = window.location.pathname;
    const projectFiles = {
        'project/football-tracking': 'project1.html',
        'project/error-video-game': 'project2.html',
        'project/third-project': 'project3.html',
        // Add more project file mappings as needed
      };
    // Handle the home page redirect
    if (path === '/') {
      window.location.href = window.location.origin;
    }
    // Handle the projects page redirect
    else if (path === '/projects') {
      window.location.href = 'projects.html';
    }
        // Handle the projects page redirect
    else if (path === '/contact-me') {
        window.location.href = 'contact.html';
    }
    // Handle the projects page redirect
    else if (path === '/about-me') {
        window.location.href = 'about.html';
    }
    
    else if (path !== '/') {
        const projectName = path.substring(1);
        const projectFile = projectFiles[projectName];
    
        if (projectFile) {
          window.location.href = projectFile;
        } 
    }
  });