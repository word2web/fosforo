export default function ({ redirect_to, title }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title || "Redirecting..."}</title>
      <meta http-equiv="refresh" content="0; url=${redirect_to}">
      <script defer src="https://va.vercel-scripts.com/v1/script.js" data-sdks="vercel-web-analytics"></script>
    </head>
    <body>
      <p>Redirecting to <a href="${redirect_to}">homepage</a>...</p>
    </body>
    </html>
  `;
}