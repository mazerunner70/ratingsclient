import { connect } from 'react-redux';
import LayoutDefault from './LayoutDefault';
import { withRouter } from 'react-router-native';


const mapStateToProps = (state, ownProps) => {

    return {
        
    }
}

const mapDispatchToProp = (dispatch, ownProps) => {
    return {

    }
}

console.log('1212', LayoutDefault, connect, withRouter)

const LayoutDefaultLink = withRouter( connect(
    mapStateToProps,
    mapDispatchToProp,
)(LayoutDefault))

export default LayoutDefaultLink;