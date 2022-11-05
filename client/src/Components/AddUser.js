import { FormControl, FormGroup, Input, InputLabel } from '@mui/material';
import React from 'react';

const AddUser = () => {
    return (
        <div>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>UserName</InputLabel>
                    <Input></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input></Input>
                </FormControl>
            </FormGroup>
        </div>
    );
};

export default AddUser;