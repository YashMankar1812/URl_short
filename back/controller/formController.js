import { nanoid } from 'nanoid';
// import {UrlModel} from '../models/Url.js';
// import formController from './Controller/formController.js';
import UrlModel from '../models/Url.js';

 const shortTheUrl = async (req, res) => {
    const longUrl = req.body.url;
    const uniqueId = nanoid(10);

    const isUrlExists = await UrlModel.findOne({longUrl}); 

    if (isUrlExists) {
      return  res.status(409).json({ message: 'Url already exists' });
    } else {
        const urlObj = await UrlModel.create({ longUrl , shortUrl : uniqueId });
        return  res.status(200).json({
            message: "shorted link is generated",
            shortUrl: `http://localhost:3001/${uniqueId}`,
            // link: `https://shorturl-snvl.onrender.com/api/${uniqueId}`,
            urlObj
        });
    }
}

 const getOriginalUrl = async (req, res) => {
    const shortUrl = req.params.shortUrl;

    const urlObj = await UrlModel.findOne({ shortUrl: shortUrl }); 
    console.log(urlObj)
    if (urlObj) {
        console.log(urlObj.longUrl);
        
        res.redirect(urlObj.longUrl);
    } else {
        res.status(404).json({ message: "Shortened URL not found" });
    }
}

export {shortTheUrl, getOriginalUrl};