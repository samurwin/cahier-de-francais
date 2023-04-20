import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ScrollToTop(props:any) {
  const router = useRouter()
  const location = router.pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
}