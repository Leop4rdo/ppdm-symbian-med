import { AxiosError } from "axios"
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

const patientService = {
    list,
    create
}

export default patientService