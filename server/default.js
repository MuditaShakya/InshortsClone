


import {data} from './constants/data.js';

import news from './model/news-schema.js';

const DefaultData = async () => {
    try {
        const count = await news.countDocuments();

        if (count === 0) {
            await news.insertMany(data);
            console.log("Default data inserted");
        } else {
            console.log("Data already exists, skipping insert");
        }
    } catch (error) {
        console.log("Error", error.message);
    }
};


export default DefaultData;