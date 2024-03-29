import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';
import Popup from '../../components/Popup';
import Input from '../../components/Input';

function Pyramid() {
    const divRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Volume');
    // Volume
    const [length, setlength] = useState(null);
    const [width, setwidth] = useState(null);
    const [Height, setHeight] = useState(null);
    const [volume, setVolume] = useState(null);
    // volume
    const [BaseVolume, setBaseVolume] = useState(0);
    //    base length 
    const [baseLength, setBaseLength] = useState(0);
    // base width 
    const [BaseWidth, setBaseWidth] = useState(0);
    // Pyramid Height
    const [PyramidHeight, setPyramidHeight] = useState(0);
    // surface Area
    const [SurfaceArea, setSurfaceArea] = useState(0);
    // LSurfaceArea
    const [LSurfaceArea, setLSurfaceArea] = useState(0);
    // volume functionality
    // BaseWidth
    const [BaseArea, setBaseArea] = useState(0);
    const baseVolume = () => {
        if (length && width && Height !== null) {
            const bvolume = (length * width * Height) / 3;
            setBaseVolume(bvolume.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function VolumeReset() {
        if (length && width && Height !== 0) {
            setBaseVolume(0);
            setBaseLength(0);
            setBaseWidth(0);
            setLSurfaceArea(0);
            setSurfaceArea(0);
            setPyramidHeight(0);
            setVolume(0);
        setlength(0);
        setHeight(0);
        setwidth(0);
        }
        else {
            setShowPopup(true);
        }

    }
    // base length 
    const BaseLength = () => {
        if(volume && width && Height !== 0){
            const baselength = 3 * volume / (Height * width)
            setBaseLength(baselength.toPrecision(6))
        }
        else {
            setShowPopup(true);
        }
    }
    function BaseLengthReset() {
        if(Height && width && volume !== 0){
             setBaseVolume(0);
        setBaseLength(0);
        setBaseWidth(0);
        setLSurfaceArea(0);
        setSurfaceArea(0);
        setPyramidHeight(0);
        setVolume(0);
        setlength(0);
        setHeight(0);
        setwidth(0);
        }
       else{
        setShowPopup(0)
       }
    }
    // BaseWidth
    const basewidth = () => {
        if(length && volume && Height !== 0){
        const bwidth = 3 * volume / (Height * length);
        setBaseWidth(bwidth.toPrecision(6));
        }
        else{
            setShowPopup(true);
        }
    }
    function basewidthReset() {
        if (length && volume && Height !== 0) {
            setBaseVolume(0);
            setBaseLength(0);
            setBaseWidth(0);
            setLSurfaceArea(0);
            setSurfaceArea(0);
            setPyramidHeight(0);
            setVolume(0);
            setlength(0);
            setHeight(0);
            setwidth(0);
        }
        else {
            setShowPopup(true);
        }
    }
    //  Pyramid Height
    const pyramidheight = () => {
        if(length && width && volume !== 0){

        const pheight = 3 * volume / (length * width);
        setPyramidHeight(pheight.toPrecision(6));
    }
        else{
            setShowPopup(true);
        }
    }
    function pyramidheightReset() {
        if (length && width && volume !== 0) {
            setBaseVolume(0);
            setBaseLength(0);
            setBaseWidth(0);
            setLSurfaceArea(0);
            setSurfaceArea(0);
            setPyramidHeight(0);
            setVolume(0);
        setlength(0);
        setHeight(0);
        setwidth(0);
        }
        else {
            setShowPopup(true);
        }
    }
    const surfaceArea = () => {
        if(length && width && Height !== 0){

        const SArea = length * width + length * (Math.sqrt((width / 2) * (width / 2))) + Height * Height + width *
            (Math.sqrt((length / 2) * (length / 2))) + Height * Height;
        setSurfaceArea(SArea.toPrecision(6));}
        else{
            setShowPopup(true);
        }
    }
    function surfaceAreaReset() {
        if (length && width && Height !== 0) {
            setBaseVolume(0);
            setBaseLength(0);
            setBaseWidth(0);
            setLSurfaceArea(0);
            setSurfaceArea(0);
            setPyramidHeight(0);
            setVolume(0);
        setlength(0);
        setHeight(0);
        setwidth(0);
        }
        else {
            setShowPopup(true);
        }
    }
    const Lsurfacearea = () => {
        if(length && width && Height !== 0){

        const Lsarea = length * (Math.sqrt((width / 2) * (width / 2))) + Height * Height + width *
            (Math.sqrt((length / 2) * (length / 2))) + Height * Height;
        setLSurfaceArea(Lsarea.toPrecision(6));}
        else{
            setShowPopup(true);
        }
    }
    function LsurfaceareaReset() {
        if (length && width && Height !== 0) {
            setBaseVolume(0);
            setBaseLength(0);
            setBaseWidth(0);
            setLSurfaceArea(0);
            setSurfaceArea(0);
            setPyramidHeight(0);
            setVolume(0);
        setlength(0);
        setHeight(0);
        setwidth(0);
        }
        else {
            setShowPopup(true);
        }
    }
    const basearea = () => {
        if(length && width !== 0){

        const Barea = length * width;
        setBaseArea(Barea.toPrecision(6));}
        else{
            setShowPopup(true);
        }
    }
    function BaseAreaReset() {
        if (length && width  !== 0) {
            setBaseVolume(0);
            setBaseLength(0);
            setBaseWidth(0);
            setLSurfaceArea(0);
            setSurfaceArea(0);
            setPyramidHeight(0);
            setVolume(0);
            setlength(0);
            setHeight(0);
            setwidth(0);
        }
        else {
            setShowPopup(true);
        }
    }

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    // handle change
    const handleSelectChange = (event) => {
        setSelectCondition(event.target.value);
    }

    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle: 'calculator',
        onafterprint: () => alert("print success"),
    })
    useEffect(() => {
        if (textShow) {
            divRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [textShow]);
    return (
        <div>     <Container className='home-page '>
            <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                <NewCalculator title="Area of polygon calculate"
                    title1="remainder theorem Calculator" title2="law of science Calculator"
                    title3="scienthic division Calculator" title4="curl Calculator" />
            </div>
            <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'> Triangular Pyramid Surface Area Calculator</h2>
                <p>Select what you want to calculate and place the values in the given input boxes to find the surface area of a regular pyramid or any other quantities related to a pyramid.
                </p>
                <div className='polygon-calculator-div '>
                    <Row className='text-center my-3'>
                        <Col md={12} sm={12} xs={12} >
                            <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value="Volume" className='value-dropdown'>Volume</option>
                                <option value='Base Length' className='value-dropdown' >Base Length</option>
                                <option value="Base Width" className='value-dropdown'>Base Width</option>
                                <option value="Pyramid Height" className='value-dropdown' >Pyramid Height</option>
                                <option value="Surface Area" className='Surface Area' >Surface Area</option>
                                <option value="Lateral Surface Area" className='value-dropdown' >Lateral Surface Area</option>
                                <option value="Base Surface Area" className='value-dropdown' >Base Surface Area</option>
                            </select>
                        </Col>
                    </Row>

                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>






                        {/* ////////////////////////////////////  volume /////////////////////////////// */}


                        {
                            selectCondition === "Volume" && <>
                                <dt className='text-center'>Formula <span>V = (l * w * h) / 3</span></dt>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base Length(l) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                        <Input value={length}
                                            onChange={(e) => setlength(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base Width(b) :   </label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                        <Input value={width}
                                            onChange={(e) => setwidth(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Pyramid Height(h) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={Height}
                                            onChange={(e) => setHeight(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Volume </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{BaseVolume.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={baseVolume} />
                                    <ButtonA text="Reset" onClick={VolumeReset} />
                                    {showPopup && <Popup onClick={togglePopup} />}

                                </div></>}
                        {/* ////////////////////////////////////   Base Length  /////////////////////////////// */}
                        {
                            selectCondition === "Base Length" && <>
                                <dt className='text-center'>Formula <span>l = 3 * v/(h * w)</span></dt>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base Width (w) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={width}
                                            onChange={(e) => setwidth(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> pyrimed Height (h) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={Height}
                                            onChange={(e) => setHeight(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> volume (v) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={volume}
                                            onChange={(e) => setVolume(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Base Length </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{baseLength.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={BaseLength} />
                                    <ButtonA text="Reset" onClick={BaseLengthReset} />
                                    {showPopup && <Popup onClick={togglePopup} />}

                                </div></>}

                        {/* ///////////////////////////////////Base Width  /////////////////////////////// */}
                        {
                            selectCondition === "Base Width" && <>
                                <dt className='text-center'>Formula <span>W = 3 * v/(h * l)</span></dt>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base Length(l) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={length}
                                            onChange={(e) => setlength(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> pyrimed Height (h) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={Height}
                                            onChange={(e) => setHeight(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> volume (v) : </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={volume}
                                            onChange={(e) => setVolume(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Base Width :  </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{BaseWidth.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={basewidth} />
                                    <ButtonA text="Reset" onClick={basewidthReset} />
                                    {showPopup && <Popup onClick={togglePopup} />}

                                </div></>}
                        {/* //////////////////////////////////  Pyramid Height /////////////////////////////// */}
                        {
                            selectCondition === "Pyramid Height" && <>
                                <dt className='text-center'>Formula <span>h = 3 * v/(l * w)</span></dt>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base Length(l) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={length}
                                            onChange={(e) => setlength(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base Width (w) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={width}
                                            onChange={(e) => setwidth(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> volume (v) : </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={volume}
                                            onChange={(e) => setVolume(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Pyramid Height </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{PyramidHeight.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={pyramidheight} />
                                    <ButtonA text="Reset" onClick={pyramidheightReset} />
                                    {showPopup && <Popup onClick={togglePopup} />}

                                </div></>}
                        {/* /////////////////////////////////// Surface Area  /////////////////////////////// */}
                        {
                            selectCondition === "Surface Area" && <>
                                <dt className='text-center'>Formula <span>A = l * w + l * √ (w / 2)² + (h)² + w * √ (l / 2)² + (h)²</span></dt>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base Length(l) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={length}
                                            onChange={(e) => setlength(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base Width(b) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                        <Input value={width}
                                            onChange={(e) => setwidth(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Pyramid Height(h) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={Height}
                                            onChange={(e) => setHeight(e.target.value)} />
                                    </Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Volume </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{SurfaceArea.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={surfaceArea} />
                                    <ButtonA text="Reset" onClick={surfaceAreaReset} />
                                    {showPopup && <Popup onClick={togglePopup} />}

                                </div></>}
                        {/* //////////////////////////////////// Lateral Surface Area /////////////////////////////// */}
                        {
                            selectCondition === "Lateral Surface Area" && <>
                                <dt className='text-center'>Formula <span>A = l * √ (w / 2) ² + (h)² + w * √ (l / 2)² + (h)²</span></dt>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base Length(l) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={length}
                                            onChange={(e) => setlength(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base Width(b) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                        <Input value={width}
                                            onChange={(e) => setwidth(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Pyramid Height(h) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                        <Input value={Height}
                                            onChange={(e) => setHeight(e.target.value)} />
                                    </Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Volume </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{LSurfaceArea.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Lsurfacearea} />
                                    <ButtonA text="Reset" onClick={LsurfaceareaReset} />
                                    {showPopup && <Popup onClick={togglePopup} />}

                                </div></>}
                        {/* //////////////////////////////////// Base Surface Area  /////////////////////////////// */}
                        {
                            selectCondition === "Base Surface Area" && <>
                                <dt className='text-center'>Formula <span>l * w</span></dt>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base Length(l) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={length}
                                            onChange={(e) => setlength(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base Width(b) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={width}
                                            onChange={(e) => setwidth(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Volume </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{BaseArea.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={basearea} />
                                    <ButtonA text="Reset" onClick={BaseAreaReset} />
                                    {showPopup && <Popup onClick={togglePopup} />}

                                </div></>}
                    </div>


                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    <div>
                        {

                            textShow &&
                            <>
                                {selectCondition === "Volume" &&
                                    <div ref={divRef}>
                                        <Example heading="Volume"
                                            title="Step by step solution"
                                            step1="Data " step1heading=" length = 4, Base = 12 , pyramid Length = 20, volume=?"
                                            step2="Formula : " step2heading="(l * b * h ) / 3  "
                                            step3="Value :  " step3heading="4 * 12 * 20 "
                                            step4="volume = 320"
                                        /></div>
                                }
                                {selectCondition === "Base Length" &&
                                    <div ref={divRef}>
                                        <Example heading="Base Length"
                                            title="Step by step solution"
                                            step1="Data " step1heading=" width = 12 , Heigth = 20 , Volume = 3, Base Length = ?"
                                            step2="Formula: " step2heading="l = 3 * v / (h * w) "
                                            step3="Value " step3heading="3 * 3 / (20 * 12)"
                                            step4="volume = 0.0375"
                                        /></div>
                                }
                                {selectCondition === "Base Width" &&
                                    <div ref={divRef}>
                                        <Example heading="Base Width" title="Step by step solution"
                                            step1="Data " step1heading=" length = 4 , Heigth = 12 , Volume = 20, Base Length = ?"
                                            step2="Formula: " step2heading="w = 3 * v / (h * l) "
                                            step3="Value " step3heading="3 * 3 / (20 * 4)"
                                            step4="volume = 0.1125"
                                        /></div>
                                }
                                {selectCondition === "Pyramid Height" &&
                                    <div ref={divRef}>
                                        <Example heading="Pyramid Height "
                                            title="Step by step solution"
                                            step1="Data " step1heading=" length = 4 ,width = 12 , Volume = 20, Pyramid Height = ?"
                                            step2="Formula: " step2heading="w = 3 * v / (l * w) "
                                            step3="Value " step3heading="3 * 3 / (4 * 12)"
                                            step4="volume = 0.1125"
                                        /></div>
                                }
                                {selectCondition === "Surface Area" &&
                                    <div ref={divRef}>
                                        <Example heading="Surface Area"
                                            title="Step by step solution"
                                            step1="Data : " step1heading="length = 4, width = 12, height = 20, Area = ?"
                                            step2="Formula: " step2heading=" A = l * w + l * √ (w / 2)² + (h)² + w * √ (l / 2)² + (h)²"
                                            step3="Solution: " step3heading="A = 4 * 12 + 4 * √ (12 / 2)² + (20)² + 12 * √ (4 / 2)² + (20)²"
                                            step4="Area of triangle = 896"
                                        /></div>
                                }
                                {selectCondition === "Lateral Surface Area" &&
                                    <div ref={divRef}>
                                        <Example heading="Lateral Surface Area"
                                            title="Step by step solution"
                                            step1="Data : " step1heading="length = 4, width = 12, height = 20, Area = ?"
                                            step2="Formula: " step2heading=" A = l * √ (w / 2) ² + (h)² + w * √ (l / 2)² + (h)²"
                                            step3="Solution: " step3heading="A = 4 * √ (12 / 2)² + (20)² + 12 * √ (4 / 2)² + (20)² "
                                            step4="Area of triangle = 848"
                                        /></div>
                                }
                                {selectCondition === "Base Surface Area" &&
                                    <div ref={divRef}>
                                        <Example heading="Base Surface Area"
                                            title="Step by step solution"
                                            step1="Data : " step1heading="length = 12, width = 12, Area = ?"
                                            step2="Formula: " step2heading=" l*w"
                                            step3="Solution: " step3heading="12 *4"
                                            step4="Area = 48"
                                        /></div>
                                }
                            </>


                        }</div>

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            The pyramid area calculator automatically utilizes the relevant formula and calculates the area, volume, base, and other terms accordingly.<br />
                            It composes the required formula in the run time after gathering the values and that is why it is safe to say that it is also a surface area of a triangular pyramid formula calculator.<br />
                            <dt>Triangular Pyramid</dt><br />

                            Area of the base (A) = ½ * a * s<br />
                            Surface Area of Pyramid = A + ((3/2) sl)<br />
                            Volume of Pyramid = (1/6) abh<br />
                            <dt>Where,</dt>  <br />
                            a= apothem length<br />
                            s= side length<br />
                            sl= slant height of a pyramid<br />
                            abh area of base * height<br />

                            In case you don’t want to get stuck in equations, pyramid volume calculator can ease your calculations of pyramid.<br />
                            <dt>Square based pyramid</dt>

                            Area of the base (A) [s²]<br />
                            Surface Area of square Pyramid = [s² + 2sl]<br />
                            Volume of Square Pyramid = [(1/3)b²h ]<br />

                            The above equation can be used to calculate the square pyramid volume.<br />
                            <dt>Where,</dt> <br />
                            s= side length<br />
                            sl= slant height<br />
                            b= base<br />
                            h= height<br />
                            <dt>Pentagonal</dt> <br />
                            Area of Base : [(5/2)as]<br />
                            Surface Area of Pyramid : [ (5/2)as + (5/2)sl ]<br />
                            Volume of Pyramid : [ (5/6)abh]<br />
                            <dt>Where,</dt> <br />
                            As = area of side length<br />
                            sl= slant height<br />
                            abh area of base * height<br />
                            <dt>Hexagonal based pyramid</dt> <br />
                            Area of Base: [(6/2) as]<br />
                            Surface Area of Pyramid: [3as + 3sl]<br />
                            Volume of Pyramid: [abh]<br />
                            <dt>Where,</dt> <br />
                            As = area of side length<br />
                            sl= slant height<br />
                            abh area of base * height<br />
                            A pyramid is a polyhedron with one face as a base, a polygon, and all the other faces triangles meeting at a common polygon vertex as the apex. It is a structure where the upper surfaces are triangular and converge on one point.<br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container >
        </div >
    )
}

export default Pyramid