import { useState, useEffect } from "react"
import styles from './Counter.module.css'

const Counter = () => {

    // const [initialCount, setInitlaCount] = useState(0)
    const [count, setCount] = useState(0)
    const [counting, setCounting] = useState(false)
    const [pausedValue, setPausedValue] = useState(0)

    useEffect(() => {
        setCount(0)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
          setCount(count + 1);
        }, 1000);
      
        return () => clearInterval(interval);
      }, [count]);
      

    const StartStop = () => {
        if (counting) {
            setPausedValue(count)
            setCounting(false)
        } else {
            setCount(pausedValue)
            setCounting(true)
        }
    }
    const Reset = () => {
        setCount(0)
        setCounting(true)
        setCounting(false)
    }

    return(
        <div className={styles.counterWrapper}>
            <>
                {counting ? <p className={styles.counterValue}>{count}</p> : <p className={styles.counterValue}>{pausedValue}</p>}
            </>
            <p className={styles.counterValue}></p>
            <div className={styles.buttonsWrapper}>
                <button className={styles.counterButton} onClick={Reset}>Reset</button>
                <button className={styles.counterButton} onClick={StartStop}>{counting ? "Pause" : "Start"}</button>
            </div>
        </div>
    )

}

export default Counter