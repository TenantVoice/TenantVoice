import React from 'react';
import { NavLink } from "react-router-dom";
import { logUserOut } from '../adapters/auth-adapter';
import { useContext } from 'react';
import CurrentUserContext from '../contexts/current-user-context';
import { Box, Flex, Avatar, Heading, Text, IconButton, Image, Button, Grid } from '@chakra-ui/react';

const UsersLogo = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    const handleLogout = async () => {
        logUserOut();
        setCurrentUser(null);
        navigate('/');
    };

    return (
        <div className="group relative">
            <Avatar src={currentUser.picture} />
            <div className="absolute right-0 hidden group-hover:flex flex-col bg-white rounded-lg shadow-lg">
                <div className="px-4 py-3 text-gray-900">
                    <div>{currentUser.name}</div>
                    <div className="font-medium truncate">{currentUser.username}</div>
                </div>
                <ul className="py-2 text-gray-900 flex-col">
                    <li>
                        <NavLink to={`/users/${currentUser.id}/profile`} className="block px-4 py-2 hover:bg-gray-100 text-gray-900 ">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/users/${currentUser.id}`} className="block px-4 py-2 hover:bg-gray-100 text-gray-900 ">Settings</NavLink>
                    </li>
                    <li>
                        <button onClick={handleLogout} className='"block px-4 py-2 hover:bg-gray-100"'>Log Out</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UsersLogo;