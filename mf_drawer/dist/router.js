"use strict";
function navigateTo(route) {
    const content = document.getElementById('content');
    if (route === 'videos') {
        content.innerHTML = `<iframe src="http://localhost:3001" style="width: 100%; height: 100vh; border: none;"></iframe>`;
    }
    else if (route === 'favorites') {
        content.innerHTML = `<iframe src="http://localhost:3001/favorites" style="width: 100%; height: 100vh; border: none;"></iframe>`;
    }
}
