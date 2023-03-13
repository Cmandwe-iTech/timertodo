import { useContext } from "react"
import userContext from '../context/contextAPI'
const SideBar = ()=>{
    const { Logout, history } = useContext(userContext)
    return(
        <>
        <nav style={{height:"100vh", "width":"30vh", "background":"grey" ,"position":"absolute", top:"145px"}}>
            <h3>To Do List</h3>
            <h4>history</h4>
            {
                history && history.map((items, i)=>{
                    return (
                        <div key={i}>
                            <p><span style={{color:"greenyellow"}}>{items.activity}</span> : <span>{items.time_taken}</span></p>
                        </div>
                    )
                })
            }
            <h4 onClick={()=>Logout()} style={{marginTop:"400px"}}>LogOut</h4>
        </nav>
        </>
    )
}
export default SideBar