import  React from "react"
import ChildD from "./ChildD";


class ChildC extends React.Component{
  constructor(props){
    super(props)
    this.state={
   
    }
  }
  render(){
    return(
      <div>
        <ChildD peter={this.props.peter} alterPeter={this.props.alterPeter}/>
      </div>
    )
  }

}
export default ChildC;