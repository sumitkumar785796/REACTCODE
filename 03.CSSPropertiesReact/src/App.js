import './App.css'
import Main from './components/Main'
function App() {
  //set the inline css 
  const myStyle = {
    color:'white',
    backgroundColor:'black',
    textAlign:"center"
  }
  return (
    <div>
      {/*use of the inline css properties using object */}
      <h1 style={myStyle}>This is heading tag</h1>
      {/*this is another use of the inline css properties */}
      <h2 style={{backgroundColor:'green',color:'white',textAlign:"center"}}>This is another heading tag</h2>
      <Main />
    </div>
  );
}

export default App;
