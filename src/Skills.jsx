//start static

import React from 'react'


const Skills = () => {

	return (
		<div id="skills-container">
			<h2 className="sub-header">Skills</h2>
			<div id="skills-content">
				<div className="skillset">
					<h3>Languages</h3>
					<ul>
						<li>Javascript</li>
						<li>HTML5/CSS3</li>
						<li>Java</li>
						<li>MATLab</li>
						<li>C# (coming soon!)</li>
					</ul>
				</div>
				<div className="skillset">
					<h3>Libraries and Frameworks</h3>
					<ul>
						<li>Node.js</li>
						<li>Express</li>
						<li>Koa</li>
						<li>React.js</li>
						<li>AngularJS</li>
						<li>Jest</li>
						<li>AngularJS</li>
						<li>Passport</li>
					</ul>
				</div>
				<div className="skillset">
					<h3>Databases</h3>
					<ul>
						<li>PostgreSQL</li>
						<li>MySQL</li>
						<li>MongoDB/Mongoose</li>
					</ul>
				</div>
				<div className="skillset">
				<h3>APIs</h3>
					<ul>
						<li>Google Maps</li>
						<li>Amazon Web Services S3 Cloud Storage</li>
					</ul>
				</div>
				<div className="skillset">
					<h3>Soft Skills</h3>
					<ul>
						<li>Project Management</li>
						<li>JIRA scrum</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Skills