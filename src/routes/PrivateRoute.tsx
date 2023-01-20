import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/types'

export default function PrivateRoute({ children }: any){

    const {currentUser} = useSelector((state: RootState) => state.user )

    return currentUser ? children : <Navigate to="/" replace />
}