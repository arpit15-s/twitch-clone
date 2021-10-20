import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '80432705800-l85noou3paq2g48f5200em15pp6e6adg.apps.googleusercontent.com',
                scope: 'email'

            });
        });
    }
    
    render() {
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;