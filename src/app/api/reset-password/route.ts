import { NextResponse, NextRequest } from 'next/server';

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  try {
    const response = await fetch(`http://localhost:5000/api/users/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( body ),
    });
    let apiResp = await response.json();
    console.log("data", apiResp);

    return NextResponse.json({ message: 'Operation successful', data:apiResp }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error}, { status: 500 });
  }
};
