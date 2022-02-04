import React from 'react';
import Main from "./components/Main"
import FEM from "./components/FEM"

class App extends React.Component{
constructor(props: any) {
super(props);
this.state = {};
}
render() {
  return (<>
<Main />
<FEM/>
  </>);
}
}

export default App;
