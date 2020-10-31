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





			