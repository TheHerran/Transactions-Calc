import { useState } from "react";
import DisplayTax from "../DisplayTax";
import Form from "../Form";
import "./style.css"

function TaxCalculator({ setIsOpen }) {
    const [calcResult, setCalcResult] = useState({})
    return (
        <section className="calcBox">
            <div className="calcBoxTitle">
            <h2>Calcular Taxas</h2>
            <button onClick={() => setIsOpen(false)}>X</button>
            </div>
            <div className="calcContent">
                <Form setCalcResult={setCalcResult} />
                <DisplayTax calcResult={calcResult} />
            </div>
        </section>
    )
}
export default TaxCalculator;