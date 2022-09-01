import  React from "react"
import ChildA from "./ChildA";


class ParentA extends React.Component{
  constructor(props){
    super(props)
    this.state={
     
    }
  }
  render(){
    return(
      <div>
        <ChildA peter={this.props.peter} alterPeter={this.props.alterPeter}/>
      </div>
    )
  }

}
export default ParentA;