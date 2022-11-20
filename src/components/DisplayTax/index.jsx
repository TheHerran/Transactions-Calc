function DisplayTax({ calcResult }) {
    const results = Object.entries(calcResult)
    const days = Object.keys(calcResult)
    const values = Object.values(calcResult)

    return (
        <section className="displayBox">
            <div className="diplayTitle">
                <h3>Valor recebido:</h3>
            </div>
            <div className="displayList">
                {results?.length > 0 ?
                    <ul>
                        {
                            results.map((item, index) => <li key={index}>
                                {Number(item[0]) === 1 ?
                                    <>Amanhã:  <span>R$ {values[index]}</span></>
                                    :
                                    <>Em {days[index]} dias: <span>R$ {values[index]}</span></>}
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