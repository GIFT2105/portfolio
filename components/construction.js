import React, { useState, useEffect } from 'react';

const Construction = () => {
    const [countdown, setCountdown] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 24 * 60 * 60 * 1000); // Update countdown every 24 hours

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="construction">
            <div className="spinner"></div>
            <h1>Site Under Maintenance</h1>
            <p>Maintenance will end in {countdown} day{countdown !== 1 && 's'}</p>
        </div>
    );
};

export default Construction;