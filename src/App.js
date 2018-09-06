import React, { Component } from 'react';
import axios from 'axios';
import Config from './Config';


import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import TemperatureCard from './components/TemperatureCard';

import './App.css';

class App extends Component {

    constructor(props){
        super(props);

        const config = new Config();
        this.state = {
            cities: null,
            config: config
        }

        axios.get(this.state.config.backendUrl + 'weather/cities')
            .then(response => {

               this.setState({
                   cities: response.data
               });
            })
            .catch(error => {
                console.log(error);
                //TODO: show error
            });
    }


    render() {

        if (this.state.cities) {
            return (
                <div>
                    <Paper style={{margin: '30px', padding: '40px'}}>
                        <Typography variant="headline" component="h3" style={{textAlign: 'center'}}>
                            Weather Application
                        </Typography>
                        <div>
                            {this.state.cities.map((city, index) =>
                                <TemperatureCard key={index} cityId={city.id} city={city.name}/>
                            )}
                        </div>
                    </Paper>
                </div>
            );
        } else {
            return (
                <div style={{textAlign: 'center', marginTop: '20%'}}>
                    <CircularProgress size={50} />
                </div>
            );
        }
    }
}

export default App;
