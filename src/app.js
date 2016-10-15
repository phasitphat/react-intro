import React from 'react'
import ReactDom from 'react-dom'

const title = 'My React App'

const App = () =>{
		return <div>My React App</div>
}

const element = document.getElementById('app')
ReactDom.render(<App />, element)