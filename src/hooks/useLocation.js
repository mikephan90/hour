import React, { useState, useEffect } from 'react';
import {
	Accuracy,
	requestPermissionsAsync,
	watchPositionAsync
} from 'expo-location';

export default (callback) => {
    const [err, setErr] = useState(null);
    
    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10
                    },
                    // location => { console.log(location) }
                    callback
                );
            } catch (e) {
                setErr(e);
            }
        };

        // if (focused) {
        //     startWatching();
        // } else {
        //     if (subscriber) {
        //         subscriber.remove();
        //     }
        //     subscriber = null;
        // }
        startWatching();
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };
    }, [callback]);

    return [err];
};