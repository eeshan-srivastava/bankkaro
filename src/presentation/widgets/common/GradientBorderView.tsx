import React, { ReactNode } from 'react';
import './GradientBorderView.scss';

interface Props {
    children?: ReactNode;
    borderWidth: string;
    colors: string[];
    borderRadius?: string;
    style?: React.CSSProperties;
    gradientAngle?: string
}

const GradientBorderView = (props: Props) => {
    const { children, borderWidth, colors, borderRadius = '0rem', style, gradientAngle='195deg' } = props;
    const gradient = `linear-gradient(${gradientAngle}, ${colors.join(', ')})`;

    return (
        <div
            id="gradientBorderView"
            className={'gradientBorderView-container1'}
            style={{
                ...{
                    borderRadius: borderRadius,
                    background: gradient,
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
