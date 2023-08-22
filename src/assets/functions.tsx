import { useNavigate } from "react-router-dom"

interface UserByID {
    name : string
    email : string
    id : string
    created_at : string
    updated_at : string
}

export const localSet = (data : UserByID) => {
    localStorage.setItem("Nome", data.name)
    localStorage.setItem("E-mail", data.email)
    localStorage.setItem("Id", data.id)
    localStorage.setItem("Criado em", data.created_at)
    localStorage.setItem("Atualizado em", data.updated_at)
}

export const capitalize = (word :string) => {
    
    const arr = word.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
    return arr.join(" ");
}