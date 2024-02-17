import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const body = await request.json();
  const token = body.token;

  try {
    const response = await fetch(`http://localhost:5000/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    });
    let apiResp = await response.json();

    return NextResponse.json({ message: 'Operation successful', data:apiResp }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error}, { status: 500 });
  }
};
