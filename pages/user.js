import React from 'react'

function user({ users }) {
    return (
        <div>
            Home page User
            {
                users.map((data) => {
                 return(   <div key={data.id}>
                        <p>{data.name}</p>
                        <p>{data.email}</p>
                    </div>);
                })
            }
            
        </div>
    )
}

export default user
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()

    // Pass data to the page via props
    return {
        props:
        {
            users: data,
        },
    }
}
