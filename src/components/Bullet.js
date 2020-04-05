import React, { Component } from 'react'

export default class Bullet extends Component {
    render() {
      return (
          <ul className="BulletList">
            {this.props.bulletArray.reverse().map(object => {
                return (
                        <li>{object.bulletText}</li>   
                )
            })}
            </ul>
      )
    }
}
