// Home.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // Function to fetch data from API
        const fetchData = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div>
            <h2>Explore Countries</h2>
            <ul>
                {countries.map(country => (
                    <li key={country.cca3}>
                        <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
