import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipient, Profile } from '../app/model';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { db } from "../DataLayer/FirestoreInit";
import { collection, getDocs, updateDoc, doc, getDoc } from "@firebase/firestore";

////TOO: documents specific to current logged-in user only

const initialState = {
    recipientData: [],
    signalsData: [],
    profileData: {},

}
type Recipients = Recipient[];


const uid: string = 'adPz97i9O6N4WOxE467OFMhKwgC3'; //anna's uuid for testing

/*Uses code from Medium tutorial example on firebase query with RTK Query (author: Eduardo Motta de Moraes)
https://blog.bitsrc.io/how-to-use-firestore-with-redux-in-a-react-application-f127d35adf3e */


export const firestoreApi = createApi({
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Recipients', 'Profile'],
    reducerPath: "firestoreApi",
    endpoints: (builder) => ({
        fetchRecipients: builder.query<Recipients, void>({
            async queryFn() {
                try {
                    const ref = collection(db, 'recipients');
                    const querySnapshot = await getDocs(ref);
                    let recipients: Recipients = [];
                    querySnapshot?.forEach((doc) => {
                        recipients.push({ id: doc.id, ...doc.data() } as Recipient)
                    },
                    );
                    return { data: recipients }
                } catch (error: any) {
                    return { error: error.message }
                }
            },
            providesTags: ['Recipients'],
        }),
        ///////////
        fetchProfile: builder.query<Profile, void>({
            async queryFn() {
                let profile:Profile = {
                    id: "",
                    firstname: "",
                    lastname: "",
                    contact: "",
                    uid: "",
                    email: "",
                    username: "",
                    city: "",
                    country: "",
                    createdAt: new Date()
                };
                try {
                    const docRef = doc(db, 'profile', uid);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data());
                        profile = { ...docSnap.data() };
                        return { data: profile }
                    }
                }
                catch (error: any) {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                    return { error: error.message };
                }
            },
            providesTags: ['Profile'],

        }),
        /////////////
        setRecipient: builder.mutation({
            async queryFn({ recipientId, details }) {
                try {
                    await updateDoc(doc(db, 'recipients', recipientId), {
                        details
                    });
                    return { data: null };
                }
                catch (error: any) {
                    return { error: error.message }
                }
            },
            invalidatesTags: ['Recipients'],
        })
    })
});
export const { useFetchRecipientsQuery, useSetRecipientMutation } = firestoreApi;



export const firestoreDataSlice = createSlice({
    name: "fireStoreData",
    initialState,
    reducers: {
        setRecipientData: (state: any, action: PayloadAction<Recipient[]>) => { state.recipientData = action.payload }

    }
});


export const { setRecipientData } = firestoreDataSlice.actions;

export default firestoreDataSlice.reducer;

