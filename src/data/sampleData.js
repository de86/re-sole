function getSampleData() {
    const shoes = {
        shoe_1: {
            id: "shoe_1",
            brand: 'Nike',
            model: 'Air Max',
            availSizes: [5, 6, 7, 8, 9, 10, 11],
            availColours: ['Red', 'Blue', 'White', 'Black'],
            price: 9499,
            images: {
                default: 'resources/images/nike_air_max_red.jpg',
                red: 'resources/images/nike_air_max_red.jpg',
                blue: 'resources/images/nike_air_max_blue.jpg',
                white: 'resources/images/nike_air_max_white.jpg',
                black: 'resources/images/nike_air_max_black.jpg'
            }
        },
        shoe_2: {
            id: "shoe_2",
            brand: 'Nike',
            model: 'Zoom',
            availSizes: [5, 6, 7, 8, 9, 10, 11],
            availColours: ['Grey'],
            price: 8499,
            images: {
                default: 'resources/images/nike_zoom_grey-orange.jpg',
                grey: 'resources/images/nike_zoom_grey-orange.jpg'
            }
        },
        shoe_3: {
            id: "shoe_3",
            brand: 'Adidas',
            model: 'Questar Boost',
            availSizes: [7, 8, 9, 11],
            availColours: ['Blue'],
            price: 4499,
            images: {
                default: 'resources/images/adidas_questar_boost_blue.jpg',
                blue: 'resources/images/adidas_questar_boost_blue.jpg'
            }
        },
        shoe_4: {
            id: "shoe_4",
            brand: 'Adidas',
            model: 'Originals',
            availSizes: [6, 7, 8, 9, 10],
            availColours: ['Black', 'Red'],
            price: 9499,
            images: {
                default: 'resources/images/adidas_originals_black.jpg',
                black: 'resources/images/adidas_originals_black.jpg',
                red: 'resources/images/adidas_originals_red.jpg'
            }
        },
        shoe_5: {
            id: "shoe_5",
            brand: 'Reebok',
            model: 'Classic',
            availSizes: [8, 9, 10, 11],
            availColours: ['slate'],
            price: 6999,
            images: {
                default: 'resources/images/reebok_classic_slate-blue.jpg',
                slate: 'resources/images/reebok_classic_slate-blue.jpg'
            }
        },
        shoe_6: {
            id: "shoe_6",
            brand: 'Reebok',
            model: 'Everchill',
            availSizes: [6, 7, 8, 9, 10, 11],
            availColours: ['Grey'],
            price: 3799,
            images: {
                default: 'resources/images/reebok_everchill_grey-red.jpg',
                grey: 'resources/images/reebok_everchill_grey-red.jpg'
            }
        }
    }

    return shoes;
}

export default getSampleData;