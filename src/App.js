import React, { Component } from 'react'
import './App.css';
import Bullet from './components/Bullet'
import BulletForm from './components/BulletForm'
import Footer from './components/Footer'
const shortId = require('shortid')
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulletElements: [],
      bulletInputFeild: ''
    }
  }
  addBullet = (e) => {
    e.preventDefault()
    this.setState({bulletElements: [...this.state.bulletElements, {bulletText: this.state.bulletInputFeild, bulletId: shortId.generate()}]})
  }
  handleBulletInput = (e) => {
    this.setState({bulletInputFeild: e.target.value})
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1><span role="img" aria-label="bullet-point">⚫</span> Bullet</h1>
      </header>
      
      <BulletForm className="BulletForm" addBullet={this.addBullet} handleBulletInput={this.handleBulletInput}/>
      <Bullet bulletArray={this.state.bulletElements} />
      <Footer footerText="Copyright &copy; 2020 Made By Darius Rain" />
    </div>
    )
  }
}


