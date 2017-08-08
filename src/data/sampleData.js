function getSampleData() {
    const shoes = {
        shoe_1: {
            id: 1,
            brand: 'Nike',
            model: 'Air Max',
            availSizes: [5, 6, 7, 8, 9, 10, 11],
            availColours: ['Red', 'Blue', 'White', 'Black'],
            price: 9499,
            images: [
                './resources/images/nike_air_max_red.jpg',
                './resources/images/nike_air_max_blue.jpg',
                './resources/images/nike_air_max_white.jpg',
                './resources/images/nike_air_max_black.jpg'
            ]
        },
        shoe_2: {
            id: 2,
            brand: 'Nike',
            model: 'Zoom',
            availSizes: [5, 6, 7, 8, 9, 10, 11],
            availColours: ['Grey/Orange'],
            price: 8499,
            images: ['./resources/images/nike_zoom_grey-orange.jpg']
        },
        shoe_3: {
            id: 3,
            brand: 'Adidas',
            model: 'Questar Boost',
            availSizes: [7, 8, 9, 11],
            availColours: ['Blue'],
            price: 4499,
            images: ['./resources/images/adidas_Questar_Boost.jpg']
        },
        shoe_4: {
            id: 4,
            brand: 'Adidas',
            model: 'Originals',
            availSizes: [6, 7, 8, 9, 10],
            availColours: ['Blue', 'Black'],
            price: 9499,
            images: [
                './resources/images/adidas_originals_blue.jpg',
                './resources/images/adidas_originals_black.jpg'
            ]
        },
        shoe_5: {
            id: 5,
            brand: 'Reebok',
            model: 'Classic',
            availSizes: [8, 9, 10, 11],
            availColours: ['Slate Blue/Off White'],
            price: 6999,
            images: ['./resources/images/reebok_classic_slate-blue.jpg']
        },
        shoe_6: {
            id: 6,
            brand: 'Adidas',
            model: 'Questar Boost',
            availSizes: [7, 8, 9, 11],
            availColours: ['Blue'],
            price: 4499,
            images: ['./resources/images/adidas_Questar_Boost.jpg']
        },
        shoe_7: {
            id: 7,
            brand: 'Reebok',
            model: 'Everchill',
            availSizes: [6, 7, 8, 9, 10, 11],
            availColours: ['Grey/Green'],
            price: 9499,
            images: [
                './resources/images/adidas_originals_blue.jpg',
                './resources/images/adidas_originals_black.jpg'
            ]
        },
        shoe_8: {
            id: 8,
            brand: 'Reebok',
            model: 'Classic',
            availSizes: [7, 8, 9, 10, 11],
            availColours: ['Slate Blue/Off White'],
            price: 6999,
            images: ['./resources/images/reebok_classic_slate-blue.jpg']
        }
    }

    return shoes;
}

export default getSampleData;