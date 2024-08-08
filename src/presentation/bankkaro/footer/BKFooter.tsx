import React from 'react';
import './BKHome.scss';


interface Props {
    style?: React.CSSProperties;
}

const BKFooter = (props: Props) => {
    const { style } = props;

    return (
        <div id={'bkHome'} className={'bkHome-container1'} style={style}>
           
        </div>
    );
};

export default BKFooter;

const styles: Record<string, React.CSSProperties> = {};
