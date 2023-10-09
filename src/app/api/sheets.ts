import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from 'next';
import 'dotenv/config'

const CREDENTIALS = JSON.parse(process.env.GOOGLE_MADAM_HUNGRY ?? "{}")

interface MyResponse {
    error: boolean;
    message?: string;
    data?: any;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<MyResponse>
) {
    try {
        const client = new google.auth.JWT(
            CREDENTIALS.client_email,
            undefined,
            CREDENTIALS.private_key,
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function (err, tokens) {
            if (err) {
                res.status(400).json({ error: true });;
                return;
            }

            const gsapi = google.sheets({ version: 'v4', auth: client });

            //CUSTOMIZATION FROM HERE
            const opt = {
                spreadsheetId: process.env.GOOGLE_SHEETS_ID,
                range: 'Sheet1!A2:A'
            };

            try {
                const data = await gsapi.spreadsheets.values.get(opt);
                res.status(200).json({ error: false, data: data.data.values });
            } catch (error) {
                // Handle error of type unknown
                const errorMessage = (error as Error).message || 'Unknown error';
                res.status(400).json({ error: true, message: errorMessage });
            }
        });
    } catch (error) {
        // Handle error of type unknown
        const errorMessage = (error as Error).message || 'Unknown error';
        res.status(400).json({ error: true, message: errorMessage });
    }
}
