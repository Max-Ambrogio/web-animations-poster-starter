console.log('Hello World from main.js!');

gsap.from('.background', { duration: 2, y: '-=5%' });
gsap.from('.character', { duration: 3, y: '+=8%' });

gsap.from('.text-1', { delay: 1, duration: 2, opacity: 0, y: '-=5%' });
gsap.from('.text-2', { delay: 2, duration: 2, opacity: 0, y: '-=5%' });
gsap.from('.logo', { delay: 3, duration: 2, opacity: 0, y: '-=5%' });

/*
ideas for pushing it further
	make the stars separate
	make the letters in JOURNEY separate, and the should start 
	close together at first, and spread out further
	as they come in... i think ALIEN did this...
	the glow behind the mountain could pulse/flicker/grow and shrink
	the mountain itself could be another layer.
	there is no limit on how cool this could be!!!!!!!!
*/
