import React, { Component } from 'react';
import UserContext from '../context/UserContext';

class Home extends Component {
    static contextType = UserContext;
    state = {
        livedata : [],
        livedetails : []
    }

    showDetail = (id) => {
        let liveDetails =  this.state.livedata.filter((evnt, indx) => {
            return id === evnt.eventId
        }) 
        this.setState({
            livedetails : liveDetails
        })
    }

    showlive = (data) => {
        if (data.length === 1) {
            return data.map((evnt, indx) => {
                return <li key={evnt.eventId}>{evnt.name}</li>
            }) 
        }
        else {
            return data.map((evnt, indx) => {
                return <li key={evnt.eventId} onClick={this.showDetail.bind(this, evnt.eventId)}>-> {evnt.name}</li>
            }) 
        }
    }
    
    render() {
        // console.log(contextType);
        return (
                <>
                    {this.state.livedata
                        ?<div className="bao-live">
                            <ul>{this.showlive(this.state.livedata)}</ul>
                            <div className="live-detail">{this.showlive(this.state.livedetails)}</div>
                        </div>
                        :null                       
                    }                   
                    
                </>
        )
    }

    componentDidMount() {
        console.log('YOUR CONTEXT', this.context)
        this.context.ws.onopen = () => {
            console.log('Open')
            this.context.ws.send(JSON.stringify({ type: "getLiveEvents" }))
        } 
        let self = this;
        this.context.ws.addEventListener("message", e => {
            console.table(JSON.parse(e.data), 'eventId', 'name');
            debugger;
            let livedata = JSON.parse(e.data)
            if (livedata.type === "LIVE_EVENTS_DATA") {
                self.setState({
                    livedata : livedata.data
                })
            }
        }); 
    }
   
}

export default Home;