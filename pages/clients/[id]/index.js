import {useRouter } from 'next/router'

export default function ClientsListPage(){
    const router = useRouter();
    
    console.log('router.query',router.query)
    return(
        <div>
            <h1>This is a specific client page</h1>
        </div>
    )
}