import { NextResponse, NextRequest } from 'next/server';

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  console.log({ body });
  let apiResp;
  try {
    const response = await fetch(`http://localhost:5000/api/users/verify/${body.token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ body }),
    });
    apiResp = await response.json();
    console.log("data", apiResp)
    if(!apiResp.error){
      return NextResponse.json({ message: 'Operation successful', apiResp:apiResp }, { status: 200 });
    } else {
      return NextResponse.json({ error: apiResp.error }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error}, { status: 500 });
  }

};
