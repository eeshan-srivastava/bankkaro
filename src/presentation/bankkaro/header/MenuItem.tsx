import React from 'react';
import { MenuItemBean } from '../../bean/MenuItemBean';
import './MenuItem.scss';
import images from '../../../resources/images/images';

interface Props {
    item: MenuItemBean;
    style?: React.CSSProperties;
}

const MenuItem = (props: Props) => {
    const { item, style } = props;

    return (
        <div id={'menuItem'} className={'menuItem-container1'} style={style}>
            <span className="menuItem-text1">{item.name}</span>
            {item.menu.length > 0 ? (
                <img src={images.ic_chevron_down} className="menuItem-container2" />
            ) : null}
        </div>
    );
};

export default MenuItem;

const styles: Record<string, React.CSSProperties> = {};
