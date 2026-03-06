import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <div>App</div>
    <Navbar value="hello">
      <h1>Hello,my name is devesh</h1>
      <h2>Hello,my name is devesh</h2>
      <h3>Hello,my name is devesh</h3>
    </Navbar>
    </>
  )
}

export default App



//Learning 📀
//Jaruri nahi hai ki hum function ko sirf ese hi call kar paaye </Navbar parameter = "hello"> , we can call function like this also in react => <Navbar parameter = "hello"></Navbar>
//Agar hum kisi component ko ese call karte hai🟨 <Navbar value="hello"><h1>Hello</h1></Navbar> 🟨to uske andar jo jo hum daatle hai wo us component ke children hote hai like here <h1> is the children of Navabar.
//And Ab agar hum Navbar.jsx me jaaye and waha "props" parameter ko dekhe toh ab usme sirf value = "hello" sirf yahi ek key-value pair nahi hoga usme ek "children:[]" yeh bhi key value pair hoga and in this array of children , all childrens are saved .
//yani agar hum children daal de parent me toh toh wo bhi as a parameter ki tarah kaam karte hai and wo childrens ek "children" naam ke array me save hote hai as key-value in props parameter.
//This is the concept of the children as props .

//To see this , just run this Children-As-Props and open console and see it .