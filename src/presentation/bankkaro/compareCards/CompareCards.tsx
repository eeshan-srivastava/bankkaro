import React from 'react';
import './CompareCards.scss';
import images from '../../../resources/images/images';
import strings from '../../../resources/strings/strings';
import Button from '../../widgets/button/Button';


interface Props {
    style?: React.CSSProperties;
}

const CompareCards = (props: Props) => {
    const { style } = props;

    return (
        <div id={'compareCards'} className={'compareCards-container1'} style={style}>
            <img src={images.img_cc_backdrop} className={'compareCards-container2'}/>
            <div className={'compareCards-container3'}>
               <span className={'compareCards-text1'}>{strings.Unable}</span>
               <Button
                    text={strings.Compare_Cards}
                    innerStyle={styles.container2}
                    style={styles.container3}
                    height="7.4rem"
                    width='32.8rem'
                    buttonTextStyle={styles.text1}
                />
            </div>
        </div>
    );
};

export default CompareCards;

const styles: Record<string, React.CSSProperties> = {
    container2:{
        //paddingLeft: '2rem', paddingRight: '3.2rem'
    },
    container3:{
        marginTop:'4rem'
    },
    text1:{
        fontSize:'2.8rem',
        lineHeight:'2.8rem'
    }
};
