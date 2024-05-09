import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCommentMedical, faEllipsisVertical, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import axios from "axios";

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    const fetchData = () => {
        return axios.get("https://randomuser.me/api/?results=50")
            .then((response) => setContacts(response.data.results))
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <section className="contacts">
            <div className="contactsHeader">
                <div className="headerTitle">
                    <h1>Chats</h1>
                    <div>
                        <FontAwesomeIcon size='lg' style={{ color: "#aebac1", }} icon={faCommentMedical} />
                        <FontAwesomeIcon size='lg' style={{ color: "#aebac1", }} icon={faEllipsisVertical} />
                    </div>
                </div>
                <div className="contactSearch">
                    <div>
                        <FontAwesomeIcon size='s' style={{ color: "#aebac1", }} icon={faMagnifyingGlass} />
                        <input type="text" placeholder="Buscar" />
                    </div>
                </div>
                <div className="contactTabs">
                    <p>Todos</p>
                    <p>No leidos</p>
                    <p>Grupos</p>
                </div>
            </div>
            <div className="contactsList">
                {contacts.map((contact) => (
                    <ContactDiv
                        key={contact.id.value}
                        name={`${contact.name.first} ${contact.name.last}`}
                        description={contact.location.timezone.description}
                        pictureUrl={contact.picture.thumbnail}
                    />
                ))}
            </div>
        </section>
    )
}

// eslint-disable-next-line react/prop-types
function ContactDiv({ name, description, pictureUrl }) {
    return (
        <div className="contactContainer">
            <div className="profileImageContainer">
                <div className="profileImageDiv">
                    <div
                        className="profileImage"
                        style={{ backgroundImage: `url(${pictureUrl})` }}
                    />
                </div>
            </div>
            <div className="InfoContainer">
                <div className="contactName">{name}</div>
                <div className="messageInfo">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}