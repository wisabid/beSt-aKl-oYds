import { connect } from 'react-redux';
import DetailComp from '../components/Detail';

const mapStateToProps = (state) => {
    return {        
        eventdata : state.rL.eventdata,
        marketdata : state.rL.marketdata,
        ondemandmarketdata : state.rL.ondemandmarketdata,
    }
}

const Detail = connect(mapStateToProps, dispatch => {})(DetailComp);

export default Detail;