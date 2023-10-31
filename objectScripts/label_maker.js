const contact = {
    name : "mu9seb",
    address : "123 Come Find Me",
    city : "Private",
    state : "Beyond",
    zip : "99999"
}

printContact(contact)

function printContact (contact) {
    let displayMessage = console.log(`
        \n Contact Name: ${contact.name}, \n Address: ${contact.address}, \n City: ${contact.city}, \n State: ${contact.state}, \n ZIP: ${contact.zip}
        `)
    return displayMessage;
}