import { useState, useRef, useEffect } from 'react'

export const MutableRef = () => {
  const [timer, setTimer] = useState(0)
  const interValRef = useRef<number | null>(null)

  const stopTimer = () => {
    if (interValRef.current) {
      window.clearInterval(interValRef.current) // we check if current exists stop and clear interval
    }
  }
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1) // It adds a number every second
    }, 1000)
    return () => {
      stopTimer() // when click the Down button call this function => stopTimer and stop timer
    }
  }, [])

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  )
}

