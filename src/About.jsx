import React from 'react'

class About extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			//lets user select a section: bio, hobbies, projects
			selected: 'bio',
		}
		this.setBio = this.setBio.bind(this)
		this.setHobbies = this.setHobbies.bind(this)
		this.setProjects = this.setProjects.bind(this)
	}

	setBio() {
		this.setState({selected: 'bio'})
	}

	setHobbies() {
		this.setState({selected: 'hobbies'})
	}

	setProjects() {
		this.setState({selected: 'projects'})
	}

	bioSection() {
		return(
			<p>I am a full stack software engineer with a love for problem solving and clean, 
			concise design. Several years of experience working with tech startups in Austin 
			has given me exposure to a full spectrum of applications and technologies, from 
			mobile applications to enterprise software. With a focus on normalized databases 
			and logical server design, I love spending time to make sure my code is as optimized
			as possible and always strive to produce my best work.
			</p>
		)
	}

	hobbiesSection() {
		return(
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida neque 
			nec turpis maximus lobortis. Cras massa turpis, sagittis eget odio sit amet, 
			faucibus bibendum nisl. Praesent quis nulla nisi. Maecenas odio felis, tempus 
			eu odio quis, interdum porttitor leo. Morbi eleifend quis est quis bibendum. 
			Aliquam at augue sodales, sollicitudin lectus at, mollis dolor. Nunc efficitur 
			a neque id tempor. Nam ac arcu augue. Phasellus sodales ullamcorper lorem nec 
			dignissim. Suspendisse pretium, sem ac commodo eleifend, nisl sapien pretium 
			leo, id tincidunt velit est eget justo. Phasellus vestibulum, odio eget auctor 
			elementum, mi ipsum semper mauris, a tincidunt diam ex vitae urna. 
			</p>
		)
	}

	projectsSection() {
		return(
			<div>
				<div className="project">
					<p>
					Integer vel auctor nunc. Aliquam nec eros non augue efficitur tristique. 
					Duis malesuada vitae libero vitae malesuada. Aliquam erat volutpat. Sed 
					malesuada sem imperdiet mi suscipit mattis. 
					</p>
					<img src="#"/>
				</div>
				<div className="project">
					<p>
					Aenean id mauris egestas, 
					imperdiet velit et, scelerisque orci. Mauris porta odio purus, sit amet 
					auctor odio malesuada at. Quisque luctus enim at feugiat imperdiet. Nulla 
					eget molestie nisi. Morbi ut ligula dignissim, aliquam est non, bibendum 
					augue. 
					</p>
					<img src="#"/>
				</div>
				<div className="project">
					<p>
					Donec imperdiet viverra arcu, eu fringilla tortor dignissim id. 
					Proin luctus tellus lectus, in sollicitudin ante maximus interdum. Aliquam 
					ligula tellus, faucibus at leo vitae, tincidunt porta libero.
					</p>
					<img src="#"/>
				</div>
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
			case 'projects':
				return this.projectsSection()
				break
		}
	}

	render() {
		return (
			<div id="aboutSection">
				<div id="aboutNav">
					<button onClick={this.setBio}>Bio</button>
					<button onClick={this.setHobbies}>Hobbies</button>
					<button onClick={this.setProjects}>Projects</button>
				</div>
				{this.renderSection()}
			</div>
		)
	}
}

export default About