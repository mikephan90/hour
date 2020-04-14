import { useEffect, useState, useContext, useCallback } from 'react';
import yelp from '../api/yelp';
import { Context as LocationContext } from '../context/LocationContext';

export default () => {
	const { state: { currentLocation } } = useContext(LocationContext);
    const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
    
	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
                    term: searchTerm,
                    //location: 'columbus'
                    latitude: currentLocation.coords.latitude,
                    longitude: currentLocation.coords.longitude,
				},
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage('Something went wrong');
        }
    };

	useEffect(() => {
		searchApi('');
	}, [currentLocation]);

	return [searchApi, results, errorMessage];
};