import { NextResponse } from 'next/server';
import {connectToDatabase} from "../../../../database/mongoose";


export async function GET() {
    try {
        const conn = await connectToDatabase();
        return NextResponse.json({ status: 'success', db: conn.connection.name });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ status: 'error', message: (err as Error).message });
    }
}
