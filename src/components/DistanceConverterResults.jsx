import React from 'react';

const DistanceConverterResults = ({ result, time, distance }) => {
    return (

        <div className="result pure-form">
            <p>
                <span className="left">result in km: </span>
                <span className="right">{result}</span>
                <span className="unit">km</span>
            </p>
            <p>
                <span className="left">pace in min/km: </span>
                <span className="right">{time && (time / (distance * 1.60934)).toFixed(3)}</span>
                <span className="unit">min/km</span>
            </p>
            <p>
                <span className="left">pace in min/miles: </span>
                <span className="right">{time && (time / distance).toFixed(3)}</span>
                <span className="unit">min/miles</span>
            </p>
            <p>
                <span className="left">equivalence for 5km: </span>
                <span className="right">{time && ((time / (distance * 1.60934)) * 5).toFixed(3)}</span>
                <span className="unit">5km</span>
            </p>
            <p>
                <span className="left">equivalence for 10km: </span>
                <span className="right">{time && ((time / (distance * 1.60934)) * 10).toFixed(3)}</span>
                <span className="unit">10km</span>
            </p>
            <p>
                <span className="left">equivalence for half-marathon: </span>
                <span className="right">{time && ((time / (distance * 1.60934)) * 21.1).toFixed(3)}</span>
                <span className="unit">half-marathon</span>
            </p>
            <p>
                <span className="left">equivalence for 3.5 miles: </span>
                <span className="right">{time && ((time / distance) * 3.5).toFixed(3)}</span>
                <span className="unit">3.5 miles</span>
            </p>
        </div>
    )
}

export default DistanceConverterResults;