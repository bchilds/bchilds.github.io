import React from 'react'
// import ContentContainer from './Containers/ContentContainer.jsx'
import Welcome from '../Welcome.jsx'
import Nav from '../Nav.jsx'
import About from '../About.jsx'
import Education from '../Education.jsx'
import Skills from '../Skills.jsx'
import Experience from '../Experience.jsx'
import Contact from '../Contact.jsx'

class App extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			selectedContent: 'Welcome'
		}
		this.pageNames = ['About', 'Education', 'Skills', 'Experience', 'Contact']

		this.returnContent = this.returnContent.bind(this)
		this.selectContent = this.selectContent.bind(this)
	}

	selectContent(sectionName) {
		this.setState({selectedContent: sectionName})
	}

	returnContent() {
		switch(this.state.selectedContent){
							case 'Welcome':
								return (<Welcome/>)
								break
							case 'About': 
								return(<About/>)
								break
							case 'Education':
								return(<Education/>)
								break
							case 'Skills':
								return(<Skills/>)
								break
							case 'Experience':
								return(<Experience/>)
								break
							case 'Contact':
								return(<Contact/>)
								break
							default:
								return(<Welcome/>)
								break
		}
	}

	render() {
		return (
			<div>
				<Nav selectContent={this.selectContent} pageNames={this.pageNames}/>
				<div id="app-content">
					{ this.returnContent() }
				</div>
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