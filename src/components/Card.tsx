import React from 'react';
import './card.css';

export interface CardProps {
    /**
     * Is this the principal call to action on the page?
     */
    title: string;
    /**
     * What background color to use
     */
    subtitle: string;
    /**
     * How large should the button be?
     */
    viewButtonLabel: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    viewButtonLabel,
    ...props
}) => {
    return (
        <div className="card">
            <div className="container">
                <h4><b> {title}</b></h4>
                <p>{subtitle}</p>
            </div>
            <div className="btn-container">
                <button className="btn" >{viewButtonLabel} </button>
            </div>
        </div>
    );
};
