import axios from "axios";
import { useState } from "react";
import "./index.css";

export default function Formulario(props) {
    // As variáveis começam vazias e são atualizadas conforme o usuário digita nos inputs
    const [titulo, setTitulo] = useState(""); 
    const [content, setContent] = useState("");

    const criarNote = (event) => {
        event.preventDefault(); // Evita que recarregue a página inteira automaticamente sem salvar os dados

        const data = {
            "title": titulo,
            "content": content
        }

        axios
            .post("http://localhost:8000/api/notes/", data)
            .then((response) => {
                props.loadNotes();
                setTitulo("");
                setContent("");
            })
            .catch((error) => console.log(error));
    }

    return (
        <form className="form-card" onSubmit={criarNote}>
            <input
                className="form-card-title"
                type="text"
                name="titulo"
                placeholder="Título"
                onChange={(event) => setTitulo(event.target.value)}
            />

            <textarea
                className="autoresize"
                name="detalhes"
                placeholder="Digite o conteúdo..."
                onChange={(event => setTitulo(event.target.value))}
            ></textarea>
            
            <button className="btn" type="submit">Criar</button>
        </form>
    );
}