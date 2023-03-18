
export interface Guser {
    name: string
    email: string
    picture: string
    iat: number
    iss: string
    jti: string
    sub: number | string
}

export type LoadingState = boolean

export interface Profile {
    id: number | string
    firstname: string,
    lastname: string,
    contact: number | string | null,
    altcontact?: number | string | null,
    occupation?: string
    dob?: Date | null,
    uid: string,
    email: string,
    username: string,
    addressline1?: string,
    addressline2?: string,
    city: string,
    state_province?: string,
    postcode?: string
    country: string
    createdAt: Date | null
}

export interface Recipient {
    id: string,
    createdAt?: string,
    name: string,
    address?: string,
    phone: string,
    city?: string,
    postcode?: string,

}

export interface signalsList {
    signalId: string,
    uid: string,
    name: string,
    recipientId: string[],
    presetMsg: string,
    cstTextId?: string,
    createdAt?: Date
}

interface geoCodes {
    lat: number,
    lon: number
}

export interface signals {
    signalsId: string,
    uid: string,
    createdAt: Date,
    geolocation: geoCodes
}

export interface customTexts {
    cstTextId: number
    message: string
    title: string
}