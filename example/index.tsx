import { Client } from '@dxos/client';
import { render } from 'preact'

const client = new Client();

(async () => {
    await client.initialize()
    let identity

    try {
        identity = client.halo.identity.get()
    } catch (err) {
        console.log('errrrrrrrrrrrrr', err)
    }

    // get a list of all spaces
    // const spaces = client.spaces.get()

    console.log('identity', identity)
})()

function Example () {
    return (<div>hello</div>)
}

render((<Example />), document.getElementById('root')!)
