function circlearea(r){
    let pi =Math.PI 

    let area = pi*r**2
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area.toFixed(2)} `)

}
function circleCircumference (r) {
    let pi =Math.PI 
    let perimeter=2*pi*r
    console.log(`Yarıçapı ${r} olan dairenin çevresi: ${perimeter.toFixed(2)} `)

}
module.exports = {
    circlearea,
    circleCircumference
}