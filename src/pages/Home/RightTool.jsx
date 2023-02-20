import React from 'react'
import ToolMain from '../../components/ToolMain';
import ToolText from '../../components/ToolText';
import image from "../../images/lang-icon.svg"

function RightTool() {
    return (
        <div>
            <div className='right-tool '>

                 <ToolMain title="Tools in other language" image={image}/>
                 <ToolText title="Fraction Calculator" text1="ID" title1="Indonasian" text2="ID" title2="Indonasian"/>
                 <ToolText title="Age Calculator"/>
                 <ToolText title="Cylinder Calculator"/>
                 <ToolText title="Triangular Pyramid Calculator"/>
                 <ToolText title="Density Calculator" text1="RU PT" />
                 <ToolText title="AC to DC Calculator" text1="ES" />
            </div>
        </div>
    )
}

export default RightTool