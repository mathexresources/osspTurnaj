const maps = document.querySelectorAll('.map');

maps.forEach(map => {
    map.addEventListener('click', () => {
        map.classList.toggle('banned');
    });
});

const randomTeamButton = document.querySelector('.randomteam');

randomTeamButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
        randomTeamButton.textContent = 'Ne6rus';
        randomTeamButton.classList.add('t1');
        randomTeamButton.classList.remove('t2');
    } else {
        randomTeamButton.textContent = 'Bez názvu';
        randomTeamButton.classList.add('t2');
        randomTeamButton.classList.remove('t1');
    }
});
