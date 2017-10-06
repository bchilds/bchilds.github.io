import React from 'react'

class Nav extends React.Component {

	//expects function to set App content, selectContent
	//expects string array of pageNames
	constructor(props) {
		super(props)

		this.navSelectContent = this.navSelectContent.bind(this)
	}

	navSelectContent(event) {
		this.props.selectContent(event.target.value)
	}

	render() {
		return(
			<div id="app-nav">
				{this.props.pageNames.map( (pageName) => {
					return(
						<button key={pageName} className="appNavButton" type="button" onClick={this.navSelectContent} value={pageName}>{pageName}</button>
					)
				})}
			</div>
		)
	}
}

export default Nav