import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, timestamp } = await request.json();
    
    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    
    console.log('Received email:', email);
    
    // Send notification to you (using YOUR domain!)
    const notificationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@pangolinsecurity.com',
        to: ['james.badi@pangolinsecurity.com'],
        subject: 'New Pangolin Security Waitlist Signup!',
        html: `<h2>New signup: ${email}</h2><p>Timestamp: ${timestamp}</p>`,
      }),
    });
    
    // Send confirmation to the user (using YOUR domain!)
    const confirmationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@pangolinsecurity.com',
        to: [email],
        subject: 'Welcome to Pangolin Security! 🦎',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e293b 0%, #1e40af 100%); padding: 30px; text-align: center; color: white;">
              <h1>🦎 Welcome to the Family!</h1>
              <p>Thank you for joining the Pangolin Security waitlist</p>
            </div>
            <div style="padding: 30px; background: white;">
              <h2 style="color: #1e293b;">You're In!</h2>
              <p>You're now part of our exclusive early adopter community protecting families from the $5 billion scam epidemic.</p>
              
              <div style="background: #fbbf24; padding: 20px; border-radius: 8px; text-align: center; color: white; margin: 20px 0;">
                <h3>🎁 Your Early Adopter Benefits</h3>
                <p><strong>50% off launch pricing + exclusive beta access</strong></p>
              </div>
              
              <h3>What's Next?</h3>
              <ul>
                <li><strong>Q1 2026:</strong> Beta testing begins</li>
                <li><strong>Q2 2026:</strong> Public launch (you get early access!)</li>
                <li><strong>Q3 2026:</strong> Advanced features rollout</li>
              </ul>
              
              <p style="color: #666; font-size: 14px;">
                Questions? Visit <a href="https://pangolinsecurity.com">pangolinsecurity.com</a><br>
                Best regards,<br>The Pangolin Security Team
              </p>
            </div>
          </div>
        `,
      }),
    });
    
    console.log('Notification sent:', notificationResponse.status);
    console.log('Confirmation sent:', confirmationResponse.status);
    
    if (notificationResponse.ok && confirmationResponse.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Email issue' }, { status: 500 });
    }
    
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}