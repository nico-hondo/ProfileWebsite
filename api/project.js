import axios from "axios";

export default async function handler(req, res){
    try{
        
        const response = await axios.get(
            `https://api.airtable.com/v0/${process.env.BASE_ID}/${process.env.TABLE_ID}?sort[0][field]=year_create&sort[0][direction]=asc`,
            {
                headers: {
                    'Authorization': `Bearer ${process.env.AIRTABLE_TOKEN}`,
                },
            }
        );
        res.status(200).json(response.data.records);
    }   
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}