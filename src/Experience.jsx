import React from 'react'
import Modal from './Containers/Modal.jsx'

class Experience extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			openModal: false,
			selectedContent: '',
		}

		this.toggleModal = this.toggleModal.bind(this)
		this.modalContent = this.modalContent.bind(this)
	}

	toggleModal(event) {
		this.setState({
			openModal: !this.state.openModal,
			selectedContent: event.target.id || '',
		})
	}

	modalContent() {
		if(this.state.selectedContent === 'endao-exp'){
			return(
				<div className="modal-content">
					<h2>Endao PATH</h2>
					<ul className="modal-list">
						<h3>Responsibilities</h3>
						<li>Managed application design and feature development for multiple legacy clients</li>
						<li>Implemented custom-tailored Contact Management System and Workflow Management software in client businesses</li>
						<li>Managed Amazon Web Services account and application database backups</li>
					</ul>
				</div>	
			)
		} else if(this.state.selectedContent === 'carestarter-exp'){
			return(
				<div className="modal-content">
					<h2>CareStarter</h2>
					<ul className="modal-list">
						<h3>Achievements</h3>
						<li>Promoted to principal software engineer and designer</li>
						<li>Assisted CEO in cultivation of company branding, pitch to investors, raising $150,000 in funding for first angel round</li>
						<h3>Responsibilities</h3>
						<li>Lead outside development teams to build multiple features</li>
						<li>Drafted design mockups using Balsamiq, Adobe Illustrator</li>
						<li>Managed coordination and application testing through JIRA</li>
					</ul>
				</div>	
			)
		} else if(this.state.selectedContent === 'vuiis-exp'){
			return(
				<div className="modal-content">
					<h2>Vanderbilt University Institute of Imaging Science</h2>
					<ul className="modal-list">
						<h3>Responsibilities</h3>
						<li>Wrote MATLab program to analyze Blood Oxygen Level Dependent (BOLD) response in 7T MRI images</li>
						<li>Designed project's primary data collection program, a multifunctional LabView 
						program with dynamic audio/visual interface to measure muscle force</li>
						<h3>Publications</h3>
						<li>Towse, T.F., Childs, B.T., Sabin, S.A., Bush, E.C., Elder, C.P., Damon, B.M. (2015) “Comparison of muscle BOLD responses to arterial occlusion at 3 and 7 Tesla” <i>Magn. Reson. Med.</i> 5:1522-2594</li>
					</ul>
				</div>	
			)
		}
	}

	render(){
		return (
			<div>
				<h2 className="sub-header">Experience</h2>
				<div id="experience-section">
					<img id="endao-exp" className="logo" src="https://www.patherp.com/wp-content/uploads/PATHerp-Logo-Final.png" alt="Endao Logo" onClick={this.toggleModal}/>
					<img id="carestarter-exp" className="logo" src="http://42fb55ddca2de660bb78-f8222489624d5fd05bf955868005c797.r75.cf2.rackcdn.com/d4eea2fec0894a649e38b773fae6a185.jpg" alt="CareStarter Logo" onClick={this.toggleModal}/>
					<img id="vuiis-exp" className="logo" src="http://www.vuiis.vanderbilt.edu/~newtonat/Allen_Newton/VUIIS_General_Scheduling_files/VUIISlogoForLaptop.png" alt="Vanderbilt University Institute of Imaging Science Logo" onClick={this.toggleModal}/>
					<br/>
					<Modal show={this.state.openModal} onClose={this.toggleModal}>
						{this.modalContent()}
					</Modal>
				</div>
				<h2 className="sub-header">Projects</h2>
				<div id="projects-section">
					<div>
						<div className="project">
							<h3>Rentopia</h3>
							<a href="http://www.myrentopia.com" target="_blank">www.myrentopia.com</a>
							<p>Manage properties and tenants as a landlord, or pay rent and share bills with housemates as a tenant.</p>
							<ul>
								<li>Architected Node.js/KOA server with PostgreSQL database</li>
								<li>Integrated multi-factor authentication with Google Authenticator</li>
								<li>Designed interactive property map using Google Maps API</li>
								<li>Deployed application to Amazon Web Services (AWS) EC2 instance</li>
							</ul>
							<a href="http://www.myrentopia.com" target="_blank">
								<img className="logo" src="https://s3.amazonaws.com/personal-github-page/Rentopia_Logo.png" alt="Rentopia"/>
							</a>
						</div>
						<div className="project">
							<h3>Concreet Calendar</h3>
							<a href="http://www.concreet.date" target="_blank">www.concreet.date</a>
							<p>Authentication with Google allows for meeting scheduling during only empty time slots.</p>
							<ul>
								<li>Architected server and database using Node.js/Express and MongoDB/Mongoose</li>
								<li>Integrated OAuth login with Google account using Node.js, Express and Passport</li>
								<li>Deployed application on DigitalOcean</li>
							</ul>
							<a href="http://www.concreet.date" target="_blank">
								<img className="logo" src="https://s3.amazonaws.com/personal-github-page/Concreet_Logo.png" alt="Concreet Calendar"/>
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Experience