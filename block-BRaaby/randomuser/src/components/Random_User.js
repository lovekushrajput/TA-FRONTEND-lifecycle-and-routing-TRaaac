import React, { Component } from 'react'

class Random_User extends Component {
    constructor() {
        super()
        this.state = {
            userInfo: ''
        }
    }

    handleClick = () => {
        this.props.fetch()
        this.setState({
            userInfo: ''
        })

    }
    render() {
        let { picture, login, phone, dob, email, location } = this.props.info
        let { name, value } = this.state.userInfo
        return (

            <div className='parent'>

                <div className='c---1 height-half'></div>
                <div className='c---2 height-40'></div>

                <div className='c---main'>
                    <div className='height-40 col---main'></div>
                    <div className='circle'>
                        <img src={picture.large} alt='pic' className='width-full' />
                    </div>
                    <div className='col2---main'>
                        <p className='center'>My {name || 'name'} is</p>
                        <h2 className='center'>{value || `${this.props.info.name.first + ' ' + this.props.info.name.last}`}</h2>
                        <div onMouseOver={(e) => e.target.tagName === 'I' ? this.setState({ userInfo: e.target.dataset }) : ''} className='flex justify-space margin-2'>
                            <i className="fa-solid fa-user" data-name='name' data-value={this.props.info.name.first + ' ' + this.props.info.name.last}></i>
                            <i className="fa-solid fa-envelope-open" data-name='email' data-value={email}></i>
                            <i className="fa-solid fa-calendar-xmark" data-name='age' data-value={dob.age}></i>
                            <i className="fa-solid fa-map" data-name='street' data-value={location.street.name}></i>
                            <i className="fa-solid fa-phone" data-name='phone' data-value={phone}></i>
                            <i className="fa-solid fa-lock" data-name='password' data-value={login.password}></i>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={this.handleClick}> {this.props.data ? 'Random User' : 'loading..'}</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Random_User