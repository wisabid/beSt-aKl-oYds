import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../../context/UserContext';
import Event from '../../containers/Event';
import soccer from '../../assets/images/Soccerball.svg';
import MarketTypes from '../../containers/MarketTypes';
const Detail = lazy(() => import('../../containers/Detail'))

class Home extends Component {
    static contextType = UserContext;
    state = {
        showdetail : false, 
        livedetails : [],
        showpmlist : []
    };

    handleBack = () => {
        debugger;
        this.props.resetData();
        this.setState({
            showdetail : false,
            showpmlist : [],
            marketTypes : []
        })
    }

    showDetail = (id) => {
        this.props.showdetail(id);        
        this.setState({
            showdetail : true
        })
    }

    handlePM = (evnt, edata) => {
        if (this.state.showpmlist.indexOf(evnt.eventId) === -1) {
            this.setState({
                showpmlist : [...this.state.showpmlist, evnt.eventId],
                livedata : edata
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

    componentDidUpdate() {
    }

          
    render() {
        const { showdetail, showpmlist } = this.state;
        // const { livedata } = this.props;
        if (this.props.marketTypes.length) {
            return (
                <MarketTypes dta={[this.props.marketTypes]} goback={this.handleBack}/>
            )
        }
        else if (showdetail) {
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
                    <div className="bao-live">
                                <Event  
                                    showDetail={this.showDetail.bind(this)}
                                    handlePM={this.handlePM.bind(this)}
                                    showpmlist={showpmlist} 
                                    pmarket="true"
                                />                            
                    </div>
                                     
                </>
        )
        }
        
    }

    componentWillMount() {
        this.props.getLiveEvent();
    }

    componentDidMount() {
        // this.setState({
        //     livedata : this.props.livedata
        // })
    }   
}

Home.propTypes = {
    livedata: PropTypes.array
}

export default Home;