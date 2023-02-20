import React from 'react'
import CategoryCard from '../../components/CategoryCard'
import Image1 from "../../images/Chemistry.png";
import Image2 from "../../images/Currency.png";
import Image3 from "../../images/Engineering.png";
import Image4 from "../../images/Sports.png";
import Image5 from "../../images/Fun.png";
import Image6 from "../../images/Graphics.png";
import Image7 from "../../images/Physics.png";
import Image8 from "../../images/Math.png";
import Image9 from "../../images/Health.png";
import Image10 from "../../images/Weather.png";
import Image11 from "../../images/Unit.png";
import Image12 from "../../images/Love.png";
import Image13 from "../../images/Digital.png";
import Image14 from "../../images/Financial.png";



function Categories() {
  return (
    <>
   
    <h2 className='text-center fw-bold'>All Categories</h2>
    <div className='Categories-page'>
         <CategoryCard image={Image1} title="Chemistry" path="/Chemistry"/>
         <CategoryCard image={Image2} title="Currency" path="/Currency" />
         <CategoryCard image={Image3} title="Engineering" path="/Engineering" />
         <CategoryCard image={Image4} title="Sports" path="/Sports"/>
         <CategoryCard image={Image5} title="Fun"   path="/Fun"/>
         <CategoryCard image={Image6} title="Graphics" path="/Graphics"/>
         <CategoryCard image={Image7} title="Physics" path="/Physics"/>
         <CategoryCard image={Image8} title="Math" path="/Math"/>
         <CategoryCard image={Image9} title="Health" path="/Health"/>
         <CategoryCard image={Image10} title="Weather" path="/Weather"/>
         <CategoryCard image={Image11} title="Unit" path="/Unit"/>
         <CategoryCard image={Image12} title="Love" path="/Love"/>
         <CategoryCard image={Image13} title="Area" path="/Area"/>
         <CategoryCard image={Image14} title="Financial" path="/Financial"/>
    </div>
    </>
  )
}

export default Categories