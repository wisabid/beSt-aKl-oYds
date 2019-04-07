import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../../context/UserContext';
import Detail from '../../containers/Detail';
import Market from  '../../containers/Market';
import Event from '../../containers/Event';

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
        this.props.showdetail(id);
        // let liveDetails =  this.props.livedata.filter((evnt, indx) => {
        //     return id === evnt.eventId
        // }) 
        this.setState({
            showdetail : true
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

          
    render() {
        if (this.state.showdetail) {
            return (
                <Detail                     
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
                                <Event edata={this.props.livedata} 
                                    showDetail={this.showDetail.bind(this)}
                                    handlePM={this.handlePM.bind(this)}
                                    showpmlist={this.state.showpmlist}
                                />                            
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