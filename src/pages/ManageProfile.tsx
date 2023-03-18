import React from 'react';
import RegistrationForm from '../Registration/ProfileForm';
import { Guser, Profile } from '../app/model';
import { useSelector } from 'react-redux';


const ManageProfile = () => {
    const user = useSelector((state: any) => state.userSlice.user);
    return (
        <div>
            <h1>Manage Profile</h1>

            {user.name === "" ? (<><p>Please sign in to view your profile</p>
            </>) : (<>
                <p>{`Hi ${user.name}`}</p>
            </>)


            }

        </div>
    );
};

export default ManageProfile;