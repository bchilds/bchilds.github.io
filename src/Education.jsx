import React from 'react'

const Education = () => {

	//expect no inputs
	//The sections below provide information about my relevant education.
	return (
		<div id="edu-container">
			<h2 className="sub-header">Education</h2>
			<div id="edu-content">
				<div id="edu-vanderbilt" className="edu-item">
					<p>I have a Bachelors of Engineering with a major in Biomedical Engineering and a minor in Psychology. 
					With a focus on imaging device design, I used MATLab and NI's LabView to do research in Dr. Bruce Damon's imaging lab 
					measuring blood oxygenation levels during and after muscle contraction, with an aim to 
					diagnosing vascular diseases non-invasively. I am a coauthor of the paper "Comparison of muscle BOLD responses to arterial occlusion at 3 and 7 Tesla",
					published in the journal <i>Magnetic Resonance in Medicine (MRM)</i></p>
					<a href="https://www.vanderbilt.edu" target="_blank"><img id="vanderbilt-logo" className="logo-external" src="https://news.vanderbilt.edu/files/vu06b.jpg" alt="Vanderbilt University Logo"/></a>
				</div>
				<hr/>
				<div id="edu-hackreactor" className="edu-item">
					<p>HackReactor is a three month javascript coding immersive. We learned many of the current major frameworks, 
					including React, AngularJS, Node.js/Express, and database technologies such as MySQL and MongoDB. 
					The applications I built during this time ranged from a Google Calendar common meeting time API to 
					an enterprise-level property and tenant management application. </p>
					<a href="https://www.hackreactor.com" target="_blank"><img id="hackreactor-logo" className="logo-external" src="http://hrhqdir.s3.amazonaws.com/brand-guide/HackReactor_RGBLogo-Gray-Blue.png" alt="HackReactor Logo"/></a>
				</div>
			</div>
		</div>
	)

}

//HR Dark background: http://hrhqdir.s3.amazonaws.com/brand-guide/HackReactor_RGBLogo-White-Blue.png
//HR Light Background: http://hrhqdir.s3.amazonaws.com/brand-guide/HackReactor_RGBLogo-Gray-Blue.png

export default Education