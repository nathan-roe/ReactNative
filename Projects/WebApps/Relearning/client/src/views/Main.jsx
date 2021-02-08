import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
const Main = () => {
    const firstName = "bob";
    return (
        <div>
            <PersonForm f = {firstName}/>
        </div>
    );
}
export default Main;