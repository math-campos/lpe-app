import { useContext } from "react";
import Alerta from "../../Alerta";
import SalasContext from "./SalasContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, listaPredios } =
        useContext(SalasContext);

    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

    return (
        <Dialogo id="modalEdicao" titulo="Prédio" idform="formulario"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtCodigo" label="Código" tipo="number"
                name="codigo" value={objeto.codigo}
                onchange={handleChange} requerido={false}
                readonly={true} tamanho={5}
                msgvalido=""
                msginvalido="" />
            <CampoEntrada id="txtNumero" label="Numero" tipo="number"
                name="numero" value={objeto.numero}
                onchange={handleChange} requerido={true}
                readonly={false} tamanho={5}
                msgvalido="Campo número OK"
                msginvalido="Campo número é obrigatório" />
            <CampoEntrada id="txtDescricao" label="Descrição" tipo="text"
                name="descricao" value={objeto.descricao}
                onchange={handleChange} requerido={true}
                readonly={false} tamanho={40}
                msgvalido="Campo descrição OK"
                msginvalido="Campo descrição é obrigatório" />
            <CampoEntrada id="txtCapacidade" label="Capacidade"
                tipo="number"
                name="capacidade" value={objeto.capacidade}
                onchange={handleChange} requerido={true}
                readonly={false} tamanho={5}
                msgvalido="Campo Capacidade OK"
                msginvalido="Campo Capacidade é obrigatório" />
            <div className="form-group">
                <label htmlFor="selectPredio" className="form-label">
                    Prédio
                </label>
                <select required className="form-control"
                    name="predio" value={objeto.predio} id="selectPredio"
                    onChange={handleChange}>
                    <option disable="true" value="">
                        (Selecione o prédio)
                    </option>
                    {listaPredios.map((predio) => (
                        <option
                            key={predio.codigo} value={predio.codigo}>
                            {predio.nome}
                        </option>
                    ))
                    }
                </select>
                <div className="valid-feedback">
                    Campo Prédio OK
                </div>
                <div className="invalid-feedback">
                    Selecione um prédio
                </div>
            </div>
        </Dialogo>
    )
}

export default Form;