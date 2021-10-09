const http = require('http')

const server = http.createServer((req, res) => {
    console.log("bir istek gönderildi")
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<head><meta charset="UTF-8"></head>')
        res.write('<h2>merhaba index sayfasına hosgeldiniz</h2>')
        res.end()
    }
    else if (url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write('<head><meta charset="UTF-8"></head>')
        res.write('<h2>merhaba hakkımızda sayfasına hoşgeldiniz</h2>')
        res.end()
    }
    else if (url === '/contact') {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write('<head><meta charset="UTF-8"></head>')
        res.write('<h2>merhaba contact sayfasına hoşgeldiniz</h2>')
        res.end()
    }
    else {
        res.write('<h2>404 Not Found</h2>')
        res.end()
    }
})

const port = 5000
server.listen(port, () => {
    console.log(`sunucu ${port} ile başlatıldı`)
})