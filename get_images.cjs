const https = require('https');
https.get('https://collection.cloudinary.com/erfajaoa/cdd9b304ff2aa718bb8c8f3d36e0c125', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => { console.log(data); });
}).on("error", (err) => { console.log("Error: " + err.message); });
