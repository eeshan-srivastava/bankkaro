import React from 'react';
import './CompareCards.scss';
import images from '../../../resources/images/images';
import strings from '../../../resources/strings/strings';
import Button from '../../widgets/button/Button';
import videos from '../../../resources/videos/videos';


interface Props {
    style?: React.CSSProperties;
}

const CompareCards = (props: Props) => {
    const { style } = props;

    return (
        <div id={'compareCards'} className={'compareCards-container1'} style={style}>
            {/* <img src={images.img_cc_backdrop} className={'compareCards-container2'}/> */}
            <img src={images.img_compare_cards} className={'compareCards-container200'}/>
            {/* <span className='compareCards-text2'>{strings.Compare_Cards}</span> */}
            <div className={'compareCards-container2'}>
                <div className={'compareCards-container21'}>
                    <video className={'compareCards-container24'} autoPlay loop muted>
                        <source src={videos.vid_lounge} type="video/mp4" />
                    </video>
                    <div className={'compareCards-container22'}/>
                    <div className={'compareCards-container23'}>
                        <img src={images.img_mesh}  className={'compareCards-container25'}/>
                    </div>
                </div>
            </div>
            <img src={images.img_stage} className={'compareCards-container201'}/>
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
