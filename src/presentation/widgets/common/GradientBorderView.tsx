import React, { ReactNode } from 'react';
import './GradientBorderView.scss';

interface Props {
    children?: ReactNode;
    borderWidth: string;
    colors: string[];
    borderRadius?: string;
    style?: React.CSSProperties;
    gradientAngle?: string
    opacity?: number
}

const GradientBorderView = (props: Props) => {
    const { children, borderWidth, colors, borderRadius = '0rem', style, gradientAngle='195deg', opacity=1 } = props;
    const gradient = `linear-gradient(${gradientAngle}, ${colors.join(', ')})`;

    return (
        <div
            id="gradientBorderView"
            className={'gradientBorderView-container1'}
            style={{
                ...{
                    borderRadius: borderRadius,
                    background: gradient,
                    opacity: opacity
                },
                ...style,
            }}>
            <div
                className={'gradientBorderView-container2'}
                style={{
                    borderRadius: borderRadius,
                    padding: borderWidth,
                }}>
                {children}
            </div>
        </div>
    );
};

export default GradientBorderView;
