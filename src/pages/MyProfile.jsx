import React, { useState } from 'react';
import { assets } from './../assets/assets';

const MyProfile = () => {
    const [userData, setUserData] = useState({
        name: 'Edward Vincent',
        image: assets.profile_pic,
        email: 'richardjameswap@gamil.com',
        phone: '+1 123 456 7890',
        address: {
            line1: '57th Cross,Richmond',
            line2: 'Circle,Church Road,London'
        },
        gender: 'Male',
        dob: '2000-01-20'
    });

    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className="max-w-lg flex flex-col gap-2 text-sm">
            <img src={userData.image} alt="" className="w-36 rounded" />
            {isEdit ? (
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={userData.name}
                    onChange={e =>
                        setUserData(prev => ({ ...prev, name: e.target.name }))
                    }
                    className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
                />
            ) : (
                <p className="font-medium text-3xl text-neutral-800 mt-4">
                    {userData.name}
                </p>
            )}

            <hr className="bg-zinc-400 h-[1px] border-none" />

            <div>
                <p className="text-neutral-500 underline mt-3">
                    CONTACT INFORMATION
                </p>
                <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
                    <p className="font-medium">Email id :</p>
                    <p className="text-blue-500">{userData.email}</p>
                    <p className="font-medium">Phone : </p>
                    {isEdit ? (
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={userData.phone}
                            onChange={e =>
                                setUserData(prev => ({
                                    ...prev,
                                    name: e.target.phone
                                }))
                            }
                            className="bg-gray-100 max-w-52"
                        />
                    ) : (
                        <p className="text-blue-400">{userData.phone}</p>
                    )}
                    <p className="font-medium">Address : </p>
                    {isEdit ? (
                        <p>
                            <input
                                type="text"
                                name="line1"
                                id="line1"
                                value={userData.address.line1}
                                onChange={e =>
                                    setUserData(prev => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            line1: e.target.line1
                                        }
                                    }))
                                }
                                className="bg-gray-50"
                            />
                            <br />
                            <input
                                type="text"
                                name="line2"
                                id="line2"
                                value={userData.address.line2}
                                onChange={e =>
                                    setUserData(prev => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            line2: e.target.line2
                                        }
                                    }))
                                }
                                className="bg-gray-50"
                            />
                        </p>
                    ) : (
                        <p className="text-gray-500">
                            {userData.address.line1}
                            <br />
                            {userData.address.line2}
                        </p>
                    )}
                </div>
            </div>
            <div>
                <p className="text-neutral-500 underline mt-3">
                    BASIC INFORMATION
                </p>
                <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
                    <p className="font-medium">Gender : </p>
                    {isEdit ? (
                        <select
                            onChange={e =>
                                setUserData(prev => ({
                                    ...prev,
                                    gender: e.target.value
                                }))
                            }
                            value={userData.gender}
                            className="max-w-20 bg-gray-100"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    ) : (
                        <p className="text-gray-400">{userData.gender}</p>
                    )}

                    <p className="font-medium">Birthday</p>
                    {isEdit ? (
                        <input
                            type="date"
                            name="dob"
                            id="dob"
                            value={userData.dob}
                            onChange={e =>
                                setUserData(prev => ({
                                    ...prev,
                                    dob: e.target.value
                                }))
                            }
                            className="max-w-20 bg-gray-100"
                        />
                    ) : (
                        <p className="text-gray-400">{userData.dob}</p>
                    )}
                </div>
            </div>

            <div className="mt-10">
                {isEdit ? (
                    <button
                        onClick={() => setIsEdit(false)}
                        className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEdit(true)}
                        className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
