import React, {useState} from 'react';

import { ROOM_CREATE, ROOMS } from '../actions';

import {Container, Grid, Button, Link, Box} from '@material-ui/core';
import { shadows } from '@material-ui/system';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Home = ({history}) => {
    const [loading, setLoading] = useState(false);
    const [rooms, setRooms] = useState([]);
    const onRoomCreate = async () => {
        setLoading(true);
        const room = await ROOM_CREATE();
        const {uuid} = room;
        setLoading(false);
        history.push(`/room/${uuid}`);
    }
    const fetchRooms = async () => {
        try {
            const rooms = await ROOMS()
            setRooms(rooms)
        } catch(e) {
            this.props.history.push('/')
        }
    }
    const enterRoom = (uuid) => {
        history.push(`/room/${uuid}`);
    }
    fetchRooms();
    return (
        <Container fluid>
            <Grid container>
                {rooms.map(room => {
                    const uuid = room.uuid
                     return (
                        <Grid item xs={12} sm={6} md={4} key={uuid}>
                            <Box m={1} p={2} boxShadow={3}>
                                <Grid container>
                                    <Grid item xs={10}>
                                        {uuid}
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Box textAlign="right">
                                            <Button onClick={ () => {enterRoom(uuid)} }>GO</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                     )
                })}
            </Grid>
            <Button color='primary' variant='contained' onClick={onRoomCreate} disabled={loading} startIcon={<AddCircleIcon/>}>Create Room</Button>
        </Container>
    )
}

export default Home