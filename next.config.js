/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
base-uri 'none';
media-src 'none';
child-src 'none';
frame-src 'none';
object-src 'none';
form-action 'none';
frame-ancestors 'none';
img-src 'self' blob: data:;
font-src 'self' data:;
manifest-src 'self';
style-src 'self' 'unsafe-inline';
connect-src 'self' ${
  process.env.NODE_ENV === 'production'
    ? 'https://vitals.vercel-insights.com'
    : ''
};
`;

const PermissionsPolicy = `
camera=(),
document-domain=(),
encrypted-media=(),
fullscreen=(),
geolocation=(),
microphone=(),
midi=(),
payment=(),
picture-in-picture=(),
publickey-credentials-get=(),
sync-xhr=(),
usb=(),
xr-spatial-tracking=()
`;

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/fonts/inter.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/gentium-plus-regular.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/gentium-plus-bold.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicons/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\n/g, ' '),
          },
          {
            key: 'Permissions-Policy',
            value: PermissionsPolicy.replace(/\n/g, ' '),
          },
        ],
      },
    ];
  },
};
