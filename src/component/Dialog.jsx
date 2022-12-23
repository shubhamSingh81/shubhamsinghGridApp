import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core'

export default function FormDialog({ open, handleClose, data, onChange, handleFormSubmit }) {

    const { firstName, lastName, email, phoneNumber, address } = data;

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add New user
                </DialogTitle>
                <DialogContent>
                    <form>
                        <TextField id="firstName" required="true" value={firstName} onChange={e => onChange(e)} placeholder='Enter Name' label="Name" variant='outlined' margin='dense' fullWidth />
                        <TextField id="lastName" required="true" value={lastName} onChange={e => onChange(e)} placeholder='Enter Last Name' label="LastName" variant='outlined' margin='dense' fullWidth />
                        <TextField id="email" required="true" type="email" value={email} onChange={e => onChange(e)} placeholder='Enter Email' label="Email" variant='outlined' margin='dense' fullWidth />
                        <TextField id="phoneNumber" required="true" type="number" value={phoneNumber} onChange={e => onChange(e)} placeholder='Enter Phone Number' label="Phone" variant='outlined' margin='dense' fullWidth />
                        <TextField id="address" required="true" value={address} onChange={e => onChange(e)} placeholder='Enter Address' label="Address" variant='outlined' margin='dense' fullWidth />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary" variant='outlined'>Cancel</Button>
                    <Button color="primary" onClick={() => handleFormSubmit()} variant='contained'>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}