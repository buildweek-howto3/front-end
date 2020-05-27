import { axiosWithAuth } from "../utils/axiosWithAuth"

export const HOWTO_FETCH_SUCCESS = "HOWTO_FETCH_SUCCESS"

export const getHowTos = () => {
   return dispatch => { axiosWithAuth()
    .get('https://howtobw.herokuapp.com/api/posts')
    .then(res => {
      console.log(res.data.data)
      dispatch({ type: HOWTO_FETCH_SUCCESS, payload: res.data.data })
    }
    )
    .catch(
      err=> console.log(err)
    )
   }
}