import { NextResponse, NextRequest } from 'next/server';
import { headers } from "next/headers";


export const GET = async (request: NextRequest) => {
  const headersList = headers();
  const token = headersList.get("authorization");

  try {
    const response = await fetch(`http://localhost:5000/api/alerts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    });
    let apiResp = await response.json();
    console.log("apiResp", apiResp);

    if(apiResp.error){
      return NextResponse.json({ message: apiResp.error}, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Operation unsuccessful', data:apiResp }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error}, { status: 500 });
  }
};
