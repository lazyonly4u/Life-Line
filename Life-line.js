
function setTheme(theme) {
  // hide all theme divs
    document.querySelectorAll('.winter, .spring, .summer, .autumn, .dark, .light').forEach(div => {
        div.classList.add('hidden');
    });

  // show the active theme div
    if (theme === 'winter') {
        document.querySelector('.winter').classList.remove('hidden');
    } else if (theme === 'spring') {
        document.querySelector('.spring').classList.remove('hidden');
    } else if (theme === 'summer') {
        document.querySelector('.summer').classList.remove('hidden');
    } else if (theme === 'autumn') {
        document.querySelector('.autumn').classList.remove('hidden');
    } else if (theme === 'dark') {
        document.querySelector('.dark').classList.remove('hidden');
    } else if (theme === 'light') {
        document.querySelector('.light').classList.remove('hidden');
    }
}

// Initialize default theme
setTheme('dark');

// Set up event listeners after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // wire button clicks
    document.getElementById('winterbtnwi').addEventListener('click', () => setTheme('winter'));
    document.getElementById('springbtnwi').addEventListener('click', () => setTheme('spring'));
    document.getElementById('summerbtnwi').addEventListener('click', () => setTheme('summer'));
    document.getElementById('autumnbtnwi').addEventListener('click', () => setTheme('autumn'));
    document.getElementById('darkbtnwi').addEventListener('click', () => setTheme('dark'));
    document.getElementById('lightbtnwi').addEventListener('click', () => setTheme('light'));

    document.getElementById('winterbtnsp').addEventListener('click', () => setTheme('winter'));
    document.getElementById('springbtnsp').addEventListener('click', () => setTheme('spring'));
    document.getElementById('summerbtnsp').addEventListener('click', () => setTheme('summer'));
    document.getElementById('autumnbtnsp').addEventListener('click', () => setTheme('autumn'));
    document.getElementById('darkbtnsp').addEventListener('click', () => setTheme('dark'));
    document.getElementById('lightbtnsp').addEventListener('click', () => setTheme('light'));

    document.getElementById('winterbtnsu').addEventListener('click', () => setTheme('winter'));
    document.getElementById('springbtnsu').addEventListener('click', () => setTheme('spring'));
    document.getElementById('summerbtnsu').addEventListener('click', () => setTheme('summer'));
    document.getElementById('autumnbtnsu').addEventListener('click', () => setTheme('autumn'));
    document.getElementById('darkbtnsu').addEventListener('click', () => setTheme('dark'));
    document.getElementById('lightbtnsu').addEventListener('click', () => setTheme('light'));

    document.getElementById('winterbtnau').addEventListener('click', () => setTheme('winter'));
    document.getElementById('springbtnau').addEventListener('click', () => setTheme('spring'));
    document.getElementById('summerbtnau').addEventListener('click', () => setTheme('summer'));
    document.getElementById('autumnbtnau').addEventListener('click', () => setTheme('autumn'));
    document.getElementById('darkbtnau').addEventListener('click', () => setTheme('dark'));
    document.getElementById('lightbtnau').addEventListener('click', () => setTheme('light'));

    document.getElementById('winterbtnd').addEventListener('click', () => setTheme('winter'));
    document.getElementById('springbtnd').addEventListener('click', () => setTheme('spring'));
    document.getElementById('summerbtnd').addEventListener('click', () => setTheme('summer'));
    document.getElementById('autumnbtnd').addEventListener('click', () => setTheme('autumn'));
    document.getElementById('darkbtnd').addEventListener('click', () => setTheme('dark'));
    document.getElementById('lightbtnd').addEventListener('click', () => setTheme('light'));

    document.getElementById('winterbtnl').addEventListener('click', () => setTheme('winter'));
    document.getElementById('springbtnl').addEventListener('click', () => setTheme('spring'));
    document.getElementById('summerbtnl').addEventListener('click', () => setTheme('summer'));
    document.getElementById('autumnbtnl').addEventListener('click', () => setTheme('autumn'));
    document.getElementById('darkbtnl').addEventListener('click', () => setTheme('dark'));
    document.getElementById('lightbtnl').addEventListener('click', () => setTheme('light'));
});

