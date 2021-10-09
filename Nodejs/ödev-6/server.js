const koa = require('koa')
const koaRouter = require('koa-router')// importing Koa-Router
const app = new koa()
const router = new koaRouter()

router.get('index', '/', (context) => {
    console.log('Bir istek gönderildi.')
    context.body = "<h1>İndex sayfasına hoşgeldiniz</h1>"
})
router.get('about', '/About', (context) => {
    context.body = "<h1>About sayfasına hoşgeldiniz</h1>"
})
router.get('contact', '/Contact', (context) => {
    context.body = "<h1>Contact sayfasına hoşgeldiniz</h1>"
})

app.use(router.routes())
    .use(router.allowedMethods())// registering routes to the application
const port=3000;
app.listen(port, () => console.log(`Sunucu ${port} portunda başlatıldı.`))

