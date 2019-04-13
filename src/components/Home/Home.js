import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../../context/UserContext';
import Event from '../../containers/Event';
import soccer from '../../assets/images/Soccerball.svg';
const Detail = lazy(() => import('../../containers/Detail'))

class Home extends Component {
    static contextType = UserContext;
    state = {
        showdetail : false, 
        livedetails : [],
        showpmlist : []
    };

    handleBack = () => {
        this.props.resetData();
        this.setState({
            showdetail : false,
            showpmlist : []
        })
    }

    showDetail = (id) => {
        this.props.showdetail(id);        
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

    loadingComp = () => (<img src={soccer} className="bao-spinner" alt="logo" />);

          
    render() {
        const { showdetail, showpmlist } = this.state;
        const { username } = this.context;
        const { livedata } = this.props;
        if (showdetail) {
            return (
                <Suspense fallback={this.loadingComp()}>
                    <Detail                     
                        goback={this.handleBack}
                    />
                </Suspense>
            )
        }
        else {
            return (
                <>
                    <h4>Welcome <i>{username}</i></h4>
                    {livedata
                        ?<><div className="bao-live">
                                <Event edata={livedata} 
                                    showDetail={this.showDetail.bind(this)}
                                    handlePM={this.handlePM.bind(this)}
                                    showpmlist={showpmlist} 
                                    pmarket="true"
                                />                            
                           </div>
                        
                        </>
                        :<img src={soccer} className="bao-spinner" alt="logo" />                    
                    }                   
                </>
        )
        }
        
    }

    componentWillMount() {
        this.props.getLiveEvent();
    }

    componentDidMount() {
        console.log('YOUR CONTEXT', this.context);
    }   
}

Home.propTypes = {
    livedata: PropTypes.array
}

export default Home;