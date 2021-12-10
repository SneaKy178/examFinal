import { React, useState } from 'react'
import Clients from './Clients'
import Hommes from './Hommes'
import Ontariens from './Ontariens'
import "./table.css"
const Main = () => {
    const [clickedClients, setClickedClients] = useState(false)
    const [clickedHommesClients, setClickedHommesClients] = useState(false)
    const [clickedOntariensClients, setClickedOntariensClients] = useState(false)


    const clients = () => {
        setClickedClients(true)
        setClickedHommesClients(false)
        setClickedOntariensClients(false)
    }

    const clientsHommes = () => {
        setClickedHommesClients(true)
        setClickedClients(false)
        setClickedOntariensClients(false)
    }

    const clientsOntariens = () => {
        setClickedOntariensClients(true)
        setClickedClients(false)
        setClickedHommesClients(false)
    }

    return (


        <>
            <div id="button">
                <button onClick={clients}>Fethc tous les clients</button>
                <button onClick={clientsHommes}>Fetch les hommes</button>
                <button onClick={clientsOntariens}>Fetch les onatariens</button>
            </div>
            {clickedClients ? <Clients /> : null}
            {clickedHommesClients ? <Hommes /> : null}
            {clickedOntariensClients ? <Ontariens /> : null}

        </>
    )
}

export default Main
