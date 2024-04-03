import { useState} from "react";
    export default function Main (){
        const[nome, setNome] = useState("");
        const[telefone, setTelefone] = useState("");
        const[listataContatos, setlisContatos] = useState
        const registrar = (event) => {
            event.preventDefalt();
            setlisContatos([...listataContatos,
            {
                nomeSalvo: nome,
                telefoneSalvo: telefone
            }
        ]);
        };
        console.table(listataContatos)
        return(
            <main>
            <form action="">
              <label htmlFor="nome">Nome:</label>
            <input
            type="text"
            name="nome-contato"
            id="nome"
            onChange={(event)=> setNome(event.target.value)}/>
            {nome}

            <label> telefone
                <input
                type="tel"
                name="telefone-contato"
                id="telefone"
                onChange={(event)=> setTelefone(event.target.value)}
                />
        </label>
        <label>Idade:
            <input type="number"
            name="idade-contato"
            id="idade" value={idade}
            onChange={ (event)=> setIdade(event.target.value)}/>
                </label>
        
        <button> Enviar </button>
        </form>
        </main>
            
        );
    }
    