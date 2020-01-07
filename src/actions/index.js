import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTING = '?token=token123'

export const readEvents = () => async dispatch =>{
	const response = await axios.get(`${ROOT_URL}/events${QUERYSTING}`)
	//console.log(response)
	dispatch({type:READ_EVENTS,response})
}
