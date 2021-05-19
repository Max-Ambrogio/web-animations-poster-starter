console.log('Hello World from main.js!');

gsap.from('.background', { duration: 2, y: '-=5%' });
gsap.from('.sand-back', { duration: 3, y: '+=2%' });
gsap.from('.sand-front', { duration: 3, y: '+=5%' });
gsap.from('.character', { duration: 3, y: '+=8%' });

gsap.from('.text', { delay: 1, duration: 2, opacity: 0, y: '-=5%' });
