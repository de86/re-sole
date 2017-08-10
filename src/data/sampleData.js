function getSampleData() {
    const shoes = {
        shoe_1: {
            id: "shoe_1",
            brand: 'Nike',
            model: 'Air Max',
            availSizes: [5, 6, 7, 8, 9, 10, 11],
            availColours: ['Red', 'Blue', 'White', 'Black'],
            price: 9499,
            images: [
                'resources/images/nike_air_max_red.jpg',
                'resources/images/nike_air_max_blue.jpg',
                'resources/images/nike_air_max_white.jpg',
                'resources/images/nike_air_max_black.jpg'
            ]
        },
        shoe_2: {
            id: "shoe_2",
            brand: 'Nike',
            model: 'Zoom',
            availSizes: [5, 6, 7, 8, 9, 10, 11],
            availColours: ['Grey/Orange'],
            price: 8499,
            images: ['resources/images/nike_zoom_grey-orange.jpg']
        },
        shoe_3: {
            id: "shoe_3",
            brand: 'Adidas',
            model: 'Questar Boost',
            availSizes: [7, 8, 9, 11],
            availColours: ['Blue'],
            price: 4499,
            images: ['resources/images/adidas_questar_boost_blue.jpg']
        },
        shoe_4: {
            id: "shoe_4",
            brand: 'Adidas',
            model: 'Originals',
            availSizes: [6, 7, 8, 9, 10],
            availColours: ['Blue', 'Black'],
            price: 9499,
            images: [
                'resources/images/adidas_originals_blue.jpg',
                'resources/images/adidas_originals_black.jpg'
            ]
        },
        shoe_5: {
            id: "shoe_5",
            brand: 'Reebok',
            model: 'Classic',
            availSizes: [8, 9, 10, 11],
            availColours: ['Slate Blue/Off White'],
            price: 6999,
            images: ['resources/images/reebok_classic_slate-blue.jpg']
        },
        shoe_6: {
            id: "shoe_6",
            brand: 'Reebok',
            model: 'Everchill',
            availSizes: [6, 7, 8, 9, 10, 11],
            availColours: ['Grey/Red'],
            price: 3799,
            images: ['resources/images/reebok_everchill_grey-red.jpg']
        }
    }

    return shoes;
}

export default getSampleData;