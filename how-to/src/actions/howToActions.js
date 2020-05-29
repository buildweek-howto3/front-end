import { axiosWithAuth } from "../utils/axiosWithAuth"

export const INITIAL_HOWTO_FETCH = "INITIAL_HOWTO_FETCH"
export const HOWTO_FETCH_SUCCESS = "HOWTO_FETCH_SUCCESS"
export const FETCH_USER_NAME = "FETCH_USER_NAME"
export const FETCH_USER_ID = "FETCH_USER_ID"
export const FETCH_USER_HOWTOS = "FETCH_USER_HOWTOS"
export const CREATE_USER_HOWTO = "CREATE_USER_HOWTO"
export const SEARCH_HOWTOS = "SEARCH_HOWTOS"


export const getUser = () => {
  return dispatch => {
    axiosWithAuth()
      .get("https://howtobw.herokuapp.com/api/auth/users")
      .then((res) => {
        // console.log(res.data.currentUser);
        dispatch({ type: FETCH_USER_NAME, payload: res.data.currentUser.username})
        dispatch({ type: FETCH_USER_ID, payload: res.data.currentUser.user_id})
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const getUserHowTos = (id) => {
  return async dispatch => {
    await axiosWithAuth()
      .get(`https://howtobw.herokuapp.com/api/posts/user/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: FETCH_USER_HOWTOS, payload: res.data })
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const getHowTos = () => {
   return dispatch => { 
    dispatch({ type: INITIAL_HOWTO_FETCH }) 
    
    axiosWithAuth()
    .get('https://howtobw.herokuapp.com/api/posts')
    .then(res => {
      // console.log(res.data.data)
      dispatch({ type: HOWTO_FETCH_SUCCESS, payload: res.data.data })
    }
    )
    .catch(
      err=> console.log(err)
    )
   }
}

export const createHowTo = (newHowTo) => {
   return dispatch => {
     axiosWithAuth()
    .post("https://howtobw.herokuapp.com/api/posts", newHowTo)
    .then(res => {
      console.log(res)
      // window.location.reload()
      dispatch({ type: CREATE_USER_HOWTO, payload: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const searchHowTos = (newArray) => {
  return dispatch => {
    dispatch({ type: SEARCH_HOWTOS, payload: newArray})
  }
}
