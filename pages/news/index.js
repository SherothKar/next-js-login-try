function News({ articles }) {
    return (
        <> <br/>    
            { 
                articles.map((article) => (
                    <div>
                     
                        {article.id}|{article.title}
                        <hr/>
                    </div>

                ))
            }
        </>
    )
}

export default News;

export async function getServerSideProps() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json();
    return {
        props: {
            articles: data.slice(0,3)
        }
    }

}


