import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import ChatPage from './pages/ChatPage/ChatPage';
import { selectUserKey } from './utils/storage/localStorage';

const App = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        //Проверям, "залогинен" ли пользователь уже
        let userKey = selectUserKey();
        userKey ? navigate('/chat') : navigate('/');
    }, [])

    return (
        <Routes>

            <Route path='/'>
                <Route index element={<AuthPage/>}/>
                <Route path='chat' element={<ChatPage/>}/>
            </Route>

        </Routes>
    )

}

export default App;