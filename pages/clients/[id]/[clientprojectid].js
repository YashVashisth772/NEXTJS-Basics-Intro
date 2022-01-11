import {useRouter} from 'next/router'
export default function ClientProjectId(){
    const router = useRouter();
    const a = router.query;
    console.log('a',a)
    return(
        <>
            <h1>This is a cliet id page  a {router.query.clientprojectid} </h1>
        </>
    )
}