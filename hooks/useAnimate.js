import { useEffect } from 'react'

function useAnimate(vis, setVis) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setVis(!vis)
    }, Math.floor(Math.random() * 6000))

    return () => {
      clearTimeout(timer)
    }
  }, [vis])
}

export default useAnimate;