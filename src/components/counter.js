

import { useSelector,useDispatch } from "react-redux"
import { INCREMENT,DECREMENT } from "./redux/types";



const counter = () => {

 const count = useSelector (state => state.count)

const dispatch = useDispatch()


    return ( 
        <div>
            
            <button onClick={()=> dispatch(increment())}>+</button>
            <span>{count}</span>
            <button onClick={()=> dispatch(decrement())}>+</button>

            
        </div>
    )
}


export default counter