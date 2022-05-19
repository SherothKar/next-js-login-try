 
 
import useSWR from 'swr';

const fetcher = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const datas = await response.json();
    return datas;
}

function DataSwr() {
const{data,error}= useSWR('dashboard',fetcher);
if(!data) return <h2>Loading...</h2>;
if(error) return "oops wrong!!";

return(
    <>
       <h1>Dashboard SWR </h1>
            check - {data[0].id}
            title - {data[1].title}
    </>
)
}
export default DataSwr;