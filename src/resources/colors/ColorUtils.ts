import { IndexKind } from 'typescript';
import alphaCode from './alphaCode';

const getAlphaColor = (params: { colorCode: string; opacityPercent: IndexKind }): string => {
    const { colorCode, opacityPercent } = params;
    var color = colorCode + alphaCode.alphaTransparencyCodes[opacityPercent];
    return color;
};

export default { getAlphaColor };
