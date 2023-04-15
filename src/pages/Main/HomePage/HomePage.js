import React from "react"
import './HomePage.css'
import TransparentDiv from "../../../component/TransparentDiv/TransparentDiv"

const HomePage = () => {
  const transparentDivStyle = {
    height: '17%',
    backgroundPositionY: '30%',
  }
  const divStyle1 = {
    height: '12%',
    backgroundColor: 'white',
  }
  const divStyle2 = {
    height: '12.3%',
    backgroundColor: 'black',
  }
  const divStyle3 = {
    height: '19.5%',
    backgroundColor: 'blue',
  }
  const divStyle4 = {
    height: '10.3%',
    backgroundColor: 'black',
  }
  const divStyle5 = {
    height: '17%',
  }

  return (
    <div className='home-page'>
      <TransparentDiv className='grid-item solid-div' divStyle={transparentDivStyle} />
      <div className='grid-item solid-div' style={divStyle1} />
      <div className='grid-item solid-div' style={divStyle2} />
      <div className='grid-item solid-div' style={divStyle3} />
      <div className='grid-item solid-div' style={divStyle4} />
      <TransparentDiv className='grid-item solid-div' divStyle={divStyle5} />
    </div >
  )
}

export default HomePage