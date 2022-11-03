import api from "."

const list = async () => {
    try {
        const { data } = await api.get('/patients')

        return data
    } catch (err : any) {
        console.log(`----- API ERROR [${Date.now()}] -----`)
        console.log(err)
        console.log()
        return err.response.data
    }
}

type PatientCreateInput = {
    name : string
    phone : string
    cellphone : string
    email : string
    responsibleName : string
    responsiblePhone : string
}

const create = async (body : PatientCreateInput) => {
    try {
        const { data } = await api.post('/patients', body)

        return data
    } catch (err : any) {
        console.log(`----- API ERROR [${Date.now()}] -----`)
        console.log(err)
        console.log()
        return err.response.data
    }
}

const update = async (body : PatientCreateInput, id : string) => {
    try {
        const { data } = await api.put(`/patients/${id}`, body)

        return data
    } catch (err : any) {
        console.log(`----- API ERROR [${Date.now()}] -----`)
        console.log(err)
        console.log()
        return err.response.data
    }
}

const remove = async (id : string) => {
    try {
        const { data } = await api.delete(`/patients/${id}`)

        return data
    } catch (err : any) {
        console.log(`----- API ERROR [${Date.now()}] -----`)
        console.log(err)
        console.log()
        return err.response.data
    }
}

const findById = async (id : string) => {
    try {
        const { data } = await api.get(`/patients/${id}`)

        return data
    } catch (err : any) {
        console.log(`----- API ERROR [${Date.now()}] -----`)
        console.log(err)
        console.log()
        return err.response.data
    }
}

const patientService = {
    list,
    findById,
    create,
    remove,
    update
}

export default patientService