export default interface IPatient {
    id : string
    name : string
    phone : string
    cellphone : string
    email : string
    responsibleName : string
    responsiblePhone : string
    createdAt : string
    updatedAt : string
}

export interface IPatientMinimal {
    id : string
    name : string
    email : string
    createdAt : string
    updatedAt : string
}