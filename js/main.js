+function() {
	
	const firstSectionBodyHeight = document.querySelector('.accordion__section .accordion__body > *').clientHeight
	document.querySelector('.accordion__section .accordion__body').style.maxHeight = firstSectionBodyHeight + 'px' 
	const accordionHeader = document.querySelectorAll(`.accordion__header`);

	accordionHeader.forEach(el =>{
 			 el.addEventListener(`click`, () => {

    			accordionHeader.forEach(item => {
      			item.style.cssText = `color: black`;
   				 })
  
   		 el.style.cssText = `color: red`;

  	})
  })



	document.querySelectorAll('.accordion__section').forEach(function(section) {
		section.addEventListener('click', function(e) {
			
			document.querySelectorAll('.accordion__section').forEach(function(section) {
				section.querySelector('.accordion__body').style.maxHeight = '0px'		
			})
		
			const accordionSection = e.target.closest('.accordion__section')
			const insideElHeight = accordionSection.querySelector('.accordion__body > *').clientHeight
			accordionSection.querySelector('.accordion__body').style.maxHeight = insideElHeight + 'px'

		})

	})
  
}()



+function () {

	document.querySelector('.tab__panel').classList.add('active')
	document.querySelector('.tab__title').classList.add('active')
	
	function selectPanel(e) {
		const target = e.target.dataset.target
		document.querySelectorAll('.tab__title, .tab__panel').forEach(el => el.classList.remove('active'))	
		e.target.classList.add('active')
		document.querySelector('.' + target).classList.add('active')
	}

	document.querySelectorAll('.tab__title').forEach(el => {
		el.addEventListener('click', selectPanel)
	})

}()


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


document.body.onload = function() {
	
	setTimeout(function() {
		const preloader = document.getElementById('page-preloader');
		if ( !preloader.classList.contains('preloader_done') )
		{
			preloader.classList.add('preloader_done')
		}
	}, 1000);
}


const backToTopButton = document.querySelector('.back-to-top-btn');

window.addEventListener('scroll', scrollFunction);
function scrollFunction() {
	if(window.pageYOffset > 300) {
		 if(!backToTopButton.classList.contains('btnEntrance')) {
		 	backToTopButton.classList.remove("btnExit");
		 	backToTopButton.classList.add("btnEntrance");
			backToTopButton.style.display = "block";
		 }
	} else {
	    if(backToTopButton.classList.contains('btnEntrance')) {
	    	backToTopButton.classList.remove("btnEntrance");
	    	backToTopButton.classList.add("btnExit");
	    	setTimeout(function() {
	    		backToTopButton.style.display = "none";
	    	}, 250);
	    }	
	}
} 	

backToTopButton.addEventListener('click', smoothScrollBackToTop);	

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

const menuBtn = document.querySelector('.burger');
const menuCross = document.querySelector('.menu-btn');
const mmenu = document.querySelector('.menu');

menuBtn.addEventListener("click", function() {
	menuCross.classList.toggle("menu-btn-active");
	mmenu.classList.toggle('menu-active');
});