
import axios from 'axios';



export const getNews = async() =>{
      const URL = 'https://inshortsclone-1.onrender.com';
    try{
        return await axios.get(`${URL}/news`);

    }catch(error){
        console.log("Error while calling getNews API ", error);
    }

}