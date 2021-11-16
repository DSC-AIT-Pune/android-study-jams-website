import React, {Component} from 'react';
import Typed from "typed.js";

class TypedJs extends Component {
	componentDidMount() {
		const { strings, typeSpeed, backSpeed, startDelay, backDelay } = this.props;
		// You can pass other options here, such as typing speed, back speed, etc.
		const options = {
			strings: strings,
			startDelay: startDelay,
			backDelay: backDelay,
			typeSpeed: typeSpeed,
			backSpeed: backSpeed,
			smartBackspace: true,
		};
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options);
	}

	render() {
		return (
			<div className="welcome-text-container" style={{position: "absolute", padding: "19.885rem 35.52rem"}}>
				<div className="welcome-text" style={{fontSize: "1.25rem", color: "white"}}>
					<span
						style={{ whiteSpace: 'pre' }}
						ref={(el) => this.el = el}
					/>
				</div>
			</div>
		);
	}
}

export default TypedJs;
