import React, { ReactNode } from 'react';
import './GradientBorderView.scss';

interface Props {
    children: ReactNode;
    borderWidth: string;
    colors: string[];
    borderRadius?: string;
    style?: React.CSSProperties;
}

const GradientBorderView = (props: Props) => {
    const { children, borderWidth, colors, borderRadius = '0rem', style } = props;
    const gradient = `linear-gradient(180deg, ${colors.join(', ')})`;

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
