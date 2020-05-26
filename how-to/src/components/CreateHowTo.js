import React, { useEffect } from "react"
import { connect } from "react-redux"
import axios from "axios"


function CreateHowTo(props) {
console.log(props) 
    // useEffect(() => {
    //     axios.get("https://howtobw.herokuapp.com/api/auth/login")
    //     .then(res => {
    //         console.log(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    //     axios.get("https://howtobw.herokuapp.com/api/auth/register")
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])
    
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