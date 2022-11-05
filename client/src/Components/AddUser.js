import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material';
import React, { useState } from 'react';
import { addUser } from '../Service/api';

const Container = styled(FormGroup)`
width : 50%;
margin: 5% auto 0 auto;
& > div {
    margin-top: 20px
}
`

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = () => {

    const [user, setUser] = useState(defaultValue);

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const adduserDetails = async () => {
        await addUser(user);
    }

    return (
        <Container>
            <Typography variant='h4'>Add New User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name"></Input>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone"></Input>
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={() => adduserDetails()}  >Add New User</Button>
            </FormControl>
        </Container >
    );
};

export default AddUser;