import React from 'react'
import { useState } from 'react'
const Random = () => {
  const [color, setColor] = useState('#000000')
  const [type, setType] = useState('hex')
  const selectRanodmNum = (length) => {
    const num = Math.floor(Math.random()*length)
    return num
  }
  const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  const generateHex = () => {
    let hexColor = "#"
    const length = hex.length
    for(let i=0; i<6; i++){
        hexColor += hex[selectRanodmNum(length)]
    }
    setType('hex')
    setColor(hexColor)
    
  }
  const generateRgb = () => {
    let rgb = 'rgb'
    const r =  selectRanodmNum(255)
    const g = selectRanodmNum(255)
    const b = selectRanodmNum(255)

    rgb += `(${r},${g},${b})`
    setType(rgb)
    setColor(rgb)
  }
  return (
    <div style={{
        height: "100vh",
        width: "100vw",
        backgroundColor : color
    }}>
        <button onClick={()=>generateHex()}className='btn'>Generate Hex Color</button>
        <button onClick={()=>generateRgb()} className='btn'>Generate Rgb</button>
    </div>
  )
}

export default Random