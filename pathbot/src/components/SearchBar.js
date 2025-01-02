import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleSearch = () => {
        if (input.trim()) {
            onSearch(input);
            setInput('');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <input
                type="text"
                placeholder="Search for an item..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ padding: '10px', fontSize: '16px', width: '60%' }}
            />
            <button onClick={handleSearch} style={{ padding: '10px', fontSize: '16px' }}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
