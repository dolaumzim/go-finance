export const GO_FINANCE_TOKEN ='eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMywiZXhwIjoxNjkyNzEyMjE4fQ.C8sJk3SGf7fsfjGxAU0-eXiiDQ2iPY6sisRtGmIK1nw'

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