// NPM Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = { width: '100%' };

const ArrowButton = ({
    control, onTouchStart, onTouchEnd
}) => (
    <button
        onTouchStart={() => onTouchStart({ control })}
        onTouchEnd={() => onTouchEnd({ control })}
        style={{
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            width: '100%'
        }}
    >
        <img
            style={buttonStyle}
            src={`../../../../public/img/${control}-arrow.svg`}
            alt={`${control} arrow button`}
        />
    </button>
);

ArrowButton.propTypes = {
    control: PropTypes.string.isRequired,
    onTouchStart: PropTypes.func.isRequired,
    onTouchEnd: PropTypes.func.isRequired
};

export default ArrowButton;
