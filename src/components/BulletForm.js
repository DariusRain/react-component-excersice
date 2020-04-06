import React, { Component } from 'react'

export default class BulletForm extends Component {
    render() {
        return (
            <form className="BulletForm" onSubmit={this.props.addBullet}>
                <label htmlFor="bulletText">Bullet: &nbsp;</label>
                <input type="text" name="bulletText" onChange={this.props.handleBulletInput} />
                &nbsp;
                <button>Add Bullet</button>
            </form>
        )
    }
}
