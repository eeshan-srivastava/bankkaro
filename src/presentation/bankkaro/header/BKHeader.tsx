import React from 'react';
import './BKHeader.scss';
import { MenuItemBean } from '../../bean/MenuItemBean';
import MenuItem from './MenuItem';
import strings from '../../../resources/strings/strings';
import Button from '../../widgets/button/Button';
import GradientBorderView from '../../widgets/common/GradientBorderView';
import ColorUtils from '../../../resources/colors/ColorUtils';
import images from '../../../resources/images/images';
import { bankkaroData } from '../../../data/data';

interface Props {
    menu: Array<MenuItemBean>;
}

const BKHeader = (props: Props) => {
    const { menu } = props;

    return (
        <div id={'bkHeader'} className="bkHeader-container1">
            <div className="bkHeader-container2">
                <div className="bkHeader-container4">
                    <span className="bkHeader-text1">{strings.BANK}</span>
                    <span className="bkHeader-text2">{strings.KARO}</span>
                </div>
                <div className="bkHeader-container5">
                    {menu.map((item: MenuItemBean, index) => {
                        return (
                            <MenuItem
                                item={item}
                                style={index === menu.length - 1 ? {} : styles.container1}
                            />
                        );
                    })}
                </div>
                <div className="bkHeader-container6">
                    <Button
                        text="Sign In"
                        innerStyle={styles.container2}
                        style={styles.container3}
                        width='12.4rem'
                        height="4.6rem"
                        gradientBorderOpacity={1}
                        opacity={1}
                    />
                    <GradientBorderView
                        colors={bankkaroData.buttonGraditent.active}
                        borderWidth="0.2rem" borderRadius='6.4rem' style={styles.container4}>
                        <img src={images.img_user} className="bkHeader-container7" />
                    </GradientBorderView>
                </div>
            </div>
            <div className="bkHeader-container3" />
        </div>
    );
};

export default BKHeader;

const styles: Record<string, React.CSSProperties> = {
    container1: {
        marginRight: '8rem',
    },
    container2:{
        //paddingLeft: '2rem', paddingRight: '3.2rem'
    },
    container3:{alignSelf:'center'},
    container4:{alignSelf:'center', zIndex:2, marginLeft: '-1.6rem', cursor: 'pointer'}

};
