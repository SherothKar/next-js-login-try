import { useEffect, useState } from "react";

function ClientSideData() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    useEffect(() => {
        async function apicall() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const datas = await response.json();
            setData(datas.slice(0,2));
            setLoading(false);
        }
        apicall()
    }, [])
    if (loading) {
        return <h2>Loading.....</h2>
    }

    return (
        <>
            <h1>Dashboard </h1>
            check - {data[0].id}
            title - {data[1].title}
            {/* {
                data.map((item)=>(
                    <div key={item.id}>
{item.title}
{item.id}
                    </div>
                ))
            } */}
        </>
    )
}
export default ClientSideData;