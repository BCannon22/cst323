import React from 'react';
import SearchForm from './SearchForm';
import DrumsetList from './DrumsetList';

const SearchDrumset = (props) => {
	console.log('props with update single drumset', props);
	return (
		<div className='container'>
			<SearchForm onSubmit={props.updateSearchResults} />
			<DrumsetList drumsetList={props.drumsetList} onClick={props.updateSingleDrumset} />
		</div>
	);
};

export default SearchDrumset;