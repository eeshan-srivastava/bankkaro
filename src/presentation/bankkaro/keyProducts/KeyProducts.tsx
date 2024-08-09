import React from 'react';
import './KeyProducts.scss';
import { KeyPointItemBean } from '../../bean/KeyPointItemBean';
import { KeyProductItemBean } from '../../bean/KeyProductItemBean';


interface Props {
    style?: React.CSSProperties;
    keyProducts: Array<KeyProductItemBean>
}

const KeyProducts = (props: Props) => {
    const { style, keyProducts } = props;

    return (
        <div id={'keyProducts'} className={'keyProducts-container1'} style={style}>
           {
            keyProducts.map((item)=>{
                return (
                    <div key={item.id} className={'keyProducts-container2'}>
                        <img className={'keyProducts-container3'} src={item.image}/>
                        <p className={'keyProducts-text1'}>{item.title}</p>
                    </div>
                )
            })
           }
        </div>
    );
};

export default KeyProducts;

const styles: Record<string, React.CSSProperties> = {};
