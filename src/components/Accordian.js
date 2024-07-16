import React from 'react'
import data from './data'
import {useState} from 'react'
const Accordian = () => {
    const [showItem,setShowItem] = useState(null)
    const[items, setItems] = useState([])
    const [multi, setMulti] = useState(false)
    const handleChange = (id) => {
        //console.log(id)
        setShowItem(id === showItem ? null : id)
    }
    const handleMultiSelection = (id) => {
        console.log("Multi selection enabled")
        let cpyItems = [...items]
        const findIndexOfId = cpyItems.indexOf(id)        
        if(findIndexOfId === -1){
            cpyItems.push(id)
        }else{
            cpyItems.splice(findIndexOfId,1)
        }
        setItems(cpyItems)
    }
    console.log(items)
    const multiSelection = () => {
        //console.log("multiSelection enabled")
        setMulti(!multi)
    }
  return (
    <div className='accordian'>
        <button onClick={multiSelection} className='btn'>Enable Multi Selection</button>
        {data.map(dataItem=>
            <div key={dataItem.id} className='item'>
                <div onClick = {multi ?()=> handleMultiSelection(dataItem.id) : ()=>handleChange(dataItem.id)}className='items'>
                <h3 className='title'>
                    {dataItem.title}
                    </h3>
                <span className=''>+</span>   
                </div> 
                <div className=''>
                    {
                        multi ? items.indexOf(dataItem.id) !== -1 &&
                        <div className=''>{dataItem.content}</div>
                        : showItem === dataItem.id &&
                        <div className=''>{dataItem.content}</div>
                    }
                </div>
            </div>
        )}
    </div>
  )
}

export default Accordian