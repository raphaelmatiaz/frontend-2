
import { useEffect } from "react"

const LifeCicleTest = () => {
    useEffect(() => {
        console.log('Componente montado')
        return () => {
            console.log('Componente desmontado')
        }
    }
    , [])
    return (
        <div>
            <h1>LifeCicleTest</h1>
        </div>
    )    
}

export default LifeCicleTest
