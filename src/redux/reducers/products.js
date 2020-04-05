let initialState = {

    hdStreet: [
        {
            id: 1,
            type: 'hdstreet',
            name: 'Street 750',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/street/street-750/details/hdi/19-street-harley-davidson-street-750-xg750-thumb.jpg?impolicy=myresize&rw=896",
            price: 7174,
            engine: "749",
            torque: "60 Nm @ 3750 rpm"
        },
        {
            id: 2,
            type: 'hdstreet',
            name: 'Street Rod',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/street/street-rod/details/hdi/19-street-street-rod-xg750a-hdi-thumb.jpg?impolicy=myresize&rw=896",
            price: 8919,
            engine: "749",
            torque: "60 Nm @ 4250 rpm"
        }
    ],


    sportsters: [
        {
            id: 3,
            type: 'sportster',
            name: 'Super Low',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/sportster/superlow/details/20-sportster-xl883l-superlow-thumb.jpg?impolicy=myresize&rw=896",
            price: 8006,
            engine: "883",
            torque: "669 NM @ 3750 rpm"
        },
        {
            id: 4,
            type: 'sportster',
            name: 'Iron 1200',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/sportster/iron-1200/details/20-sportster-xl1200ns-iron1200-thumb.jpg?impolicy=myresize&rw=896",
            price: 8919,
            engine: "1202 ",
            torque: "60 Nm @ 4250 rpm"
        },
        {
            id: 5,
            type: 'sportster',
            name: 'Iron 883',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/sportster/iron-883/details/20-sportster-xl883n-iron883-thumb.jpg?impolicy=myresize&rw=896",
            price: 12424,
            engine: "883",
            torque: "70 Nm @ 3500 rpm"
        },
        {
            id: 6,
            type: 'sportster',
            name: 'Forty-Eight',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/sportster/forty-eight/details/20-sportster-xl1200x-fortyeight-thumb.jpg?impolicy=myresize&rw=896",
            price: 14377,
            engine: "1202 ",
            torque: "97 Nm @ 4250 rpm"
        },
        {
            id: 7,
            type: 'sportster',
            name: '1200 Custom',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/sportster/1200-custom/details/20-sportster-xl1200c-1200custom-thumb.jpg?impolicy=myresize&rw=896",
            price: 14617,
            engine: "1202 ",
            torque: "97 Nm @ 4250 rpm"
        },
        {
            id: 8,
            type: 'sportster',
            name: 'Roadster',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/sportster/roadster/details/20-sportster-xl1200cx-roadster-thumb.jpg?impolicy=myresize&rw=896",
            price: 13092,
            engine: "1200 ",
            torque: "103 Nm @3750 rpm"
        }
    ],



    softails: [
        {
            id: 9,
            type: 'softail',
            name: 'Heritage Classic 114',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/softail/heritage-classic/details/20-softail-flhcs-heritageclassic114-thumb.jpg?impolicy=myresize&rw=896",
            price: 26643,
            engine: "1745 ",
            torque: "144 Nm @ 3000 rpm"
        },
        {
            id: 10,
            type: 'softail',
            name: 'Breakout 114',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/softail/breakout-114/details/20-softail-fxbrs-breakout114-thumb.jpg?impolicy=myresize&rw=896",
            price: 21799,
            engine: "1868 ",
            torque: "Unknown"
        },
        {
            id: 11,
            type: 'softail',
            name: 'Low Rider',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/softail/low-rider/details/20-softail-fxlr-lowrider-thumb.jpg?impolicy=myresize&rw=896",
            price: 17533,
            engine: "1745 ",
            torque: "156 Nm @3500 rpm"
        },
        {
            id: 12,
            type: 'softail',
            name: 'Street Bob',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/softail/street-bob/details/20-softail-street-fxbb-streetbob-thumb.jpg?impolicy=myresize&rw=896",
            price: 17075,
            engine: "1745 ",
            torque: "144 Nm @ 3000 rpm"
        },
        {
            id: 13,
            type: 'softail',
            name: 'Fat Bob',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/softail/fat-bob/details/20-softail-fxfbs-fatbob114-thumb.jpg?impolicy=myresize&rw=896",
            price: 19841,
            engine: "1745 ",
            torque: "145 Nm @ 3250 rpm"
        },
        {
            id: 14,
            type: 'softail',
            name: 'Fat Boy',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/softail/fat-boy/details/2020-fat-boy-114-f38-motorcycle-thumb.jpg?impolicy=myresize&rw=896",
            price: 24569,
            engine: "1745 ",
            torque: "144 Nm @ 3000 rpm"
        },
        {
            id: 15,
            type: 'softail',
            name: 'Sport Glide',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/softail/sport-glide/details/20-softail-flsb-sportglide-thumb.jpg?impolicy=myresize&rw=896",
            price: 22999,
            engine: "1745 ",
            torque: "108 ft-lb"
        },
        {
            id: 16,
            type: 'softail',
            name: 'FXDR',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/softail/fxdr-114/details/20-softail-fxdrs-fxdr114-thumb.jpg?impolicy=myresize&rw=896",
            price: 21749,
            engine: "1868 ",
            torque: "156 hp @ 9500 rpm"
        }
    ],


    
    tourings: [
        {
            id: 17,
            type: 'touring',
            name: 'Road Glide Special',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/touring/road-glide-special/details/20-touring-fltrxs-roadglidespecial-thumb.jpg?impolicy=myresize&rw=896",
            price: 45240,
            engine: "1868 ",
            torque: "76.13 hp @ 4,810 rpm"
        },
        {
            id: 18,
            type: 'touring',
            name: 'Ultra Limited',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/touring/ultra-limited/details/20-touring-flhtk-ultralimited-thumb.jpg?impolicy=myresize&rw=896",
            price: 21749,
            engine: "1868 ",
            torque: "166 Nm @ 3,000 rpm"
        },
        {
            id: 19,
            type: 'touring',
            name: 'Road King Special',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/touring/road-king-special/details/20-touring-flhrxs-roadkingspecial-thumb.jpg?impolicy=myresize&rw=896",
            price: 25289,
            engine: "1868 ",
            torque: "123 lb-ft @ 3,250 rpm"
        },
        {
            id: 20,
            type: 'touring',
            name: 'Street Glide Special',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/touring/street-glide-special/details/20-touring-flhxs-streetglidespecial-thumb.jpg?impolicy=myresize&rw=896",
            price: 21749,
            engine: "1868 ",
            torque: "156 hp @ 9500 rpm"
        },
        {
            id: 21,
            type: 'touring',
            name: 'Road King',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/touring/road-king/details/20-touring-flhr-roadking-thumb.jpg?impolicy=myresize&rw=896",
            price: 34437,
            engine: "1745 ",
            torque: "111 lb-ft @ 3,250 rpm"
        },
        {
            id: 22,
            type: 'touring',
            name: 'Electra Glide Standard',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/touring/electra-glide-standard/details/hdi/19-touring-electra-glide-standard-flht-thumb.jpg?impolicy=myresize&rw=896",
            price: 18999,
            engine: "1746 ",
            torque: "111 lb-ft"
        }
    ],


    cvos: [
        {
            id: 23,
            type: 'cvo',
            name: 'CVO Street Glide',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/cvo/cvo-street-glide/details/20-cvo-flhxse-cvo-streetglide-thumb.jpg?impolicy=myresize&rw=896",
            price: 40899,
            engine: "1750 ",
            torque: "125 pound-feet"
        },
        {
            id: 24,
            type: 'cvo',
            name: 'CVO Limited',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/cvo/cvo-limited/details/20-cvo-flhtkse-cvo-limited-thumb.jpg?impolicy=myresize&rw=896",
            price: 68053,
            engine: "1923 ",
            torque: "166 Nm @ 3500 rpm"
        },
        {
            id: 25,
            type: 'cvo',
            name: 'CVO Road Glide',
            image: "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my20/cvo/cvo-road-glide/details/20-cvo-fltrxse-cvo-road-glide-thumb.jpg?impolicy=myresize&rw=896",
            price: 42539,
            engine: "1923 ",
            torque: "125 pound-feet"
        }
    ]
};

const products = (state = initialState, action) => {
    switch(action.type) {


        default: return { ...state };
    }
}

export default products;