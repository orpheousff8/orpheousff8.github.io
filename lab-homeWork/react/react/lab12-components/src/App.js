import React from 'react';

function CommentDate(props) {
  return (
    <div className="Comment-date">
      {/* {formatDate(props.date)} */}
      {props.date}
    </div>
  );
}

function CommentText(props) {
  return (
    <div className="Comment-text">
      {props.text}
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar {...props} />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
  );
}

function Comment(props) {
  const { text, date, ...rest } = props;
  return (
    <div className="Comment">
      <UserInfo {...rest} />
      <CommentText text={text} />
      <CommentDate date={date} />
    </div>
  );
}

function App() {
  const myObj = {text:"Kono Dio da!", date:"14 Sep 2020", author: {name:"Dio Brando", avatarUrl: require('./dio.jpg')}};
  return (
    <>
      <div>
        <img src={require('./Capture.PNG')} />
      </div>
      <hr />
      <div>
        <Comment {...myObj} />
      </div>
    </>
  );
}

export default App;
