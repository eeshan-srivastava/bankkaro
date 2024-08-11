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
        leftIcon
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
                borderRadius={borderRadius}>
                <div
                    className="button-container2"
                    style={{
                        ...innerStyle,
                        ...{
                            width: width,
                            height: height,
                            backgroundColor: backgroundColor,
                            borderRadius: borderRadius,
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
            </GradientBorderView>
        </div>
    );
};

export default Button;
