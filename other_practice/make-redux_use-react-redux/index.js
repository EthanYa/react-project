import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const themeReducer = (state , action) => {
    if (!state) return {
        themeColor: 'red'
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = createStore(themeReducer)

class Index extends Component {
    // static childContextTypes = {
    //   store:PropTypes.object
    // }
    // getChildContext(){
    //   return {store}
    // }
    render() {
        return ( < div >
            < Header / >
            < Content / >
            < /div>
        )
    }
}

ReactDOM.render( 
    < Provider store = { store } >
      < Index / >
    < /Provider>,
    document.getElementById('root')
)
