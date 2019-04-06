import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../../context/UserContext';
import Detail from '../Detail';

class Home extends Component {
    static contextType = UserContext;
    state = {
        showdetail : false, 
        livedetails : [],
        showpmlist : []
    };

    handleBack = () => {
        this.setState({
            showdetail : false
        })
    }

    showDetail = (id) => {
        let liveDetails =  this.props.livedata.filter((evnt, indx) => {
            return id === evnt.eventId
        }) 
        this.setState({
            showdetail : true,
            livedetails : liveDetails
        })
    }

    handlePM = (evnt) => {
        if (this.state.showpmlist.indexOf(evnt.eventId) === -1) {
            this.setState({
                showpmlist : [...this.state.showpmlist, evnt.eventId]
            })
            this.props.showPM(evnt.markets);
        }
        else {
            this.props.removemarketdata(evnt.eventId)
            let newpmlist = this.state.showpmlist.filter(item => item !== evnt.eventId);
            this.setState({
                showpmlist : newpmlist
            })
            
        }
        
        
    }

    showOutcomedata = (id) => {
        debugger;
        if (this.props.outcomedata.length) {
            return (
                <dl >
                    {
                        this.props.outcomedata.map((outcome) => {
                            if (outcome.data.eventId === id) {
                                return (
                                    <>
                                    <dt>{outcome.data.name} ?</dt>
                                    <dd>- {outcome.data.outcomeId}</dd>
                                    <dt>Alfie</dt>
                                    <dd>- My love</dd>
                                    </>
                                )
                            }
                        })
                    }
                    
                </dl>
            )
        }
    }

    showPrimarymarket = (id) => {
        debugger;
        if (this.props.marketdata.length) {
            return (
                <dl >
                    {
                        this.props.marketdata.map((market) => {
                            if (market.data.eventId === id) {
                                return (
                                    <>
                                    <dt>{market.data.name} ?</dt>
                                    <dd>- {market.data.type}</dd>
                                    <dt>Milk</dt>
                                    <dd>- white cold drink</dd>
                                    {this.showOutcomedata(id)}
                                    </>
                                )
                            }
                        })
                    }
                    
                </dl>
            )
        }
    }

    showlive = (data) => {
            return data.map((evnt, indx) => {
                return (
                <li key={evnt.eventId} >
                    -> <span onClick={this.showDetail.bind(this, evnt.eventId)}>{evnt.name}</span> - <a href="#" onClick={this.handlePM.bind(this, evnt)}>(PM)</a>
                    {(this.state.showpmlist.indexOf(evnt.eventId) !== -1)
                        ?(this.showPrimarymarket(evnt.eventId))
                        :null
                    }
                    
                    </li>
                )
            }) 
    }
    
    render() {
        if (this.state.showdetail) {
            return (
                <Detail 
                    livedetails={this.state.livedetails} 
                    goback={this.handleBack}
                />
            )
        }
        else {
            return (
                <>
                    <h4>Welcome <i>{this.context.username}</i></h4>
                    {/* <h5>Dummy Date : {this.props.dummy}</h5> */}
                    {this.props.livedata
                        ?<><div className="bao-live">
                            <ul>{this.showlive(this.props.livedata)}</ul>                            
                        </div>
                        
                        </>
                        :<h2>Loading...</h2>                      
                    }                   
                </>
        )
        }
        
    }

    componentWillMount() {
        this.props.getLiveEvent();
    }

    componentDidMount() {
        //this.props.adduser(this.context.username);
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

Home.propTypes = {
    livedata: PropTypes.array
}

export default Home;