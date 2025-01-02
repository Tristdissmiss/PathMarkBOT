import React from 'react';

const Results = ({ results }) => (
    <div style={{ margin: '20px', textAlign: 'center' }}>
        {results ? (
            <p>{results}</p>
        ) : (
            <p>Start by searching for an item!</p>
        )}
    </div>
);

export default Results;
