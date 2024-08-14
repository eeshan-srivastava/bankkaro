import React from 'react';
import './BKFooter.scss';
import Button from '../../widgets/button/Button';
import strings from '../../../resources/strings/strings';
import { FooterMenuBean } from '../../bean/FooterMenuBean';
import images from '../../../resources/images/images';


interface Props {
    style?: React.CSSProperties;
    footerMenu: Record<string,FooterMenuBean>
}

const BKFooter = (props: Props) => {
    const { style, footerMenu } = props;

    return (
        <div id={'bkFooter'} className={'bkFooter-container1'} style={style}>
            <div className={'bkFooter-container2'}>
                <div className={'bkFooter-container3'}>
                    <img className={'bkFooter-container4'} src={images.img_twitter}/>
                    <img className={'bkFooter-container5'} src={images.img_instagram}/>
                </div>
                <span className={'bkFooter-text1'}>
                    {strings.nonsense}
                </span>
                <div className={'bkFooter-container6'}>
                    <Button
                    text={strings.app_store}
                    innerStyle={styles.container2}
                    style={styles.container1}
                    height="7.8rem"
                    width='24rem'
                    buttonTextStyle={styles.text1}
                    leftIcon={images.img_app_store}
                    />
                    <Button
                        text={strings.google_play}
                        innerStyle={styles.container2}
                        style={styles.container3}
                        height="7.8rem"
                        width='26rem'
                        buttonTextStyle={styles.text1}
                        leftIcon={images.img_google_play}
                    />
                </div>
                <div className={'bkFooter-container7'}/>
                <span className={'bkFooter-text2'}>
                    {strings.nonsense2}
                </span>
            </div>
            <div className={'bkFooter-container8'}>
                <div className={'bkFooter-container9'}>
                    <div className={'bkFooter-container10'}>
                        <span className={'bkFooter-text3'}>{footerMenu.company.name}</span>
                        {
                            footerMenu.company.items.map((item)=>{
                                return(
                                <span className={'bkFooter-text4'}>
                                    {item}
                                </span>
                                    
                                )
                            })
                        }
                    </div>
                    <div className={'bkFooter-container11'}>
                        <span className={'bkFooter-text3'}>{footerMenu.blog.name}</span>
                        {
                            footerMenu.blog.items.map((item)=>{
                                return(
                                    <span className={'bkFooter-text4'}>
                                        {item}
                                    </span>
                                )
                            })
                        }
                    </div>
                    <div className={'bkFooter-container12'}>
                        <span className={'bkFooter-text3'}>{footerMenu.features.name}</span>
                        {
                            footerMenu.features.items.map((item)=>{
                                return(
                                <span className={'bkFooter-text4'}>
                                    {item}
                                </span>
                                    
                                )
                            })
                        }
                    </div>
                </div>
                <div className={'bkFooter-container13'}>
                    <div className={'bkFooter-container14'}>
                        <span className={'bkFooter-text5'}>{footerMenu.contact.name}</span>
                        {
                            footerMenu.contact.items.map((item)=>{
                                return(
                                <span className={'bkFooter-text6'}>
                                    {item}
                                </span>
                                    
                                )
                            })
                        }
                    </div>
                    <div className={'bkFooter-container15'}>
                        <span className={'bkFooter-text5'}>{footerMenu.legal.name}</span>
                        {
                            footerMenu.legal.items.map((item)=>{
                                return(
                                <span className={'bkFooter-text6'}>
                                    {item}
                                </span>
                                    
                                )
                            })
                        }
                    </div>
                    <div className={'bkFooter-container16'}>
                        <div className={'bkFooter-container17'}>
                            <span className={'bkFooter-text7'}>{strings.c_bankkaro}</span>
                            <span className={'bkFooter-text8'}>{strings.powered_by}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BKFooter;

const styles: Record<string, React.CSSProperties> = {
    container1:{
        marginRight: '6rem',
        alignSelf:'center'
    },
    container2:{
        //paddingLeft: '2rem', paddingRight: '3.2rem'
    },
    container3:{
        //marginTop:'4.8rem'
    },
    text1:{
        fontSize:'2.133rem',
        lineHeight:'2.814rem',
        fontFamily:'Roboto Slab',
        fontWeight: 400,
        background: 'linear-gradient(180deg, rgba(184, 149, 109, 1) 0%, rgba(204, 191, 172, 1) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    },
};
