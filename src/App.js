import { useState } from 'react';
import './App.css';
import AccordionItem from './accordianItem';

const data =[{
  'title': 'Item1',
  'content': "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
},
{
  'title': 'Item',
  'content': "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
},
{
  'title': 'Item3',
  'content': "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
}]
function App() {
  const[openIndex, setOpenIndex]= useState([])

  return (
    <div className="App">
      {data.map((ele, index)=>{
        return  <AccordionItem keyIn={index} title={ele.title} body={ele.content}  openIndex={index in openIndex} 
        setIsOpen={(indexKey)=>index in openIndex ?
          setOpenIndex(openIndex.filter((item)=> item !== indexKey))
        :setOpenIndex(openIndex=>[...openIndex,indexKey])}/>
      })}
     
    </div>
  );
}

export default App;
