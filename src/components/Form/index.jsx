import { useForm } from "react-hook-form";
import Api from "../../services/api";

function Form({setCalcResult}) {

    const { register, handleSubmit } = useForm()

    const submiting = (data) => {
        console.log('data: ', data);
        if(data.days){
            data.days = data.days.split(",")
        }
        Api.post("", data)
            .then(res => setCalcResult(res.data))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit(submiting)} className="calcForm">
            <section className="inputBox">
                <div className="calcInput">
                    <small>Informe o valor de venda: </small>
                    <input type="number" name="amount" {...register("amount")} />
                </div>
                <div className="calcInput">
                    <small>Número de parcelas: </small>
                    <input type="number" name="installments" {...register("installments")} />
                </div>
                <div className="calcInput">
                    <small>Percentual de MDR: </small>
                    <input type="number" name="mdr" {...register("mdr")} />
                </div>
                <div className="calcInput">
                    <small>Prazo de antecipação: </small>
                    <input type="text" name="therm" {...register("days")} />
                </div>
            </section>
            <button type="submit">Calcular</button>
        </form>
    )
}
export default Form;