import axios from "axios" 
const getData =  async (number) => {
    const {data:Users}=await axios("https://jsonplaceholder.typicode.com/users/"+number);
    console.log(Users);
    const {data:Posts}=await axios("https://jsonplaceholder.typicode.com/posts?id="+number);
    console.log(Posts);
}

export default getData;
