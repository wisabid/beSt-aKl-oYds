import { connect } from 'react-redux';
import DetailComp from '../components/Detail';

const mapStateToProps = (state) => {
    return {        
        eventdata : state.rL.eventdata,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const Detail = connect(mapStateToProps, mapDispatchToProps)(DetailComp);

export default Detail;