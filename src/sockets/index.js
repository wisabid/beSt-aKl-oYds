import * as types from '../store/constants/ActionTypes';
import { addUser, showlivedata } from '../store/actions';

const setupSocket = (dispatch, username) => {
    const socket = new WebSocket("ws://192.168.99.100:8889");
    socket.onopen = () => {
        debugger;
        console.log('Connection is open my boy!');
        //socket.send(JSON.stringify(showlivedata()))
    }
    socket.onmessage = (event) => {
        debugger;
        console.log('YOU HAVE A MESSAGE MY BOY ');
        console.log(event.data);
        let data = JSON.parse(event.data);
        switch(data.type) {
            case "LIVE_EVENTS_DATA" : 
                dispatch({type:'showlive', data: data });
                break;
            default :
        }
    }

    socket.onclose = () => {
        console.log('Connection is C L O S E D my boy!')
    }

    socket.onerror = (err) => {
        console.log('E R R O R !!!')
        console.error(err)
    }
    return socket;
}

export default setupSocket;