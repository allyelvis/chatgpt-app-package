const axios = require('axios');

const API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = 'sk-K-key1emDUsKirgroy1sbNM4jnLhQE92XZlA-GyTwQT3BlbkFJIz02sjuALC4qaEj-4p3tspVECPTZIIpBlddPUSHEMA'; // Store this securely

const getChatGPTResponse = async (prompt) => {
    try {
        const response = await axios.post(API_URL, {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching response from ChatGPT:', error);
        throw error;
    }
};

module.exports = { getChatGPTResponse };
