import Link from 'next/link'
function About(){
    const options = [
        {
            id: '01',
            name: 'About1'
    },
    {
        id: '02',
        name: 'About2'
    }
]
    return(
        <div>
            <h1>About page</h1>
            {/* <Link href="/about/yash">Yash</Link> */}
            <ul>
                {options.map((op)=>(
                    <li key={op.id}>
                        <Link 
                            href={{
                                pathname: "/about/[id]",
                                query: { id: op.id},
                            }}
                        >{op.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default About