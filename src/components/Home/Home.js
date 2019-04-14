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

    handlePM = (evnt, edata) => {
        debugger;
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
        console.log('HOME_COMP DId update', this.props);        
    }

          
    render() {
        console.log('HOME_Com Render method')
        const { showdetail, showpmlist } = this.state;
        const { username } = this.context;
        // const { livedata } = this.props;
        debugger
        console.log('HOME_Com Livedata')
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
        console.log('HOME_Com will mount')
        this.props.getLiveEvent();
    }

    componentDidMount() {
        console.log('HOME_CDM', this.props.livedata);
        // this.setState({
        //     livedata : this.props.livedata
        // })
    }   
}

Home.propTypes = {
    livedata: PropTypes.array
}

export default Home;