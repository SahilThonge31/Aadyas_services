import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// This component detects a change in the page (pathname) and scrolls to the top.
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]) // This effect runs every time the pathname changes

  return null // This component doesn't render anything
}

export default ScrollToTop