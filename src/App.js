
import './App.css';
import { Answer } from './component/Answer';

function App() {
  let mobile=["Android","Blackberry","iPhone","Window Phone"];
  let newmobile=mobile.map((mobiles) =>
  {
    return<li>{mobiles}</li>
  })
  let man=["Samsung","HTC","Micromax","Apple"];
  let newman=man.map((man1) =>
  {
    return<li>{man1}</li>
  })

  return (
   <div className='App'>
     <Answer Name={newmobile} second={newman}/>
   </div>
      
       
       // <Hello/>
       // <Answer/>
     
  );
}

export default App;
