import React from 'react'

class About extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			//lets user select a section: bio, hobbies
			selected: 'bio',
			dark: true,
		}
		this.setBio = this.setBio.bind(this)
		this.setHobbies = this.setHobbies.bind(this)
	}

	setBio() {
		this.setState({selected: 'bio'})
	}

	setHobbies() {
		this.setState({selected: 'hobbies'})
	}

	bioSection() {
		return(
			<div className="about-section">
				<p>I am a full stack software engineer with a love for problem solving and clean, 
				concise design. Several years of experience working with tech startups in Austin 
				has given me exposure to a full spectrum of applications and technologies, from 
				mobile applications to enterprise software. With a focus on normalized databases 
				and logical server design, I love spending time to make sure my code is as optimized
				as possible and always strive to produce my best work.
				</p>
			</div>
		)
	}

	hobbiesSection() {
		return(
			<div className="about-section" id="hobbies-section">
				<p>
				I am an active person with a diverse array of hobbies and interests. Twice a week 
				I go bouldering at a local bouldering gym. I am a game master for two D&D campaigns 
				and love to build complex puzzles and unique dungeons. I am currently in the top 50 
				players of Shellshock Live, an online tank game played by upwards of 45,000 people. 
				I have a passion for target-based sports like bowling, archery, throwing knives and darts.
				</p>
				<p>
				Becoming sedentary is a fate I do my best to avoid. From drawing to powerlifting to board games to 
				fantastical sci-fi books, very rarely do I just sit on the couch and passively watch television. 
				I do my best to stay active and engaged, stay up to date with current events, news and politics, 
				and always keep learning and growing with the world around me. 
				</p>
			</div>
		)
	}

	renderSection() {
		switch(this.state.selected) {
			case 'bio':
				return this.bioSection()
				break
			case 'hobbies':
				return this.hobbiesSection()
				break
		}
	}

	render() {
		return (
			<div id="about-container">
				<h2 className="sub-header">About Me</h2>
				<div id="about-content">
					<div id="about-inner">
					<div id="about-nav">
						<button className={(this.state.selected === 'bio' ? 'about-dark' : '')} onClick={this.setBio}>Bio</button>
						<button className={(this.state.selected === 'hobbies' ? 'about-dark' : '')} onClick={this.setHobbies}>Hobbies</button>
					</div>
					{this.renderSection()}
					</div>
					<img src="https://s3.amazonaws.com/personal-github-page/Formal.jpg" className="bio-pic" id="about-pic" alt="Ben Childs portrait"/>
				</div>
			</div>
		)
	}
}

export default About