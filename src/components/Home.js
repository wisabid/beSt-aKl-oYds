import React, { Component } from 'react';
import UserContext from '../context/UserContext';


class Home extends Component {
    static contextType = UserContext;
    state = {
        livedata : [],
        livedetails : []
    }

    showDetail = (id) => {
        let liveDetails =  this.props.livedata.filter((evnt, indx) => {
            return id === evnt.eventId
        }) 
        this.setState({
            livedetails : liveDetails
        })
    }

    showPM = (id) => {
        this.context.ws.send(JSON.stringify({ type: "getLiveEvents", primaryMarkets: true }))
    }

    showlive = (data) => {
        debugger;
        if (data.length === 1) {
            return data.map((evnt, indx) => {
                return <li key={evnt.eventId}>{evnt.name} - <span onClick={this.showPM.bind(this, evnt.eventId)}>Show PM</span></li>
            }) 
        }
        else {
            return data.map((evnt, indx) => {
                return (
                <li key={evnt.eventId} onClick={this.showDetail.bind(this, evnt.eventId)}>-> {evnt.name}</li>
                )
            }) 
        }
    }
    
    render() {
        return (
                <>
                    <h4>Welcome <i>{this.context.username}</i></h4>
                    {/* <h5>Dummy Date : {this.props.dummy}</h5> */}
                    {this.props.livedata
                        ?<div className="bao-live">
                            <ul>{this.showlive(this.props.livedata)}</ul>
                            {/* <div className="live-detail">{this.showlive(this.state.livedetails)}</div> */}
                        </div>
                        :null                       
                    }                   
                </>
        )
    }

    componentWillMount() {
        // debugger;
        this.props.getLiveEvent();
    }

    componentDidMount() {
        this.props.adduser(this.context.username);
        console.log('YOUR CONTEXT', this.context);

        // this.props.dummyEvent();
        
        /*let self = this;
        this.context.ws.addEventListener("open", () => {
            console.log('O p e n !')
            this.context.ws.send(JSON.stringify({ type: "getLiveEvents", primaryMarkets: true }))
        })
        this.context.ws.addEventListener("message", e => {
            console.log('You HAVE a MEssage!')
            console.table(JSON.parse(e.data));
            let livedata = JSON.parse(e.data)
            if (livedata.type === "LIVE_EVENTS_DATA") {
                self.setState({
                    livedata : livedata.data
                })
            }
        });     */ 
    }   
}

export default Home;