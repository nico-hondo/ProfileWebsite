const axios = require('axios');

module.exports = async function handler(req, res){
    try{
        const response = await axios.get(
            `https://api.airtable.com/v0/${process.env.BASE_ID}/${process.env.EXPERIENCE_TABLE_ID}?sort[0][field]=year_field&sort[0][direction]=asc`, 
            {
                headers: {
                    Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
                }   
            },
            console.log("Experience Api Response",process.env.EXPERIENCE_TABLE_ID)
        );
        res.status(200).json(response.data.records);
    }
    catch (error) {
        console.log("Airtable API Error: ", error.response?.data);
        res.status(500).json({ error: error.response?.data || error.message });
    }
}