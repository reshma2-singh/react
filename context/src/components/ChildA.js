import  React from "react"
import ChildB from "./ChildB";


class ChildA extends React.Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  render(){
    return(
      <div>
        <ChildB peter={this.props.peter} alterPeter={this.props.alterPeter}/>
      </div>
    )
  }

}
export default ChildA;