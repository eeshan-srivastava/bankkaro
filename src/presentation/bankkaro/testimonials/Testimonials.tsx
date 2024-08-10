import React from 'react';
import './Testimonials.scss';


interface Props {
    style?: React.CSSProperties;
}

const Testimonials = (props: Props) => {
    const { style } = props;

    return (
        <div id={'testimonials'} className={'testimonials-container1'} style={style}>
           
        </div>
    );
};

export default Testimonials;

const styles: Record<string, React.CSSProperties> = {};
