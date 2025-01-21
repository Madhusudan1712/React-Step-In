import Clicks from "./components/Clicks/Clicks";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import "./components/ColorPicker/ColorPicker.css";
import Counter from "./components/Counter/Counter";
import './components/Counter/Counter.css'
import DigitalClock from "./components/DigitalClock/DigitalClock";
import './components/DigitalClock/DigitalClock.css'
import Hooks from "./components/HooksComps/Hooks";
import List from "./components/List/List"
import './components/List/List.css'
import OnChange from "./components/OnChange/OnChange";
import Title from "./components/Title/Title";
import ToDoList from "./components/ToDoList/ToDoList";
import './components/ToDoList/ToDoList.css'
import UpdateArray from "./components/UpdateArray/UpdateArray";
import './components/UpdateArray/UpdateArray.css'
import UpdateObj from "./components/UpdateObject/updateObj";
import Component_A from "./components/UseContext/ComponentA";
import './components/UseContext/Component.css'
import UseEfffect from "./components/UseEffect/useEffect";
import UseEffect2 from "./components/UseEffect/useEffect2";
import UseRef from "./components/UseRef/UseRef";
import StopWatch from "./components/StopWatch/StopWatch";
import './components/StopWatch/StopWatch.css'
import LowBattery from "./components/LowBattery/LowBattery";
import './components/LowBattery/LowBattery.css'
function App() {

  // const mobiles = [
  //   {id:1, brand: "Motorola", price: 12500},
  //   {id:2, brand: "Samsung", price: 20000},
  //   {id:3, brand: "Iphone", price: 60000},
  //   {id:4, brand: "Nothing", price: 45000},
  //   {id:5, brand: "G-Pixel", price: 160000}
  // ];

  // const bike = [
  //   {id:1, brand: "Hero", price: 69900},
  //   {id:2, brand: "TVS", price: 125000},
  //   {id:3, brand: "Honda", price: 90000},
  //   {id:4, brand: "Bajaj", price: 75000},
  //   {id:5, brand: "Mahendra", price: 63000}
  // ];

  return(
    <>
      {/* <Title/> */}
      {/* <Student name="Mobby" age={24} status={true}/>
      <Student name="Amogh" age="24" status={true}/>
      <Student  age={23} status={true}/> */}
      {/* <List items={mobiles} catagoury="Electronic devices" />
      <List items={bike} catagoury="Vehicals" /> */}
      {/* <Clicks/> */}
      {/* <Hooks/> */}
      {/* <Counter/> */}
      {/* <OnChange/> */}
      {/*<ColorPicker/>*/}
      {/* <UpdateObj/> */}
      {/* <UpdateArray/> */}
      {/* <ToDoList/> */}
      {/* <UseEfffect/> */}
      {/* <UseEffect2/> */}
      {/* <DigitalClock/> */}
      {/* <Component_A/> */}
      {/* <UseRef/> */}
      {/* <StopWatch/> */}
      <LowBattery/>
    </>
  )
}

export default App
