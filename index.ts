import ApiClient from './apiClient';

(async () => {
    const apiKey = 'YOUR_API_KEY_HERE'; // replace with your actual API key
    const client = new ApiClient(apiKey);

    try {
        const uuid = await client.getUUID();
        console.log('UUID:', uuid);

    } catch (error) {
        console.error('Error:', error);
    }
})();