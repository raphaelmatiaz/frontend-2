import { useSelector } from 'react-redux'
impport { RootState } from './store'

const Contador = () => {
    const counter = useSelector((state: RootState) => state.counter.value)
}