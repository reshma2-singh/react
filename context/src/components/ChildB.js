import  React from "react"
import ChildC from "./ChildC";


class ChildB extends React.Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  render(){
    return(
      <div>
        <ChildC peter={this.props.peter} alterPeter={this.props.alterPeter}/>
      </div>
    )
  }

}
export default ChildB;