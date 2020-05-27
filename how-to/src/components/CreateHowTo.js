import React from "react"
import { connect } from "react-redux"


function CreateHowTo(props) {
console.log(props) 

    return(
        <form>
            <label>Title:</label>
            <input />
            <label>Description:</label>
            <input />
            <label>Step 1:</label>
            <input />
            <label>Step 2:</label>
            <input />
            <label>Step 3:</label>
            <input />
            <button>Add Step</button>
            <button>Submit</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        howTos: state.howTos
    }
}

export default connect(mapStateToProps, {})(CreateHowTo)