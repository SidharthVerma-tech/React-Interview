import React from 'react'
import data from './data.js'
import { useState } from 'react'
const Accordian2 = () => {
    const [id, setId] = useState('')
    const [multi, setMulti] = useState(false)
    const [content, setContent] = useState([])
    const showSingle = (contentId) => {
        //const contentId = id
        id === contentId ? setId(null) : setId(contentId)
    }
    const showMultiple = (contentId) => {
        let cpyContent = [...content]
        const findIndexOfContent = cpyContent.indexOf(contentId)
        console.log(findIndexOfContent)
        if(findIndexOfContent === -1){
            cpyContent.push(contentId)
        }else{
            cpyContent.splice(findIndexOfContent, 1)
        }
        setContent(cpyContent)
    }
  // console.log(content)
    const handleMulti = () => {
        setMulti(!multi)
    }
  return (
    <div>
        {data && data.length > 0 ? (<div>
            <button onClick={handleMulti}className='btn'>Show Multiple</button>
            {data.map((dataItem) => {
                return <div>
                 <div key={dataItem.id}className='item'>
                 <div onClick={!multi ? ()=>showSingle(dataItem.id) : ()=> showMultiple(dataItem.id)} className='items'>
                 <h3 className=''>{dataItem.title}</h3>
                 <span className=''>+</span>
                 </div>
                 <div className='content'>
                     {multi ? (content.indexOf(dataItem.id) !== -1 && 
                         dataItem.content)

                     : (id === dataItem.id ? dataItem.content : null )
                     }
                     </div>
              </div>
              </div>
            }
               
                 
                
            )}
        </div>) : (<div>EmptyData</div>)}
    </div>
  )
}

export default Accordian2