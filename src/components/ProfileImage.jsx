function ProfileImage(props) {
  return (
    <img src={props.tweet[0].user.image} className="profile" alt="profile" />
  );
}

export default ProfileImage;
