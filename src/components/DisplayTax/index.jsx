import "./style.css";

function DisplayTax({ calcResult }) {
    const results = Object.entries(calcResult)
    const days = Object.keys(calcResult)
    const values = Object.values(calcResult)

    return (
        <section className="displayBox">
            <div className="diplayTitle">
                <h2>Valor recebido:</h2>
            </div>
            <div className="displayList">
                {results?.length > 0 ?
                    <ul>
                        {
                            results.map((item, index) => <li key={index}>
                                {Number(item[0]) === 1 ?
                                    <>Amanhã:  <span>{values[index].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></>
                                    :
                                    <>Em {days[index]} dias: <span>{values[index].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></>}
                            </li>)
                        }
                    </ul>
                    :
                    <></>}
            </div>
        </section>
    )
}
export default DisplayTax;