import React, {useState, useEffect} from 'react';
import { postEventFair, getVenues } from '../../store/careerfair';
import { useDispatch, useSelector } from 'react-redux';

export default function HomePage() {
    const dispatch = useDispatch();
    
    return (
        <h1>HOME</h1>
    )
}
