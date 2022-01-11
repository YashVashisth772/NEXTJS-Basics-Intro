import { useRouter } from "next/router";

export default function BlogPosts(){
    const router = useRouter();
    console.log('router',router.query)

    return(
        <div>
            <h1>This is inner blog page</h1>
        </div>
    )
}