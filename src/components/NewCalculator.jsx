import React from 'react'
import NewComponentsText from './NewComponentsText'

function NewCalculator(props) {


  
  return (
    <div className='lefttcol shadow  '>
        {  <p className='new-calculator-list-active'>New Calculator</p>}
        <NewComponentsText title={props.title} title1={props.title1} title2={props.title2} title3={props.title3} title4={props.title4}
        title5={props.title5} title6={props.title6}/>
    </div>
  )
}
export default NewCalculator