import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();
const buildDir = path.join(__dirname, 'build');

function main() {
	const headers = `/*
   X-Frame-Options: DENY
   X-XSS-Protection: 1; mode=block
   X-Content-Type-Options: nosniff
   Referrer-Policy: same-origin
   Permissions-Policy: accelerometer=(), autoplay=(), camera=(), document-domain=(), encrypted-media=(), fullscreen=(), gyroscope=(), interest-cohort=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()
   Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
   Content-Security-Policy: default-src 'none'; base-uri 'none'; frame-ancestors 'none'; frame-src 'none'; script-src 'self'; font-src 'self'; style-src 'self' 'unsafe-inline'; form-action 'none'; object-src 'none';
   cache-control: public
   cache-control: immutable
   cache-control: max-age=31536000
 `;

	const headersFile = path.join(buildDir, '_headers');
	fs.writeFileSync(headersFile, headers);
}

main();
