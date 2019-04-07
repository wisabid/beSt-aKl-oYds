import * as types from '../store/constants/ActionTypes';
import { addUser, showlivedata, showOutcomes, showPrimaryMarket} from '../store/actions';

const setupSocket = (dispatch, username) => {
    const socket = new WebSocket("ws://192.168.99.100:8889");
    socket.onopen = () => {
        console.log('Connection is open my boy!', socket);
        //socket.send(JSON.stringify(showlivedata()))
    }
    socket.onmessage = (event) => {
       
        console.log('YOU HAVE A MESSAGE MY BOY ');
        
        let data = JSON.parse(event.data);
        console.table(data);
        switch(data.type) {
            case "LIVE_EVENTS_DATA" : 
                dispatch({type:'showlive', data: data });
                break;
            case "MARKET_DATA":
                dispatch({type:'showmarket', data: data })
                dispatch(showOutcomes(data.data.outcomes))
                break;
            case 'OUTCOME_DATA':
                dispatch({type:'showoutcome', data: data })
                break;
            case 'EVENT_DATA':
                dispatch({type:'showevent', data: data.data })
                dispatch(showPrimaryMarket(data.data.markets))
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

    socket.waitForConnection= function(sendAction) {
        let timeout;
        if (this.readyState === 1) {
            // console.clear();
            console.log('Connecting nOWWW ....')
            clearTimeout(timeout)
            sendAction();
        }
        else {
            timeout = setTimeout(() => {
                console.log('Checking Again ....')
                this.waitForConnection(sendAction)
            }, 1000);
        }
    }
    return socket;
}

export default setupSocket;