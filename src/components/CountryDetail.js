// CountryDetail.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { alpha3Code } = useParams(); // Fetching the parameter from URL
    const [country, setCountry] = useState(null);

    useEffect(() => {
        // Function to fetch data from API
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/alpha/${alpha3Code}`);
                setCountry(response.data[0]); // API returns an array, so take the first element
            } catch (error) {
                console.error('Error fetching country:', error);
            }
        };

        fetchData();
    }, [alpha3Code]); // Re-run effect when alpha3Code changes

    if (!country) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>
                <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{ maxWidth: '100px' }} />
            </div>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Area: {country.area.toLocaleString()} km²</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default CountryDetail;
