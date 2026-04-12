import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Derek Ensign — Full-Stack Web Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#A4D825',
            }}
          />
          <span style={{ color: '#888', fontSize: '24px' }}>derekensign.com</span>
        </div>
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#ededed',
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Derek Ensign
        </h1>
        <p
          style={{
            fontSize: '32px',
            color: '#A4D825',
            margin: '16px 0 0 0',
          }}
        >
          Full-Stack Web Developer
        </p>
        <p
          style={{
            fontSize: '24px',
            color: '#888',
            margin: '16px 0 0 0',
          }}
        >
          Custom web apps, dashboards, and AI-powered tools. Austin, TX.
        </p>
      </div>
    ),
    { ...size }
  );
}
