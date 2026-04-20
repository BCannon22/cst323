import React, { useEffect, useState } from 'react';
import Card from './Card';
import './App.css';
import SearchForm from './SearchForm';
import dataSource from './dataSource';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SearchDrumset from './SearchDrumset';
import NavBar from './NavBar';
import EditDrumset from './EditDrumset';
import OneDrumset from './OneDrumset';


const App = (props) => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [drumsetList, setDrumsetList] = useState([]);
	const [currentlySelectedDrumsetId, setCurrentlySelectedDrumsetId] = useState(0);

	let refresh = false;

	//Setup initialization callback
	useEffect(() => {
		//update the drumset list
		loadDrumsets();
	}, [refresh]
	);

	const loadDrumsets = async () => {
		const response = await dataSource.get('/drumsets');

		setDrumsetList(response.data);
	};


	const updateSearchResults = async (phrase) => {
		console.log('phrase is ' + phrase);
		setSearchPhrase(phrase);
	};

	console.log('drumsetList', drumsetList);
	const renderedList = drumsetList.filter((drumset) => {
		if (drumset.type.toLowerCase().includes(searchPhrase.toLocaleLowerCase()) || searchPhrase === '') { return true; }
		return false;
	});

	console.log("renderedList: ", renderedList);


	const updateSingleDrumset = (id, navigate, uri) => {
		console.log('Update Single Drumset = ', id);
		console.log('Update Single Drumset = ', navigate);
		var indexNumber = 0;
		for (var i = 0; i < drumsetList.length; i++) {
			if (drumsetList[i].id === id)
				indexNumber = i;
		}

		setCurrentlySelectedDrumsetId(indexNumber);
		let path = uri + indexNumber;
		console.log('path ', path);
		navigate(path);
	};



	const onEditDrumset = (navigate) => {
		loadDrumsets();
		navigate("/");
	};

	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route exact path='/' element={
					<SearchDrumset
						updateSearchResults={updateSearchResults}
						drumsetList={renderedList}
						updateSingleDrumset={updateSingleDrumset}
					/>
				}
				/>
				<Route exact path='/new' element={<EditDrumset onEditDrumset={onEditDrumset} />} />
				<Route exact path='/edit/:drumsetId' element={<EditDrumset onEditDrumset={onEditDrumset} drumset={drumsetList[currentlySelectedDrumsetId]} />} />
				<Route exact path='/show/:drumsetId' element={<OneDrumset drumset={drumsetList[currentlySelectedDrumsetId]} />} />
			</Routes>
		</BrowserRouter>

	);
};

export default App;
