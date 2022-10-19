import React from 'react';
import '../style/index.css'
import Loader from './Loader';
import Random from './Random_User';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: null,
            isLoading: false
        }
    }

    handleLoading = () => {
        this.setState({
            isLoading: false
        })
    }


    fetch = () => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => this.setState({ data: data.results, isLoading: true }))
    }

    componentDidMount() {
        this.fetch()
    }

    render() {
        if (!this.state.data) {
            return <Loader size={24} />
        }
        return (
            <>
                <Random info={this.state.data[0]} fetch={this.fetch} handleLoading={this.handleLoading} isLoading={this.state.isLoading} />
            </>
        )
    }
}


export default App