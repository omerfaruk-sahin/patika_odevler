function circlearea(r){
    let pi =Math.PI 

    let area = pi*r**2
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area.toFixed(2)} `)

}

circlearea(process.argv[2])
