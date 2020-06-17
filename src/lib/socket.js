import Ws from '@adonisjs/websocket-client'

export class SocketConnection {
    connect() {
        this.ws = Ws('ws://' + process.env.REACT_APP_API_URL).connect()

        this.ws.on('open', () => {
            console.log('Connection success');
            
        })
        this.ws.on('close', () => {
            console.log('Connection closed');
            
        })

        return this
    }
    subscribe(channel, handler) {
        if(!this.ws) {
            setTimeout(() => this.subscribe(channel), 1000)
        } else {
            const res = this.ws.subscribe(channel)

            res.on('message', (message) => {
                console.log(message);
                handler(message)                
            })

            res.on('error', (error) => {
                console.error(error);
            })
            return res
        }
    }
}

export default new SocketConnection();