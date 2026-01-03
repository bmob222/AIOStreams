import { NextResponse } from 'next/server';

// Mock templates response for frontend-only deployment
export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      templates: [],
    },
  });
}
