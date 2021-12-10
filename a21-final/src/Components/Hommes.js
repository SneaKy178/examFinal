import { React, useEffect, useState } from 'react'

const Clients = () => {
    const [clientsHommes, setClientsHommes] = useState([])

    useEffect(async () => {
        fetch('http://localhost:8080/clients/hommes')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setClientsHommes(data)
            });

    }, [])

    const clientsHommesList = clientsHommes.map((client) =>
        <tr key={client.id.toString()}>
            <td>{client.id}</td>
            <td>{client.firstName}</td>
            <td>{client.lastName}</td>
            <td>{client.gender}</td>
            <td>{client.birthDate}</td>

        </tr>)

    return (
        <>
            <h1>Hommes</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Genre</th>
                    <th>Naissance</th>

                </tr>
                {clientsHommesList}
            </table>
        </>
    )
}

export default Clients
