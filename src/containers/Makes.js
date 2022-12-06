import { connect } from 'react-redux'
import Makes from '../components/Makes'
import { fetchMakes } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: () => dispatch(fetchMakes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Makes)