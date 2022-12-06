import React from 'react';
import { Container, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Import = (props) => {
    console.log('IMPORT PROPS:', props)

    return (
        <Container maxWidth='md'>
            <Button onClick={props.fetchMakes} variant='contained' color='primary'>
                Import
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((makes, idx) => (
                        <TableRow key={makes.MakeId}>
                            <TableCell>{makes.MakeName}</TableCell>
                            <TableCell>{''}</TableCell>
                            <TableCell>
                                <DeleteIcon
                                    onClick={() => props.removeCar(idx)}
                                    className='icon text-red'
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
};

export default Import;

// const