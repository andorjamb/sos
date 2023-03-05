import { createSlice } from "@reduxjs/toolkit";

/* export interface manageRecipientsState {
    id: string,
    createdAt: string,
    name: string,
    residents: string,
    call: string,
    address: string,
    city: string,
    postalCode: string,

}

const initialState: manageRecipientsState = {
    id: "",
    createdAt: "",
    name: "",
    residents: "",
    call: "",
    address: "",
    city: "",
    postalCode: "",
}; */

const initialState = {
    popoverState: false,

}

export const manageRecipientsSlice = createSlice({
    name: "manageRecipients",
    initialState,
    reducers: {
        togglePopover(state) { state.popoverState = !state.popoverState }


    }

});

export const { togglePopover } = manageRecipientsSlice.actions;
export default manageRecipientsSlice.reducer