import  React from "react"
export const Context = React.createContext()
class UserProvider extends React.Component{
  constructor(props){
    super(props)
    this.state={
        name:'peter',
        age:'69',
        addr:'Norway'
    }
  }
//   handleChange(key,value){
//     this.setState({[key]:value})
//       }
      handleChangeMul(obj){
        this.setState(obj)
      }
  render(){
    return<Context.Provider value={[this.state,(obj)=>this.handleChangeMul(obj)]}>
{this.props.children}
    </Context.Provider>
  }

}
export default UserProvider;