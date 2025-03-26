import React from 'react';

const CitySelector = ({ cities, selectedCity, onCityChange }) => {
    return (
        <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad:</label>
            <select
                id="city"
                name="city"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={selectedCity}
                onChange={(e) => onCityChange(e.target.value)}
                required
            >
                <option value="">Seleccione una ciudad</option>
                {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                ))}
            </select>
        </div>
    );
};

export default CitySelector;