import { useRouter } from 'next/router';
  
function PortfolioProjectPage() {
    const router = useRouter();
    console.log('router pathname',router.pathname);
    console.log('router ',router );


  return (
    <div>
      <h1>The Portolio page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
