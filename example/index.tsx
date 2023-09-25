import { Client } from '@dxos/client';
import { render } from 'preact'

const client = new Client();

(async () => {
    await client.initialize()
    let identity

    try {
        identity = client.halo.identity.get()
    } catch (err) {
        console.log('error...', err)
    }

    console.log('identity', identity)
})()

function Example () {
    return (<div>hello</div>)
}

render((<Example />), document.getElementById('root')!)
