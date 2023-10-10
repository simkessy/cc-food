import { google } from "googleapis";
import 'dotenv/config'

const CREDENTIALS = JSON.parse(process.env.GOOGLE_MADAM_HUNGRY ?? "{}")

export type SheetResponse = Array<string>

export default function getSheetsData():Promise<Array<SheetResponse>> {
    return new Promise((resolve, reject) => {
        try {
            const client = new google.auth.JWT(
                CREDENTIALS.client_email,
                undefined,
                CREDENTIALS.private_key,
                ['https://www.googleapis.com/auth/spreadsheets']
            );

            const gsapi = google.sheets({ version: 'v4', auth: client });

            const opt = {
                spreadsheetId: process.env.GOOGLE_SHEETS_ID,
                range: 'FormResponses!A2:A'
            };

            gsapi.spreadsheets.values.get(opt, (err:any, res:any) => {
                if (err) {
                    const errorMessage = err.message || 'Unknown error';
                    reject(Error(errorMessage));
                } else {
                    resolve(res?.data.values);
                }
            });
        } catch (error) {
            const errorMessage = (error as Error).message || 'Unknown error';
            reject(Error(errorMessage));
        }
    });
}
