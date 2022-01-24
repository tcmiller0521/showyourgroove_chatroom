import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'
import userChatRooms from "../../assets/contentFiles/userChatrooms";
import { selectAuth } from "../../state/authSlice";
import { useDispatch } from "react-redux";
import { retrieveUser } from "../../actions/auth";
import { useSelector } from "react-redux";

const PrivateUserChats = () => {

    const [ChatInfo] = useState(userChatRooms);

    const profileInfo = useSelector(selectAuth)
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(profileInfo);
    const [currentId, setCurrentId] = useState(profileInfo._id)

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(retrieveUser());
        console.log(profileInfo)
    }


    return (
        <>
            <div className="row">
                <div className="d-flex flex-column align-items-center">
                    <h1>Private Chatrooms</h1>
                    <div className="pubrooms-divider mb-4" />
                </div>
                <div className="col-md-12">
                    <div
                        data-mdb-spy="scroll"
                        data-mdb-target="#scrollspy1"
                        data-mdb-offset="0"
                        className="scrollspy-example"
                    >
                            <section id="example-1">
                                <Button onClick={handleSubmit}>
                                    get users
                                </Button>
                                <h2>{profileInfo.username}</h2>
                            </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivateUserChats;

// {ChatInfo.map((userChatRooms, i) => (
//     <section key={i} id="example-1">
//         <Row>
//         <Col lg={6}>
//                 <h2>{userChatRooms.chatroom}</h2>
//             </Col>
//             <Col lg={2}>
//                 <Link to={userChatRooms.link}>
//                     <Button className="btn-secondary mb-3">
//                         Join Room
//                     </Button>
//                 </Link>
//             </Col>
//             <Col lg={2}>
//                 <Button className="btn-secondary">Delete</Button>
//             </Col>
//         </Row>
//     </section>
// ))}