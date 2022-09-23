import { useContext } from "react";
import Alerta from "../../Alerta";
import PrediosContext from "./PrediosContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } =
        useContext(PrediosContext);

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
            <CampoEntrada id="txtNome" label="Nome" tipo="text"
                name="nome" value={objeto.nome}
                onchange={handleChange} requerido={true}
                readonly={false} tamanho={40}
                msgvalido="Campo nome OK"
                msginvalido="Campo nome é obrigatório" />
            <CampoEntrada id="txtDescricao" label="Descrição" tipo="text"
                name="descricao" value={objeto.descricao}
                onchange={handleChange} requerido={true}
                readonly={false} tamanho={40}
                msgvalido="Campo descrição OK"
                msginvalido="Campo descrição é obrigatório" />
            <CampoEntrada id="txtSigla" label="Sigla" tipo="text"
                name="sigla" value={objeto.sigla}
                onchange={handleChange} requerido={true}
                readonly={false} tamanho={4}
                msgvalido="Campo Sigla OK"
                msginvalido="Campo Sigla é obrigatório" />
        </Dialogo>
    )
}

export default Form;