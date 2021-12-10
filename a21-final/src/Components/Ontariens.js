import { React, useEffect, useState } from 'react'

const Clients = () => {
    const [clientsOntariens, setClientsOntariens] = useState([])

    useEffect(async () => {
        fetch('http://localhost:8080/clients/ontariens')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setClientsOntariens(data)
            });

    }, [])

    const clientsOntariensList = clientsOntariens.map((client) =>
        <tr key={client.id.toString()}>
            <td>{client.id}</td>
            <td>{client.firstName}</td>
            <td>{client.lastName}</td>
            <td>{client.gender}</td>
            <td>{client.birthDate}</td>

        </tr>)

    return (
        <>
            <h1>Ontariens</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Genre</th>
                    <th>Naissance</th>

                </tr>
                {clientsOntariensList}
            </table>
        </>

    )
}

export default Clients
