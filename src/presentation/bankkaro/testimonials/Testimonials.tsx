import React from 'react';
import './BKHome.scss';


interface Props {
    style?: React.CSSProperties;
}

const BKHome = (props: Props) => {
    const { style } = props;

    return (
        <div id={'bkHome'} className={'bkHome-container1'} style={style}>
           
        </div>
    );
};

export default BKHome;

const styles: Record<string, React.CSSProperties> = {};
