import React from 'react';
import { Badge } from 'react-bootstrap';
import { Button } from '../../components/Button';
import './RecipeCard.css';

export interface RecipeCardProps {
    id: string;
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
}

/**
 * Primary UI component for user interaction
 */
export const RecipeCard: React.FC<RecipeCardProps> = ({
    id,
    title,
    subtitle,
    viewButtonLabel,
    ...props
}) => {
    return (
        <div className="card">
            <div className="cardMeta">
                <h4><b> {title}</b></h4>
                <Badge pill variant="info">{subtitle}</Badge>
            </div>
            <div className="btn-container">
                <Button
                    margin="10px"
                    size="small" primary
                    label={viewButtonLabel}
                    onClick={() => window.location.href = "/recipes/" + id.toString()} />
            </div>
        </div>
    );
};
