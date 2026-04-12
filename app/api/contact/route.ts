import { NextResponse } from 'next/server';

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Send via Formspree if configured, otherwise log
    const formspreeId = process.env.FORMSPREE_ID;
    if (formspreeId) {
      const formspreeResponse = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          message: body.message,
          _subject: `New inquiry from ${body.name} via derekensign.com`,
        }),
      });

      if (!formspreeResponse.ok) {
        console.error('Formspree error:', await formspreeResponse.text());
        return NextResponse.json(
          { error: 'Failed to send message.' },
          { status: 500 }
        );
      }
    } else {
      // Log to server console when Formspree is not configured
      console.log('=== New Contact Form Submission ===');
      console.log(`Name: ${body.name}`);
      console.log(`Email: ${body.email}`);
      console.log(`Message: ${body.message}`);
      console.log('===================================');
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request.' },
      { status: 400 }
    );
  }
}
