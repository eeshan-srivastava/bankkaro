import React from 'react';
import './BankKaro.scss';
import BKHeader from './header/BKHeader';
import { bankkaroData } from '../../data/data';
import BKHome from './bkHome/BKHome';
import KeyPoints from './keyPoints/KeyPoints';
import KeyProducts from './keyProducts/KeyProducts';

const BankKaro = () => {
    return (
        <div id={'bankkaro'} className="bankkaro-container1">
            <BKHeader menu={bankkaroData.menu} />
            <div className="bankkaro-container2">
                <BKHome/>
                <KeyPoints keyPoints={bankkaroData.keyPoints}/>
                <KeyProducts keyProducts={bankkaroData.keyProducts}/>
            </div>
        </div>
    );
};

export default BankKaro;
