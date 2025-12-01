
function setTheme(theme) {
  // hide all theme divs
    document.querySelectorAll('.wintertimer, .springtimer, .summertimer, .autumntimer, .darktimer, .lighttimer').forEach(div => {
        div.classList.add('hidden');
    });

  // show the active theme div
    if (theme === 'wintertimer') {
        document.querySelector('.wintertimer').classList.remove('hidden');
    } else if (theme === 'springtimer') {
        document.querySelector('.springtimer').classList.remove('hidden');
    } else if (theme === 'summertimer') {
        document.querySelector('.summertimer').classList.remove('hidden');
    } else if (theme === 'autumntimer') {
        document.querySelector('.autumntimer').classList.remove('hidden');
    } else if (theme === 'darktimer') {
        document.querySelector('.darktimer').classList.remove('hidden');
    } else if (theme === 'lighttimer') {
        document.querySelector('.lighttimer').classList.remove('hidden');
    }
}

// Initialize default theme
setTheme('darktimer');

//circle expantion
const circleButtonsp = document.querySelector('.circle-buttonsp');
circleButtonsp.addEventListener('click', () => {
    circleButtonsp.classList.toggle('expanded');
});
const circleButtonsu = document.querySelector('.circle-buttonsu');
circleButtonsu.addEventListener('click', () => {
    circleButtonsu.classList.toggle('expanded');
});
const circleButtonau = document.querySelector('.circle-buttonau');
circleButtonau.addEventListener('click', () => {
    circleButtonau.classList.toggle('expanded');
});
const circleButtond = document.querySelector('.circle-buttond');
circleButtond.addEventListener('click', () => {
    circleButtond.classList.toggle('expanded');
});
const circleButtonl = document.querySelector('.circle-buttonl');
circleButtonl.addEventListener('click', () => {
    circleButtonl.classList.toggle('expanded');
});
const circleButtonwi = document.querySelector('.circle-buttonwi');
circleButtonwi.addEventListener('click', () => {
    circleButtonwi.classList.toggle('expanded');
});

// Set up event listeners after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // wire button clicks
    document.getElementById('winterbtnwi').addEventListener('click', () => setTheme('wintertimer'));
    document.getElementById('springbtnwi').addEventListener('click', () => setTheme('springtimer'));
    document.getElementById('summerbtnwi').addEventListener('click', () => setTheme('summertimer'));
    document.getElementById('autumnbtnwi').addEventListener('click', () => setTheme('autumntimer'));
    document.getElementById('darkbtnwi').addEventListener('click', () => setTheme('darktimer'));
    document.getElementById('lightbtnwi').addEventListener('click', () => setTheme('lighttimer'));

    document.getElementById('winterbtnsp').addEventListener('click', () => setTheme('wintertimer'));
    document.getElementById('springbtnsp').addEventListener('click', () => setTheme('springtimer'));
    document.getElementById('summerbtnsp').addEventListener('click', () => setTheme('summertimer'));
    document.getElementById('autumnbtnsp').addEventListener('click', () => setTheme('autumntimer'));
    document.getElementById('darkbtnsp').addEventListener('click', () => setTheme('darktimer'));
    document.getElementById('lightbtnsp').addEventListener('click', () => setTheme('lighttimer'));

    document.getElementById('winterbtnsu').addEventListener('click', () => setTheme('wintertimer'));
    document.getElementById('springbtnsu').addEventListener('click', () => setTheme('springtimer'));
    document.getElementById('summerbtnsu').addEventListener('click', () => setTheme('summertimer'));
    document.getElementById('autumnbtnsu').addEventListener('click', () => setTheme('autumntimer'));
    document.getElementById('darkbtnsu').addEventListener('click', () => setTheme('darktimer'));
    document.getElementById('lightbtnsu').addEventListener('click', () => setTheme('lighttimer'));

    document.getElementById('winterbtnau').addEventListener('click', () => setTheme('wintertimer'));
    document.getElementById('springbtnau').addEventListener('click', () => setTheme('springtimer'));
    document.getElementById('summerbtnau').addEventListener('click', () => setTheme('summertimer'));
    document.getElementById('autumnbtnau').addEventListener('click', () => setTheme('autumntimer'));
    document.getElementById('darkbtnau').addEventListener('click', () => setTheme('darktimer'));
    document.getElementById('lightbtnau').addEventListener('click', () => setTheme('lighttimer'));

    document.getElementById('winterbtnd').addEventListener('click', () => setTheme('wintertimer'));
    document.getElementById('springbtnd').addEventListener('click', () => setTheme('springtimer'));
    document.getElementById('summerbtnd').addEventListener('click', () => setTheme('summertimer'));
    document.getElementById('autumnbtnd').addEventListener('click', () => setTheme('autumntimer'));
    document.getElementById('darkbtnd').addEventListener('click', () => setTheme('darktimer'));
    document.getElementById('lightbtnd').addEventListener('click', () => setTheme('lighttimer'));

    document.getElementById('winterbtnl').addEventListener('click', () => setTheme('wintertimer'));
    document.getElementById('springbtnl').addEventListener('click', () => setTheme('springtimer'));
    document.getElementById('summerbtnl').addEventListener('click', () => setTheme('summertimer'));
    document.getElementById('autumnbtnl').addEventListener('click', () => setTheme('autumntimer'));
    document.getElementById('darkbtnl').addEventListener('click', () => setTheme('darktimer'));
    document.getElementById('lightbtnl').addEventListener('click', () => setTheme('lighttimer'));
});

function setquiz(quiz) {
  // hide all theme divs
    document.querySelectorAll('.winterQuiz, .springQuiz, .summerQuiz, .autumnQuiz, .darkQuiz, .lightQuiz').forEach(div => {
        div.classList.add('hidden');
    });

  // show the active theme div
    if (quiz === 'winterQuiz') {
        document.querySelector('.winterQuiz').classList.remove('hidden');
    } else if (quiz === 'springQuiz') {
        document.querySelector('.springQuiz').classList.remove('hidden');
    } else if (quiz === 'summerQuiz') {
        document.querySelector('.summerQuiz').classList.remove('hidden');
    } else if (quiz === 'autumnQuiz') {
        document.querySelector('.autumnQuiz').classList.remove('hidden');
    } else if (quiz === 'darkQuiz') {
        document.querySelector('.darkQuiz').classList.remove('hidden');
    } else if (quiz === 'lightQuiz') {
        document.querySelector('.lightQuiz').classList.remove('hidden');
    }
}
// Set up event listeners after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // wire button clicks
    document.getElementById('quizmewi').addEventListener('click', () => setTheme('winterQuiz'));
    document.getElementById('quizmesp').addEventListener('click', () => setTheme('springQuiz'));
    document.getElementById('quizmesu').addEventListener('click', () => setTheme('summerQuiz'));
    document.getElementById('quizmeau').addEventListener('click', () => setTheme('autumnQuiz'));
    document.getElementById('quizmed').addEventListener('click', () => setTheme('darkQuiz'));
    document.getElementById('quizmel').addEventListener('click', () => setTheme('lightQuiz'));
});
