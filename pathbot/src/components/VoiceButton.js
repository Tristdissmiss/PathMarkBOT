import React from 'react';

const VoiceButton = ({ onVoiceInput }) => (
    <button
        onClick={onVoiceInput}
        style={{
            margin: '20px',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }}
    >
        Speak
    </button>
);

export default VoiceButton;
