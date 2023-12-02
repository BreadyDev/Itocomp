import db from "../db";

const { NextResponse } = require("next/server");

export async function GET() {
    return NextResponse.json(db.professors);
}
