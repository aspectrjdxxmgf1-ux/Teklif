hljs.highlightAll();

const content = document.querySelector('.content');
const gradient = document.querySelector('#gradient');
const cardWrapper = document.querySelector('.card-wrapper');
const audio = document.querySelector('audio');

audio.volume = 0.8;
audio.loop = true;

/* CONFETTI */
class Confetti {
  constructor(target) {
    this.target = target;
    this.container = document.createElement('div');
    this.container.className = 'confetti-container';
    this.target.appendChild(this.container);
  }

  start() {
    for (let i = 0; i < 80; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + '%';
      c.style.background = ['#fce18a','#ff726d','#b48def','#f4306d'][Math.floor(Math.random()*4)];
      c.style.animationDuration = 1 + Math.random() * 2 + 's';
      this.container.appendChild(c);
      setTimeout(() => c.remove(), 3000);
    }
  }

  stop() {
    this.container.innerHTML = '';
  }
}

const confetti = new Confetti(content);

cardWrapper.addEventListener('click', () => {
  cardWrapper.classList.toggle('active');

  if (cardWrapper.classList.contains('active')) {
    audio.play();
    confetti.start();
    gradient.style.opacity = 1;
  } else {
    audio.pause();
    confetti.stop();
    gradient.style.opacity = 0;
  }
});

/* GRADIENT */
new Granim({
  element: '#gradient',
  direction: 'radial',
  states: {
    "default-state": {
      gradients: [
        ['#ff8faf', '#ffe5ed'],
        ['#f38fff', '#ffe5ed'],
        ['#ff8f8f', '#ffe5ed']
      ]
    }
  }
});