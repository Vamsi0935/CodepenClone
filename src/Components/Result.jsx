import React from 'react';

const Result = ({ srcCode }) => {
    return (
        <div className="result-container">
            <h2 className="text-lg text-white font-semibold mb-2">Result</h2>
            <iframe
                title="result"
                srcDoc={srcCode}
                style={{ width: '100%', height: '400px', border: 'none' }}
            />
        </div>
    );
};

export default Result;
