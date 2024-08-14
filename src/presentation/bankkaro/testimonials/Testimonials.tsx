import React from 'react';
import './Testimonials.scss';
import images from '../../../resources/images/images';
import strings from '../../../resources/strings/strings';
import videos from '../../../resources/videos/videos';


interface Props {
    style?: React.CSSProperties;
}

const Testimonials = (props: Props) => {
    const { style } = props;

    return (
        <div id={'testimonials'} className={'testimonials-container1'} style={style}>
             {/* <img src={images.img_ratan_tata} className={'testimonials-container2'}/> */}
            <div className={'testimonials-container2'}>
                <video className={'testimonials-container21'} autoPlay loop muted>
                    <source src={videos.vid_testimonials} type="video/mp4" />
                </video>
                <img src={images.img_ratan_idol} className={'testimonials-container22'}/>
            </div>
           <div className={'testimonials-container3'}>
            <div className={'testimonials-container6'}>
            <span className={'testimonials-text1'}>{strings.What_They}</span>
            <div className={'testimonials-container4'}>
                <span className={'testimonials-text2'}>{strings.See_the}</span>
                <span className={'testimonials-text3'}>{strings.Impact}</span>
                <span className={'testimonials-text4'}>{strings.in_action}</span>
            </div>
            </div>
            <div className={'testimonials-container5'}>
                <span className={'testimonials-text5'}>{strings.Ratan_Tata}</span>
                <span className={'testimonials-text6'}>{strings.Chairperson_Tata_Group}</span>
            </div>
            <span className={'testimonials-text7'}>{strings.Testimonials}</span>
           </div>
        </div>
    );
};

export default Testimonials;

const styles: Record<string, React.CSSProperties> = {};
