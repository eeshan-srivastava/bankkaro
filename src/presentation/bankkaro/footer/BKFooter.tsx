import React from 'react';
import './BKFooter.scss';


interface Props {
    style?: React.CSSProperties;
}

const BKFooter = (props: Props) => {
    const { style } = props;

    return (
        <div id={'bkFooter'} className={'bkFooter-container1'} style={style}>
           
        </div>
    );
};

export default BKFooter;

const styles: Record<string, React.CSSProperties> = {};
