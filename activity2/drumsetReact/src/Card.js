
import React from "react";

const Card = (props) => {
	const handleButtonClick = (event, uri) => {
		console.log('ID clicked is ' + props.drumsetId, 'uri:', uri);
		props.onClick(props.drumsetId, uri);
	}

	return (

		<div className="card" style={{ width: '18rem' }}>
			<img src={props.imgURL} alt={`${props.drumsetName} drumset cover`} />
			<div className="card-body">
				<h5 className="card-title">{props.drumsetName}</h5>
				<p className="card-text">
					{props.drumsetType} - {props.drumsetBrand} - ${props.drumsetPrice}
				</p>

				<button style={{ margin: 5 }} onClick={() => handleButtonClick(props.drumsetId, '/show/')}
					className="btn btn-primary">{props.buttonText}</button>
				<button onClick={() => handleButtonClick(props.drumsetId, '/edit/')} className="btn btn-secondary">
					Edit</button>

			</div>
		</div>
	)
}

export default Card;