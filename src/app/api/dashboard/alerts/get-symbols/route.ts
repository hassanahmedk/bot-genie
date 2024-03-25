import { NextResponse, NextRequest } from 'next/server';
import { headers } from "next/headers";


export const GET = async (request: NextRequest) => {
  const headersList = headers();
  const exchange = headersList.get("exchange");
  const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjQ5NDY2ODg0OThkNzVkYTM2ZmVhNWIyIiwiaWF0IjoxNzAzMzE0ODU0LCJleHAiOjMzMjA3Nzc4ODU0fQ.TTxZN2c6VMDMV6WUdOGwzoFxpbtriUOS6TkERBd2LFc";
  console.log("exc", exchange)
  try {
    const response = await fetch(`https://api.taapi.io/exchange-symbols?secret=${API_KEY}&${exchange === "stocks" ? "type" : "exchange"}=${exchange}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let apiResp = await response.json();
    console.log("Symbols", apiResp)
    if(apiResp.error){
      return NextResponse.json({ error: apiResp.error}, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Operation successful', data:apiResp }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error}, { status: 500 });
  }
};
