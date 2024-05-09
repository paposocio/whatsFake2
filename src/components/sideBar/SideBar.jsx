import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faComment, faUserGroup, faCircleNotch, faCommentDots, faInbox, faStar } from '@fortawesome/free-solid-svg-icons'

export default function SideBar() {
    return (
        <section className="sideBar">
            <div className='iconG1Container'>
                <div><FontAwesomeIcon icon={faComment} size='lg' style={{ color: "#aebac1", }} /></div>
                <div><FontAwesomeIcon icon={faUserGroup} size='lg' style={{ color: "#aebac1", }} /></div>
                <div><FontAwesomeIcon icon={faCircleNotch} size='lg' style={{ color: "#aebac1", }} /></div>
                <div><FontAwesomeIcon icon={faCommentDots} size='lg' style={{ color: "#aebac1", }} /></div>
                <hr/>
                <div><FontAwesomeIcon icon={faInbox} size='lg' style={{ color: "#aebac1", }} /></div>
                <div><FontAwesomeIcon icon={faStar} size='lg' style={{ color: "#aebac1", }} /></div>
            </div>
            <div className='iconG2Container'>
                <div><FontAwesomeIcon icon={faGear} size='xl' style={{ color: "#aebac1", }} /></div>
                <div><div className='userProfilePicture'></div></div>
            </div>
        </section >
    )
}
