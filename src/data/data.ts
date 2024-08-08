import ColorUtils from "../resources/colors/ColorUtils";
import images from "../resources/images/images";

const bankkaroData = {
    menu: [
        {
            name: 'OUR PRODUCTS',
            menu: [{ name: 'option', menu: [] }],
        },
        {
            name: 'TOOLS',
            menu: [{ name: 'option', menu: [] }],
        },
        {
            name: 'BLOGS',
            menu: [],
        },
        {
            name: 'ABOUT US',
            menu: [],
        },
    ],
    buttonGraditent :{
        active : [
            ColorUtils.getAlphaColor({ colorCode: '#FFFFFF', opacityPercent: 80 }),
            ColorUtils.getAlphaColor({ colorCode: '#FFFFFF', opacityPercent: 20 }),
        ],
    },
    keyPoints:[
        {
            id: '1',
            image: images.img_chart,
            title:'Personalised Offers',
            description:'Find best Credit Cards based on your spend pattern', 
        },
        {
            id: '2',
            image: images.img_percent,
            title:'Earn Rewards',
            description:'Earn Rewards for every successful Credit Card approval', 
        },
        {
            id: '3',
            image: images.img_cards,
            title:'Compare Cards',
            description:'Compare your existing Cards with best in the industry', 
        },
        {
            id: '4',
            image: images.img_shield,
            title:'Max Benifits',
            description:'Get maximum benefits from your Credit Cards',
        }
    ],
    keyProducts: [
        {
            id: '1',
            image: images.img_pf_1,
            title:'Card Kundali',
        },
        {
            id: '2',
            image: images.img_pf_2,
            title:'Beat My Card',
        },
        {
            id: '3',
            image: images.img_pf_3,
            title:'Compare Cards', 
        },
        {
            id: '4',
            image: images.img_pf_4,
            title:'Lounge Finder',
        }
    ]
};

export { bankkaroData };
