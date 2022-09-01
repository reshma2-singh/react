import  React from "react"
import './App.css';
import UserProvider from "./components/ContextWrapper/UserProvider";
import ParentA from "./components/ParentA";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
   
    }
  }

  render(){
    return(
      <div>
        <UserProvider>
        <ParentA />
        </UserProvider>
      </div>
    )
  }

}
export default App;
