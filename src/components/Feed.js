import React from "react";
import "./Feed.css";

import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <>
      <div className="feed">
        <StoryReel />
        <MessageSender />
        <Post
          profilePic="https://scontent.flas1-1.fna.fbcdn.net/v/t1.0-9/55478023_1526013434202201_902892929817772032_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=DUR5AQ8hJT4AX_OOSc4&_nc_ht=scontent.flas1-1.fna&oh=124e84d852eb02eb28c86837b39cd2d6&oe=5F7B8171"
          message="WOW"
          timestamp="This is timestamp"
          username="Ryan Kim"
          image="https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ"
        />
        <Post
          profilePic="https://scontent.flas1-1.fna.fbcdn.net/v/t1.0-9/55478023_1526013434202201_902892929817772032_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=DUR5AQ8hJT4AX_OOSc4&_nc_ht=scontent.flas1-1.fna&oh=124e84d852eb02eb28c86837b39cd2d6&oe=5F7B8171"
          message="WOW"
          timestamp="This is timestamp"
          username="Ryan Kim"
        />
      </div>
    </>
  );
}

export default Feed;
