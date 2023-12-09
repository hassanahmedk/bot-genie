import { NextResponse, NextRequest } from 'next/server';

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  console.log({ body });
  let apiResp;
  try {
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body }),
    });
    apiResp = await response.json();
    console.log("data", apiResp)
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({ message: 'Operation successful', apiResp:apiResp }, { status: 200 });
};
