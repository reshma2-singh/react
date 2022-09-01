import  React from "react"
import {Context} from './ContextWrapper/UserProvider'

class ChildD extends React.Component{
  constructor(props){
    super(props)
    this.state={
   
    }
  }
  render(){
    const{name,age,addr} = this.context;
    console.log("all context",this.context)
    return(
      <div>
         <div>Name:{name}</div>
        <div>Age:{age}</div>
        <div>Address:{addr}</div>
        {/* <button onClick={()=>alterPeter('name','jack')}>Name Change</button>  */}
      </div>
    )
  }

}
ChildD.contextType=Context
export default ChildD;