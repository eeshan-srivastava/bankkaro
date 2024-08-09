import React from 'react';
import './PopularCards.scss';
import strings from '../../../resources/strings/strings';
import { TagItemBean } from '../../bean/TagItemBean';
import images from '../../../resources/images/images';
import { CardItemBean } from '../../bean/CardItemBean';


interface Props {
    style?: React.CSSProperties;
    tags: Array<TagItemBean>
    cards: Array<CardItemBean>
}

const PopularCards = (props: Props) => {
    const { style, cards, tags } = props;

    return (
        <div id={'popularCards'} className={'popularCards-container1'} style={style}>
           <div className={'popularCards-container2'}>
                <img className={'popularCards-container3'}/>
                <div className={'popularCards-container5'}>
                    <span className={'popularCards-text1'}>{strings.PopularCredit}</span>
                    <div className={'popularCards-container6'}>
                        {
                            tags.map((item)=>{
                                return (
                                    <div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <img className={'popularCards-container4'}/>
           </div>
           <div className={'popularCards-container7'}>
            {
                cards.map((item)=>{
                    return (
                        <div key={item.id} className={'popularCards-container8'}>
                            <img src={images.ic_arrow} className={'popularCards-container9'}/>
                            <span className={'popularCards-text2'}></span>
                            <div className={'popularCards-container10'}>
                                {
                                    item.tags.map((item, index)=>{
                                        return(
                                            <div key={index.toString()} className={'popularCards-container11'}>
                                                <span className={'popularCards-text6'}></span>
                                             </div>
                                        )
                                    })
                                }
                            </div>
                            <span className={'popularCards-text3'}></span>
                            <span className={'popularCards-text4'}></span>
                            <div className={'popularCards-container12'}>
                                <span className={'popularCards-text5'}></span>
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
