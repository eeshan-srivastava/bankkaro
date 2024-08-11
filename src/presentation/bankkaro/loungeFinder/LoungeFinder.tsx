import React from 'react';
import './LoungeFinder.scss';
import strings from '../../../resources/strings/strings';
import Button from '../../widgets/button/Button';
import { LoungeItemBean } from '../../bean/LoungeItemBean';
import images from '../../../resources/images/images';
import { bankkaroData } from '../../../data/data';
import GradientBorderView from '../../widgets/common/GradientBorderView';
import ColorUtils from '../../../resources/colors/ColorUtils';


interface Props {
    style?: React.CSSProperties;
    lounges: Array<LoungeItemBean>
}

const LoungeFinder = (props: Props) => {
    const { style, lounges } = props;

    return (
        <div id={'loungeFinder'} className={'loungeFinder-container1'} style={style}>
            <img src={images.img_map} className={'loungeFinder-container11'}/>
            <div className={'loungeFinder-container12'}>
            <span className={'loungeFinder-text1'}>{strings.Lounge_Finder}</span>
            <span className={'loungeFinder-text2'}>{strings.Check_whether}</span>
            <Button
                text={strings.Try_Lounge_Finder}
                innerStyle={styles.container2}
                style={styles.container3}
                height="7.4rem"
                width='32.8rem'
                buttonTextStyle={styles.text1}
            />
            <div className={'loungeFinder-container2'}>
                {
                    lounges?.map((item)=>{
                        return(
                            <div className={'loungeFinder-container3'}>
                                <img src={images.img_spotlight} className={'loungeFinder-container4'}/>
                                <div className={'loungeFinder-container10'}>
                                    <div className={'loungeFinder-container5'}>
                                        <GradientBorderView
                                            colors={[
                                                ColorUtils.getAlphaColor({ colorCode: '#FFFFFF', opacityPercent: 100 }),
                                                ColorUtils.getAlphaColor({ colorCode: '#2B2B2B', opacityPercent: 100 }),
                                            ]}
                                            borderWidth="0.4rem" borderRadius='6.4rem' style={styles.container4}>
                                            <img src={item.placeImage} className={'loungeFinder-container6'} />
                                        </GradientBorderView>
                                        <div className={'loungeFinder-container7'}>
                                            <span className={'loungeFinder-text3'}>{item.title}</span>
                                            <div className={'loungeFinder-container8'}>
                                                <span className={'loungeFinder-text4'}>{item.airport}</span>
                                                <span className={'loungeFinder-text4'}>{strings.diamond}</span>
                                                <span className={'loungeFinder-text4'}>{item.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={item.image} className={'loungeFinder-container9'}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    );
};

export default LoungeFinder;

const styles: Record<string, React.CSSProperties> = {
    container2:{
        //paddingLeft: '2rem', paddingRight: '3.2rem'
    },
    container3:{
        marginTop:'4.8rem'
    },
    text1:{
        fontSize:'2.8rem',
        lineHeight:'2.8rem'
    },
    container4:{alignSelf:'center', zIndex:0, marginLeft: '0rem',}
};
