import { ImageResponse } from 'next/og'
import { BRAND } from '../../../lib/config'

export function GET(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #FFF8F0 0%, #FEF0E4 55%, #F5E6D3 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 88px',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circle top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-60px',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: '#E8B88A',
            opacity: 0.22,
          }}
        />
        {/* Decorative circle bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-60px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: '#D4A574',
            opacity: 0.18,
          }}
        />

        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#C17E4F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '16px',
              fontWeight: '700',
            }}
          >
            {BRAND.shortName}
          </div>
          <span style={{ fontSize: '22px', color: '#2D2A26', fontWeight: '600' }}>
            {BRAND.name}
          </span>
        </div>

        {/* Headline block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <span
            style={{
              fontSize: '19px',
              color: '#C17E4F',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            Webentwicklung · {BRAND.locations.join(' & ')}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.08 }}>
            <span style={{ fontSize: '80px', fontWeight: '400', color: '#2D2A26' }}>
              Landingpages,
            </span>
            <span style={{ fontSize: '80px', fontWeight: '400', color: '#C17E4F' }}>
              die überzeugen.
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
