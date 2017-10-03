import React from 'react'
import Welcome from './Welcome.jsx'
// import Nav from './Nav.jsx'
import About from './About.jsx'
// import Education from './Education.jsx'
// import Skills from './Skills.jsx'
// import Experience from './Experience.jsx'
// import Applications from './Applications.jsx'
// import Contact from './Contact.jsx'

class App extends React.Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div>
				<Welcome/>
			  <About/>
			</div>
		)
	}
}

export default App

			// <Nav></Nav>
			// <Education></Education>
			// <Skills></Skills>
			// <Experience></Experience>
			// <Applications></Applications>
			// <Contact></Contact>