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
  handleChange(key,value){
    this.setState({[key]:value})
      }
  render(){
    return<Context.Provider value={this.state}>
{this.props.children}
    </Context.Provider>
  }

}
export default UserProvider;