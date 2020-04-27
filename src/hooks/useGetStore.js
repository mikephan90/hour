import { useEffect, useState, useContext, useCallback } from 'react';
import yelp from '../api/yelp';
import { Context as BookmarkContext } from '../context/BookmarkContext';

export default () => {
    const { state: { bookmarks } } = useContext(BookmarkContext);
    const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
    
	const getResults = async (bID) => {
		try {
			const response = await yelp.get(`/${id}`);
			setResults(response.data);
		} catch (err) {
			setErrorMessage('Something went wrong');
        }
    };

	useEffect(() => {
		getResults('');
	}, []);

	return [getResults, results, errorMessage];
};