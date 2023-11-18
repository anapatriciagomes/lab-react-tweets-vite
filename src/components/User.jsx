function User(props) {
  return (
    <span className="user">
      <span className="name"> {props.tweet[0].user.name} </span>
      <span className="handle">{props.tweet[0].user.handle}</span>
    </span>
  );
}

export default User;
