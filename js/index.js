const $show = document.querySelector('.show')
const $html = document.documentElement

const scrollHorizontally = (event) => {

	// Width of the slideshow
	const showW = $show.scrollWidth

	// Width & height of the viewport
	const viewportW = $html.clientWidth
	const viewportH = $html.clientHeight

	// Overhang on the right
	const diffW = showW - viewportW

	// Artificially inflate the height of the document
	$html.style.height = `${viewportH + diffW}px`


	// $show.style.left = `-${window.scrollY}px`
	$show.style.transform = `translateX(-${window.scrollY}px)`
}

// Event listeners
window.addEventListener('load', scrollHorizontally)
window.addEventListener('resize', scrollHorizontally)
window.addEventListener('scroll', scrollHorizontally)
