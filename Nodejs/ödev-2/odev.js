const posts = [
    { isim: "ömer", text: "qwwerqrwtwrqrt" },
    { isim: "ali", text: "bevrfegergtrht" },
    { isim: "ahmet", text: "nbtevrrtbttebht4b" }
]

const listpost = () => {
    posts.map(item => {
        console.log(`${item.isim}:${item.text}`);
    })
}
const addpost = (data) => {
    posts.push(data)
}
function postlist(data) {
    return new Promise((resolve, reject) => {
        console.log("\nVeriler alınıyor")
        if (data)
            resolve(listpost())
        else
            reject("Veriler alınamadı")
    })
}


async function postup() {
    try {
        await postlist(true)
        addpost({ isim: process.argv[2], text: process.argv[3] })
        await postlist(true)
    }
    catch (error) {
        console.log(error)
    }

}
postup()