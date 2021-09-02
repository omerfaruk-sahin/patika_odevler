let name = prompt("Adınız Nedir ?");
let Myname = document.querySelector("#myName");
Myname.innerHTML=`${name}` ;
function main() {
    let clock=document.querySelector("#myClock");
    const date = new Date();
    const [hour, minutes, seconds,day] = [date.getHours(), date.getMinutes(), date.getSeconds(),date.getDay()];
    const gün = ["Pazar","Pazartesi", "salı","Çarşamba","Perşembe" ," Cuma" ,"Cumartesi"];
    
    clock.innerHTML=`${hour<10 ? "0"+hour:hour}:
    ${minutes<10 ? "0"+minutes:minutes}:
    ${seconds<10 ? "0"+seconds:seconds}   ${gün[day]} `;
    setInterval(() => main(), 1000);
};

main()

