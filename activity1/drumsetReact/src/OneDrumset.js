import React from 'react';
import { useNavigate } from "react-router-dom";

const OneDrumset = (props) => {
	const navigate = useNavigate();
	const handleEditClick = () => {
		navigate(`/edit/${props.drumset.id}`);
	};
	return (
		<div className='container'>
			<h2>Drumset Details for {props.drumset.name}</h2>
			<div className='row'>
				<div className='col col-sm-3'>
					<div className='card'>
						<img src={props.drumset.imageUrl} className='card-img-top' alt={props.drumset.name} />
						<div className='card-body'>
							<h5 className='card-title'>{props.drumset.name}</h5>
							<p className='card-text'>{props.drumset.type}</p>
							<div className='list-group'>
								<li>
									Show the drumset's hardware here
								</li>
							</div>
							<button onClick={handleEditClick} className="btn btn-primary">Edit</button>
						</div>
					</div>
				</div>
				<div className='col col-sm-9'>
					<div className='card'>
						<p>Show the description of the drumset here</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OneDrumset;