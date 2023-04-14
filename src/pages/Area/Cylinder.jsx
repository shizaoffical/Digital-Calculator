import React, { useRef, useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';
import Popup from '../../components/Popup';
import Input from '../../components/Input';

function Cylinder() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [radius, setRadius] = useState(null);
    const [height, setHeight] = useState(null);
    const [curverSurfaceArea, setcurverSurfaceArea] = useState(0);
    const [volumeOfSylinder, setvolumeOfSylinder] = useState(0);
    const [totalSurfaceArea, setTotalSurfaceArea] = useState(0);

    const calculate = () => {
        if(height && radius !== null){
           const curverSurfaceArea = 2 * Math.PI * radius * height;
        setcurverSurfaceArea(curverSurfaceArea.toPrecision(6))
        const volumeOfSylinder = Math.PI * radius * radius * height;
        setvolumeOfSylinder(volumeOfSylinder.toPrecision(6));
        const totalSurfaceArea = 2 * Math.PI * radius * (height + radius);
        setTotalSurfaceArea(totalSurfaceArea.toPrecision(6)); 
        }
        else{
            setShowPopup(true)
        }
    }

    function reset() {
    if(height && radius !== 0){
       setRadius(0);
        setHeight(0);
        setcurverSurfaceArea(0);
        setvolumeOfSylinder(0);
        setTotalSurfaceArea(0); 
    }
    else{
        setShowPopup(true)
    }
        
    }
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

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
                <h2 className='text-center fw-bold'>Cylinder calculate</h2>
                <p>Input the length and press calculate button to find the cube
                </p>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print"/>
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><label> Radius:</label></Col>
                            <Col md={6} sm={12} xs={12}>
                            <Input value={radius}
                                    onChange={(e) => setRadius(e.target.value)} />
                            </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><label> Height</label></Col>
                            <Col md={6} sm={12} xs={12}>
                            <Input value={height}
                                    onChange={(e) => setHeight(e.target.value)} />
                            </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Curved Surface Area of Cylinder(2πrh)</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{curverSurfaceArea.toString().substring(0, 6)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Volume of Cylinder(πr²h)</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{volumeOfSylinder.toString().substring(0, 6)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Total Surface Area of Cylinder(2πr(h+r))</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{totalSurfaceArea.toString().substring(0, 6)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate}text="Calculate"/>
                        <ButtonA onClick={reset} text="Reset"/>
                        {showPopup &&<Popup onClick={togglePopup} /> }
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <div ref={divRef}>
                        <Example heading="Cylinder Example" title="Find the volume, curved surface and total surface area of a cylinder with the given radius 5 and height 10"
                            step1="Step 1 : " step1heading=": Find the curved surface area(CSA)." step1value="CSA = 2πrh = 2 * 3.14 * 5 * 10 = 785.00 "
                            step2="Step 2 : " step2heading="Find the volume" step2value="Volume = πr²h = 3.14 * 5² * 10 = 3.14 * 25 * 10 = 314.00"
                            step3="Step 3 : " step3heading="Find the total surface area (TSA)." step3value="TSA = 2πr (h + r) = 2 * 3.14 * 5(10 + 5) = 6.28 * 5(15) =6.28*75 = 471  " />
                  </div>  }

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt>Volume of Cylinder = πr²h</dt>
                            <dt>Curved Surface Area (CSA) of Cylinder </dt><span>= 2πrh</span><br />
                            <dt>Total Surface Area (TSA) of Cylinder </dt><span> = 2πr (h + r)</span><br />
                            <dt>where,</dt><br />
                            a = side<br />
                            r = radius, h = height,π = 3.14
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container>
        </div >
    )
}

export default Cylinder