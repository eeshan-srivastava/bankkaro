import { title } from "process";
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
            title:'Beat Cardows',
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
    ],
    tags:[
        {
            id: '1',
            name: 'Featured',
            isSelected: true
        },
        {
            id: '2',
            name: 'Cashback',
            isSelected: false
        },
        {
            id: '3',
            name: 'Rewards',
            isSelected: false
        },
        {
            id: '4',
            name: 'Fuel',
            isSelected: false
        },
        {
            id: '5',
            name: 'Business',
            isSelected: false
        },
    ],
    cards:[
        {
            id: '1',
            image: images.img_cc_1,
            title: 'HDFC Regalia',
            tags: ['TRAVEL','ONLINE SHOPPING'],
            offer: '50% Cashback',
            description: 'High cashback on online and offline spends',
        },
        {
            id: '2',
            image: images.img_cc_2,
            title: 'Axis Bank Ace Credit Card',
            tags: ['TRAVEL','ONLINE SHOPPING'],
            offer: '50% Cashback',
            description: 'High cashback on online and offline spends',
        },
        {
            id: '3',
            image: images.img_cc_3,
            title: 'Indian Oil HDFC Credit Card',
            tags: ['TRAVEL','ONLINE SHOPPING'],
            offer: '50% Cashback',
            description: 'High cashback on online and offline spends',
        }
    ],
    footerMenu:{
        company:{
            name: 'COMPANY',
            items:[
                'About BankKaro',
                'Vision and Mission',
                'Our Team Members',
                'Partners and Investors'
            ]
        },
        blog:{
            name: 'BLOG',
            items:[
                'BankKaro Savings',
                'Cashless Makes Perfect',
                'BankKaro No Interest',
                'BankKaro Digital Wallet'
            ]
        },
        features:{
            name: 'FEATURES',
            items:[
                'Card Genius',
                'Lounge Finder',
                'Beat My Card',
                'Compare Cards'
            ]
        },
        contact:{
            name: 'CONTACT',
            items:[
                'Contact Us',
                'Contact Support'
            ]
        },
        legal:{
            name: 'LEGAL',
            items:[
                'Terms',
                'Privacy',
            ]
        },
    },
    lounges:[
        {
            id: '1',
            image: images.img_lounge_1,
            placeImage: images.img_place_1,
            title: 'Indra Gandhi Int’l',
            airport: 'IGI',
            location: 'New Delhi',
        },
        {
            id: '2',
            image: images.img_lounge_2,
            placeImage: images.img_place_2,
            title: 'Indra Gandhi Int’l',
            airport: 'IGI',
            location: 'New Delhi'
        },
        {
            id: '3',
            image: images.img_lounge_3,
            placeImage: images.img_place_3,
            title: 'Indra Gandhi Int’l',
            airport: 'IGI',
            location: 'New Delhi'
        }
    ]
};

export { bankkaroData };
