import React, { useState } from 'react';
import dataSource from './dataSource';
import { useNavigate } from 'react-router-dom';


const EditDrumset = (props) => {
	let drumset = {
		name: '',
		price: '',
		type: '',
		brand: '',
		imageUrl: '',
	};
	let newDrumsetCreation = true;

	if (props.drumset) {
		drumset = props.drumset;
		newDrumsetCreation = false;
	}

	const [drumsetName, setDrumsetName] = useState(drumset.name || "");
	const [price, setPrice] = useState(drumset.price || "");
	const [type, setType] = useState(drumset.type || "");
	const [brand, setBrand] = useState(drumset.brand || "");
	const [image, setImage] = useState(drumset.imageUrl || "");

	const navigate = useNavigate();

	const updateName = (event) => {
		setDrumsetName(event.target.value);
	};
	const updatePrice = (event) => {
		setPrice(event.target.value);
	};
	const updateType = (event) => {
		setType(event.target.value);
	};
	const updateBrand = (event) => {
		setBrand(event.target.value);
	};
	const updateImage = (event) => {
		setImage(event.target.value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		console.log("submit");
		const editedDrumset = {
			drumsetId: drumset.drumsetId,
			name: drumsetName,
			price: price,
			type: type,
			brand: brand,
			image: image,
			tracks: [],
		};
		console.log(drumset);
		saveDrumset(editedDrumset);
	};

	const saveDrumset = async (drumset) => {
		let response;
		if (newDrumsetCreation)
			response = await dataSource.post('/drumsets', drumset);
		else
			response = await dataSource.put('/drumsets', drumset);
		console.log(response);
		console.log(response.data);
		props.onEditDrumset(navigate);
	};

	const handleCancle = () => {
		navigate("/")
	}



	return (
		<div className='container'>
			<form onSubmit={handleFormSubmit}>
				<h1>{newDrumsetCreation ? "Create New" : "Edit"}  Drumset</h1>
				<div className="form-group">
					<label htmlForfor="drumsetName">Drumset Name</label>
					<input type="text" className="form-control" id="drumsetName" placeholder="Drumset Name" value={drumsetName} onChange={updateName} />
					<label htmlForfor="drumsetPrice">Price</label>
					<input type="text" className="form-control" id="drumsetPrice" placeholder="Drumset Price" value={price} onChange={updatePrice} />
					<label htmlForfor="drumsetType">Type</label>
					<input type="text" className="form-control" id="drumsetType" placeholder="Drumset Type" value={type} onChange={updateType} />
					<label htmlForfor="drumsetBrand">Brand</label>
					<input type="text" className="form-control" id="drumsetBrand" placeholder="Drumset Brand" value={brand} onChange={updateBrand} />
					<label htmlForfor="drumsetImage">Image</label>
					<input type="text" className="form-control" id="drumsetImage" placeholder="Drumset Image" value={image} onChange={updateImage} />
				</div>
				<div style={{ margin: 10 }}>
					<button type="button" className="btn btn-secondary" onClick={handleCancle}>Cancel</button>
					<button type="submit" className="btn btn-warning">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default EditDrumset;