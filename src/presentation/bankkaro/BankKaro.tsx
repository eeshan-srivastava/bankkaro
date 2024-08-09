import React from 'react';
import './BankKaro.scss';
import BKHeader from './header/BKHeader';
import { bankkaroData } from '../../data/data';
import BKHome from './bkHome/BKHome';
import KeyPoints from './keyPoints/KeyPoints';
import KeyProducts from './keyProducts/KeyProducts';
import PopularCards from './popularCards/PopularCards';

const BankKaro = () => {
    return (
        <div id={'bankkaro'} className="bankkaro-container1">
            <BKHeader menu={bankkaroData.menu} />
            <div className="bankkaro-container2">
                <BKHome/>
                <KeyPoints keyPoints={bankkaroData.keyPoints}/>
                <KeyProducts keyProducts={bankkaroData.keyProducts}/>
                {/* <PopularCards tags={bankkaroData.tags} cards={bankkaroData.cards}/> */}
            </div>
        </div>
    );
};

export default BankKaro;
