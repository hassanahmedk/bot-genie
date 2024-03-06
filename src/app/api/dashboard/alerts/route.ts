import { NextResponse, NextRequest } from 'next/server';
import { headers } from "next/headers";


export const GET = async (request: NextRequest) => {
  const headersList = headers();
  const token = headersList.get("authorization");

  try {
    const response = await fetch(`https://bot-genie-server.vercel.app/api/alerts/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `${token}`,
      },
    });
    let apiResp = await response.json();

    if(apiResp.error){
      return NextResponse.json({ error: apiResp.error}, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Operation successful', data:apiResp }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error}, { status: 500 });
  }
};


export const POST = async (request: NextRequest) => {
  const headersList = headers();
  const token = headersList.get("authorization");
  const body = await request.json();

  try {
    const response = await fetch(`https://bot-genie-server.vercel.app/api/alerts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `${token}`,
      },
      body: JSON.stringify( body ),
    });
    let apiResp = await response.json();

    if(apiResp.error){
      return NextResponse.json({ error: apiResp.error}, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Operation successful', data:apiResp }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error}, { status: 500 });
  }
};
