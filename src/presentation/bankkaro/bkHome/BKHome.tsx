import React from 'react';
import './BKHome.scss';
import Button from '../../widgets/button/Button';
import strings from '../../../resources/strings/strings';
import images from '../../../resources/images/images';
import videos from '../../../resources/videos/videos';


interface Props {
    style?: React.CSSProperties;
}

const BKHome = (props: Props) => {
    const { style } = props;

    return (
        <div id={'bkHome'} className={'bkHome-container1'} style={style}>
           <div className={'bkHome-container2'}>
            <div className={'bkHome-container3'}>
                {/* <img className={'bkHome-container4'} src={images.img_main_backdrop}/> */}
                <img className={'bkHome-container5'} src={images.img_cc}/>
                <div className={'bkHome-container4'}>
                    <video className={'bkHome-container40'} autoPlay loop muted>
                        <source src={videos.vid_home} type="video/mp4" />
                    </video>
                </div>
                <div className={'bkHome-container30'}>
                    <div className={'bkHome-container300'}/>
                </div>
                <div className={'bkHome-container6'}>
                    <div className={'bkHome-container7'}>
                        <span className={'bkHome-text1'}>{strings.We_Find}</span>
                        <span className={'bkHome-text1'}>{strings.Credit_Cards}</span>
                    </div>
                    <Button
                        text={strings.Find_A_Credit_Card}
                        innerStyle={styles.container2}
                        style={styles.container3}
                        height="7.4rem"
                        width='30.8rem'
                        buttonTextStyle={styles.text1}
                    />
                </div>
            </div>
           </div>
        </div>
    );
};

export default BKHome;

const styles: Record<string, React.CSSProperties> = {
    container2:{
        //paddingLeft: '2rem', paddingRight: '3.2rem'
    },
    container3:{
        marginTop:'3rem'
    },
    text1:{
        fontSize:'2.8rem',
        lineHeight:'2.8rem'
    }
};
