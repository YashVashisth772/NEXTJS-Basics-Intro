import {useRouter } from 'next/router'
export default function About(){
    const router = useRouter();
    console.log('router', router.query)
    return(
        <div>
            <h1>About page</h1>
        </div>
    )
}