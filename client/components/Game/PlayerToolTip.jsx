import React from 'react'
import { connect } from 'react-redux'

class PlayerToolTip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {

    }

    render(){
        /* Tooltip needs to display information about players,
            but when leader is nominating, it MUST show that a click will nominate
            irreversably. 
        */
        const { id, display_name, user_name} = this.props.player
        return (<div className="playerToolTip">
            <p> User: {user_name} </p>
            <p> ID: {id} </p>
            {display_name && <p> DisplayName: {display_name}</p>}
        </div>)
    }

}

const mapStateToProps = (state) => state

export default PlayerToolTip
