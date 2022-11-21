import { useForm } from "react-hook-form";
import Api from "../../services/api";
import "./style.css";

function Form({setCalcResult}) {

    const { register, handleSubmit } = useForm();

    const submiting = (data) => {
        data.amount = data.amount/100
        if(data.days){
            data.days = data.days.split(",");
        }
        Api.post("", data)
            .then(res => setCalcResult(res.data))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit(submiting)} className="calcForm">
            <section className="inputBox">
                <div>
                    <small>Informe o valor de venda: </small>
                    <input type="number" name="amount" {...register("amount")} />
                </div>
                <div>
                    <small>Número de parcelas: </small>
                    <input type="number" name="installments" {...register("installments")} />
                </div>
                <div>
                    <small>Percentual de MDR: </small>
                    <input type="number" name="mdr" {...register("mdr")} />
                </div>
                <div>
                    <small>Prazo antecipado: </small>
                    <input type="text" name="therm" {...register("days")} />
                </div>
            </section>
            <button type="submit">Calcular</button>
        </form>
    )
}
export default Form;