//This MeetInfoPopUp will appear on the Admin's screen so that they can copy the link of the video call and send it to the other user
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./MeetingInfo.scss";

//Various parameters have been passed to display the URL for the Admin to copy 
const MeetingInfo = ({ setMeetInfoPopup, url }) => {
  return (
    <div className="meeting-info-block">
      <div className="meeting-header">
        <h3>Your meeting's ready</h3>
        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
          onClick={() => {
            setMeetInfoPopup(false);
          }}
        />
      </div>
      <p className="info-text">
        Share this meeting link with others you want in the meeting
      </p>
      <div className="meet-link">
        <span>{url}</span>
        <FontAwesomeIcon
          className="icon"
          icon={faCopy}
          onClick={() => navigator.clipboard.writeText(url)}
        />
      </div>
      <p className="small-text">Joined as Admin</p>
    </div>
  );
};

export default MeetingInfo;