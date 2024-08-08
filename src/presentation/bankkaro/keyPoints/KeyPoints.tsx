import React from 'react';
import './KeyPoints.scss';
import { KeyPointItemBean } from '../../bean/KeyPointItemBean';


interface Props {
    style?: React.CSSProperties;
    keyPoints: Array<KeyPointItemBean>
}

const KeyPoints = (props: Props) => {
    const { style, keyPoints } = props;

    return (
        <div id={'keyPoints'} className={'keyPoints-container1'} style={style}>
           {
            keyPoints.map((item)=>{
                return (
                    <div key={item.id} className={'keyPoints-container2'}>
                        <img className={'keyPoints-container3'} src={item.image}/>
                        <p className={'keyPoints-text1'}>{item.title}</p>
                        <p className={'keyPoints-text2'}>{item.description}</p>
                    </div>
                )
            })
           }
        </div>
    );
};

export default KeyPoints;

const styles: Record<string, React.CSSProperties> = {};
