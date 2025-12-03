
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


document.addEventListener('DOMContentLoaded', () => {
  const quizMap = [
    ['.quizmewi', '.winterQuiz', '.wintertimer'],
    ['.quizmesp', '.springQuiz', '.springtimer'],
    ['.quizmesu', '.summerQuiz', '.summertimer'],
    ['.quizmeau', '.autumnQuiz', '.autumntimer'],
    ['.quizmed', '.darkQuiz', '.darktimer'],
    ['.quizmel', '.lightQuiz', '.lighttimer']
  ];

  quizMap.forEach(([btnSel, quizSel, timerSel]) => {
    const btn = document.querySelector(btnSel);
    const quiz = document.querySelector(quizSel);
    const timer = document.querySelector(timerSel);

    if (btn && quiz && timer) {
      btn.addEventListener('click', () => {
        // hide all quizzes
        document.querySelectorAll('.winterQuiz, .springQuiz, .summerQuiz, .autumnQuiz, .darkQuiz, .lightQuiz')
          .forEach(q => q.classList.add('hidden'));
        // show this quiz, hide this timer
        quiz.classList.remove('hidden');
        timer.classList.add('hidden');
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const deMap = [
        ['.winterbtnde','.winterDepression','.wintertimer'],
        ['.springbtnde','.springDepression','.springtimer'],
        ['.summerbtnde','.summerDepression','.summertimer'],
        ['.autumnbtnde','.autumnDepression','.autumntimer'],
        ['.darkbtnde','.darkDepression','.darktimer'],
        ['.lightbtnde','.lightDepression','.lighttimer'],
  ];

  deMap.forEach(([btnSel, depressionSel, timerSel]) => {
    const btn = document.querySelector(btnSel);
    const Depression = document.querySelector(depressionSel);
    const timer = document.querySelector(timerSel);

    if (btn && Depression && timer) {
      btn.addEventListener('click', () => {
        // hide all quizzes
        document.querySelectorAll('.winterDepression, .springDepression, .summerDepression, .autumnDepression, .darkDepression, .lightDepression')
          .forEach(q => q.classList.add('hidden'));
        // show this quiz, hide this timer
        Depression.classList.remove('hidden');
        timer.classList.add('hidden');
      });
    }
  });

});

document.addEventListener('DOMContentLoaded', () => {
    const anMap = [
        ['.winterbtnan','.winterAnxiety','.wintertimer'],
        ['.springbtnan','.springAnxiety','.springtimer'],
        ['.summerbtnan','.summerAnxiety','.summertimer'],
        ['.autumnbtnan','.autumnAnxiety','.autumntimer'],
        ['.darkbtnan','.darkAnxiety','.darktimer'],
        ['.lightbtnan','.lightAnxiety','.lighttimer'],
    ];
    anMap.forEach(([btnSel, anxietySel, timerSel]) => {
    const btn = document.querySelector(btnSel);
    const Anxiety = document.querySelector(anxietySel);
    const timer = document.querySelector(timerSel);
    if (btn && Anxiety && timer) {
      btn.addEventListener('click', () => {
        // hide all quizzes
        document.querySelectorAll('.winterAnxiety, .springAnxiety, .summerAnxiety, .autumnAnxiety, .darkAnxiety, .lightAnxiety')
          .forEach(an => an.classList.add('hidden'));
        // show this quiz, hide this timer
        Anxiety.classList.remove('hidden');
        timer.classList.add('hidden');
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const ptMap = [
        ['.winterbtnpt','.winterPTSD','.wintertimer'],
        ['.springbtnpt','.springPTSD','.springtimer'],
        ['.summerbtnpt','.summerPTSD','.summertimer'],
        ['.autumnbtnpt','.autumnPTSD','.autumntimer'],
        ['.darkbtnpt','.darkPTSD','.darktimer'],
        ['.lightbtnpt','.lightPTSD','.lighttimer'],
    ];
    ptMap.forEach(([btnSel, ptsdsel, timerSel]) => {
    const btn = document.querySelector(btnSel);
    const PTSD = document.querySelector(ptsdsel);
    const timer = document.querySelector(timerSel);
    if (btn && PTSD && timer) {
      btn.addEventListener('click', () => {
        // hide all quizzes
        document.querySelectorAll('.winterPTSD, .springPTSD, .summerPTSD, .autumnPTSD, .darkPTSD, .lightPTSD')
          .forEach(pt => pt.classList.add('hidden'));
        // show this quiz, hide this timer
        PTSD.classList.remove('hidden');
        timer.classList.add('hidden');
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const edMap = [
        ['.winterbtned','.winterED','.wintertimer'],
        ['.springbtned','.springED','.springtimer'],
        ['.summerbtned','.summerED','.summertimer'],
        ['.autumnbtned','.autumnED','.autumntimer'],
        ['.darkbtned','.darkED','.darktimer'],
        ['.lightbtned','.lightED','.lighttimer'],
    ];
    edMap.forEach(([btnSel, edsel, timerSel]) => {
    const btn = document.querySelector(btnSel);
    const ED = document.querySelector(edsel);
    const timer = document.querySelector(timerSel);
    if (btn && ED && timer) {
      btn.addEventListener('click', () => {
        // hide all quizzes
        document.querySelectorAll('.winterED, .springED, .summerED, .autumnED, .darkED, .lightED')
          .forEach(ed => ed.classList.add('hidden'));
        // show this quiz, hide this timer
        ED.classList.remove('hidden');
        timer.classList.add('hidden');
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const adMap = [
        ['.winterbtnad','.winterADHD','.wintertimer'],
        ['.springbtnad','.springADHD','.springtimer'],
        ['.summerbtnad','.summerADHD','.summertimer'],
        ['.autumnbtnad','.autumnADHD','.autumntimer'],
        ['.darkbtnad','.darkADHD','.darktimer'],
        ['.lightbtnad','.lightADHD','.lighttimer'],
    ];
    adMap.forEach(([btnSel, adhdsel, timerSel]) => {
    const btn = document.querySelector(btnSel);
    const ADHD =  document.querySelector(adhdsel);
    const timer = document.querySelector(timerSel);
    if (btn && ADHD && timer) {
      btn.addEventListener('click', () => {
        // hide all quizzes
        document.querySelectorAll('.winterADHD, .springADHD, .summerADHD, .autumnADHD, .darkADHD, .lightADHD')
          .forEach(ad => ad.classList.add('hidden'));
        // show this quiz, hide this timer
        ADHD.classList.remove('hidden');
        timer.classList.add('hidden');
        
      });
    }
  });
});