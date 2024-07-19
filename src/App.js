import './App.css';
import Accordian2 from './components/Accordian2';
//import Accordian2 from './components/Accordian2';
import ImageSlider from './components/ImageSlider/ImageSlider';
//import Accordian from './components/Accordian';
//import Random from './components/Random';

function App() {
  return (

    <div className="App">
      {/* <Accordian2/> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} pages={1}/>
    </div>
  );
}

export default App;
