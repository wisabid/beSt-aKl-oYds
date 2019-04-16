import * as types from '../store/constants/ActionTypes';
import { showOutcomes, showPrimaryMarket} from '../store/actions';
import { WS_URL } from '../store/constants/constants'

const setupSocket = (dispatch, username) => {
    const socket = new WebSocket(WS_URL);
    socket.onopen = () => {
        console.log('Connection is open my boy!', socket);
        //socket.send(JSON.stringify(showlivedata()))
    }
    socket.onmessage = (event) => {
       
        console.log('YOU HAVE A MESSAGE MY BOY ');
        
        let data = JSON.parse(event.data);
        console.table('MESSAGE_RECEIVED', data);
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
            case 'CURRENT_SUBSCRIPTIONS':
                dispatch({type: 'showsubsriptions', data: data.data})
                break;
            case 'PRICE_CHANGE':
                dispatch({type: 'update_outcomeprice', data: data.data})
                break;
            case 'MARKET_STATUS':
                dispatch({type: 'update_marketstatus', data: data.data})
                break;
            case 'OUTCOME_STATUS':
                dispatch({type: 'update_outcomestatus', data: data.data})
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