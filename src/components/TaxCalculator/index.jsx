import { useState } from "react";
import DisplayTax from "../DisplayTax";
import Form from "../Form";

function TaxCalculator() {
    const [calcResult, setCalcResult] = useState({})
    return (
        <section className="calcBox">
            <Form setCalcResult={setCalcResult} />
            <DisplayTax calcResult={calcResult} />
        </section>
    )
}
export default TaxCalculator;