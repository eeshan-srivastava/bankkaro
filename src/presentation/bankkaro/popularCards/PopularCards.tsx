import React from 'react';
import './PopularCards.scss';
import strings from '../../../resources/strings/strings';
import { TagItemBean } from '../../bean/TagItemBean';
import images from '../../../resources/images/images';
import { CardItemBean } from '../../bean/CardItemBean';
import GradientBorderView from '../../widgets/common/GradientBorderView';
import ColorUtils from '../../../resources/colors/ColorUtils';


interface Props {
    style?: React.CSSProperties;
    tags: Array<TagItemBean>
    cards: Array<CardItemBean>
}

const config = {
    selected :{
        gradient: [
            ColorUtils.getAlphaColor({ colorCode: '#FFFFFF', opacityPercent: 100 }),
            ColorUtils.getAlphaColor({ colorCode: '#FFFFFF', opacityPercent: 100 }),
        ],
        backgroundColor:  ColorUtils.getAlphaColor({ colorCode: '#FFFFFF', opacityPercent: 100 }),
        textColor: ColorUtils.getAlphaColor({ colorCode: '#000000', opacityPercent: 100 }),
    },
    unselected:{
        gradient: [
            ColorUtils.getAlphaColor({ colorCode: '#FFFFFF', opacityPercent: 40 }),
            ColorUtils.getAlphaColor({ colorCode: '#151515', opacityPercent: 40 }),
        ],
        backgroundColor:  ColorUtils.getAlphaColor({ colorCode: '#000000', opacityPercent: 100 }),
        textColor: ColorUtils.getAlphaColor({ colorCode: '#ffffff', opacityPercent: 100 }),
    }
}

const PopularCards = (props: Props) => {
    const { style, cards, tags } = props;

    return (
        <div id={'popularCards'} className={'popularCards-container1'} style={style}>
           <div className={'popularCards-container2'}>
                <img className={'popularCards-container3'} src={images.img_grid_left}/>
                <div className={'popularCards-container5'}>
                    <span className={'popularCards-text1'}>{strings.PopularCredit}</span>
                    <div className={'popularCards-container6'}>
                        {
                            tags.map((item)=>{
                                return (
                                    <GradientBorderView
                                    key={item.id}
                                    colors={config[(item.isSelected?'selected':'unselected')].gradient}
                                    borderWidth={'0.1rem'}
                                    borderRadius={'0.64rem'}
                                    style={{marginRight: '1.6rem'}}
                                    gradientAngle='180deg'>

                                        <div className={'popularCards-container60'} style={{backgroundColor:config[(item.isSelected?'selected':'unselected')].backgroundColor}}>
                                            <span className={'popularCards-text60'} style={{color: config[(item.isSelected?'selected':'unselected')].textColor}}>{item.name}</span>
                                        </div>

                                        </GradientBorderView>
                                )
                            })
                        }
                    </div>
                </div>
                <img className={'popularCards-container4'} src={images.img_grid_right}/>
           </div>
           <div className={'popularCards-container7'}>
            {
                cards.map((item)=>{
                    return (
                        <div key={item.id} className={'popularCards-container8'}>
                            <img src={item.image} className={'popularCards-container9'}/>
                            <span className={'popularCards-text2'}>{item.title}</span>
                            <div className={'popularCards-container10'}>
                                {
                                    item.tags.map((tag, index)=>{
                                        return(
                                            <div key={index.toString()} className={'popularCards-container11'}>
                                                <span className={'popularCards-text6'}>{tag}</span>
                                             </div>
                                        )
                                    })
                                }
                            </div>
                            <span className={'popularCards-text3'}>{item.offer}</span>
                            <span className={'popularCards-text4'}>{item.description}</span>
                            <div className={'popularCards-container12'}>
                                <span className={'popularCards-text5'}>{strings.Apply_Now}</span>
                                <img src={images.ic_arrow} className={'popularCards-container13'}/>
                            </div>
                        </div>
                    )
                })
            }  
           </div>
        </div>
    );
};

export default PopularCards;

const styles: Record<string, React.CSSProperties> = {};
