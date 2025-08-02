import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { AIAssistant } from '@/lib/ai/AIAssistant';
import { authOptions } from '@/lib/auth';

const aiAssistant = new AIAssistant();

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const response = await aiAssistant.handleCustomerQuery(
      message,
      session?.user?.id
    );

    return NextResponse.json({ response });
  } catch (error: any) {
    console.error('AI Chat Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process request' },
      { status: 500 }
    );
  }
}
