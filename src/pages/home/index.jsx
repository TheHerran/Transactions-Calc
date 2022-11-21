import { useState } from "react";
import TaxCalculator from "../../components/TaxCalculator";
import "./style.css";


function Home() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <main>
            {isOpen ?
                <article>
                    <TaxCalculator setIsOpen={setIsOpen} />
                </article>
                :
                <>
                    <div>
                        <h2>Welcome to FinTech</h2>
                        <button onClick={() => setIsOpen(!isOpen)}>Open Calculator</button>
                    </div>
                </>
            }
        </main>
    )
}
export default Home;