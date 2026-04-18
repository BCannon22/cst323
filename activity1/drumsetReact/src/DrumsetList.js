import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const DrumsetList = (props) => {

	const handleSelectionOne = (drumsetId, uri) => {
		console.log('Selected ID is ' + drumsetId);
		props.onClick(drumsetId, navigator, uri);
	};

	console.log('props drumsetList', props);
	const navigator = useNavigate();
	const drumsets = props.drumsetList.map((drumset) => {
		return (
			<Card
				key={drumset.id}
				drumsetId={drumset.drumsetId}
				drumsetName={drumset.name}
				drumsetPrice={drumset.price}
				drumsetType={drumset.type}
				drumsetBrand={drumset.brand}
				buttonText='OK'
				imgURL={drumset.imageUrl}
				onClick={handleSelectionOne}
			/>
		);
	});
	return <div className='container'>{drumsets}</div>
};

export default DrumsetList;