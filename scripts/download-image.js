const https = require('https')
const fs = require('fs')
const path = require('path')

const url = 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1920&auto=format'
const outputPath = path.join(__dirname, '../public/images/services/pain-management.jpg')

// Ensure the directory exists
const dir = path.dirname(outputPath)
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
}

https
  .get(url, response => {
    const fileStream = fs.createWriteStream(outputPath)
    response.pipe(fileStream)

    fileStream.on('finish', () => {
      fileStream.close()
      console.log('Image downloaded successfully!')
    })
  })
  .on('error', err => {
    console.error('Error downloading image:', err.message)
  })
