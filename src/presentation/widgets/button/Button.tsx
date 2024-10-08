import React from 'react';
import './Button.scss';
import GradientBorderView from '../common/GradientBorderView';
import ColorUtils from '../../../resources/colors/ColorUtils';
import { bankkaroData } from '../../../data/data';

interface Props {
    text: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    innerStyle?: React.CSSProperties;
    borderRadius?: string;
    borderWidth?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    buttonTextStyle?: React.CSSProperties;
    leftIcon?: string
    gradientAngle?: string
    gradientBorderOpacity?: number
    opacity?: number
}

const Button = (props: Props) => {
    const {
        text,
        onClick = () => {},
        style,
        innerStyle,
        borderRadius = '0.8rem',
        borderWidth = '0.2rem',
        width,
        height,
        //backgroundColor = '#292927',
        //backgroundColor = '#141413',
        backgroundColor = '#21211f',
        buttonTextStyle,
        leftIcon,
        gradientAngle='195deg',
        gradientBorderOpacity=1,
        opacity = 1
    } = props;

    return (
        <div
            id="button"
            className="button-container1"
            onClick={onClick}
            style={{ ...style, ...{ borderRadius: borderRadius } }}>
            <GradientBorderView
                colors={bankkaroData.buttonGraditent.active}
                borderWidth={borderWidth}
                borderRadius={borderRadius}
                gradientAngle={gradientAngle}
                opacity={gradientBorderOpacity}
                style={{
                    ...innerStyle,
                    ...{
                        width: width,
                        height: height,
                        backgroundColor: backgroundColor,
                        borderRadius: borderRadius,
                    },
                }}/>
            <div
                className="button-container2"
                style={{
                    ...innerStyle,
                    ...{
                        minWidth: `calc(${width} - 2 * ${borderWidth})`,
                        height: `calc(${height} - 2 * ${borderWidth})`,
                        backgroundColor: backgroundColor,
                        borderRadius: borderRadius,
                        opacity: opacity
                    },
                }}>
            </div>
            <div className="button-container21" style={{
                    ...innerStyle,
                    ...{
                        minWidth: `calc(${width} - 2 * ${borderWidth})`,
                        height: `calc(${height} - 2 * ${borderWidth})`,
                        //backgroundColor: backgroundColor,
                        borderRadius: borderRadius,
                        backgroundColor: 'transparent'
                    },
                }}>
                    <div className="button-container4">
                        {
                        leftIcon?(
                            <img className={'button-container3'} src={leftIcon}/>
                        ):null
                    }
                    <span className="button-text1" style={buttonTextStyle}>
                        {text}
                    </span>
                    </div>
            </div>
        </div>
    );
};

export default Button;
