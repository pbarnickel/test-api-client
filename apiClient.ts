import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

class ApiClient {
    private client: AxiosInstance;

    constructor(apiKey: string) {
        this.client = axios.create({
            baseURL: process.env.BASE_URL,
            headers: {
                // 'Authorization': `Bearer ${apiKey}`
            }
        });
    }

    async getUUID(): Promise<string[]> {
        const response = await this.client.get<string[]>('/uuid');
        return response.data;
    }
}

export default ApiClient;