import React from 'react'
import { Link } from 'react-router-dom'
function ToolText(props) {
    return (
        <>
            <strong style={{ fontSize: "18px" }}>{props.title}</strong>
            <div>
                <p className='d-flex flex-wrap'>
                    <aside className='tool-text-aside'> languages: </aside>
                    [
                    {props.text1 &&
                        <abbr style={{ color: "#F69C26" }} data-tooltip="pakistak">
                            <Link to={`${props.path}`} className="tool-text " data-toggle="tooltip" data-placement="top" title={props.title1}
                            target="_blank">
                                {props.text1}
                            </Link>
                        </abbr>},
                    {props.text2 &&
                        <abbr style={{ color: "#F69C26" }}>
                            <Link to={`${props.path}`} className="tool-text" datatoggle="tooltip" placement="top" title={props.title2}
                            target="_blank">
                                {props.text2}
                            </Link>
                        </abbr>},
                    {props.text3 &&
                        <abbr style={{ color: "#F69C26" }}>
                            <Link to={`${props.path}`} className="tool-text" datatoggle="tooltip" placement="top" title={props.title3}
                            target="_blank">
                                {props.text3}
                            </Link>
                        </abbr>},
                    {props.text4 &&
                        <abbr style={{ color: "#F69C26" }}>
                            <Link to={`${props.path}`} className="tool-text" datatoggle="tooltip" placement="top" title={props.title4}
                            target="_blank">
                                {props.text4}
                            </Link>
                        </abbr>},
                    {props.text5 &&
                        <abbr style={{ color: "#F69C26" }}>
                            <Link to={`${props.path}`} className="tool-text" datatoggle="tooltip" placement="top" title={props.title5}
                            target="_blank">
                                {props.text5}
                            </Link>
                        </abbr>},
                    {props.text6 &&
                        <abbr style={{ color: "#F69C26" }}>
                            <Link to={`${props.path}`} className="tool-text" datatoggle="tooltip" placement="top" title={props.title6}
                            target="_blank">
                                {props.text6}
                            </Link>
                        </abbr>},
                    {props.text7 &&
                        <abbr style={{ color: "#F69C26" }}>
                            <Link to={`${props.path}`} className="tool-text" datatoggle="tooltip" placement="top" title={props.title7}
                            target="_blank">
                                {props.text7}
                            </Link>
                        </abbr>},
                    {props.text8 &&
                        <abbr style={{ color: "#F69C26" }}>
                            <Link to={`${props.path}`} className="tool-text" datatoggle="tooltip" placement="top" title={props.title8}
                            target="_blank">
                                {props.text8}
                            </Link>
                        </abbr>},
                    {props.text9 &&
                        <abbr style={{ color: "#F69C26" }}>
                            <Link to={`${props.path}`} className="tool-text" datatoggle="tooltip" placement="top" title={props.title9}
                            target="_blank">
                                {props.text9}
                            </Link>
                        </abbr>},
                    {props.text10 &&
                        <abbr style={{ color: "#F69C26" }}>
                            <Link to={`${props.path}`} className="tool-text" datatoggle="tooltip" placement="top" title={props.title10}
                            target="_blank">
                                {props.text10}
                            </Link>
                        </abbr>}
                    ]</p>
            </div>
        </>
    )
}

export default ToolText