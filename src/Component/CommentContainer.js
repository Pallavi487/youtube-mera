import React from "react";

const commentsData = [
  {
    id: 1,
    user: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    comment: "This is an amazing article! Learned a lot from it.",
    timestamp: "2024-09-26 12:34 PM",
    likes: 10,
    replies: [
      {
        id: 2,
        user: "Jane Smith",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        comment: "I agree with you, John! Great content.",
        timestamp: "2024-09-26 12:50 PM",
        likes: 3,
      },
    ],
  },
  {
    id: 3,
    user: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    comment:
      "Can someone clarify point number 5? I didn't fully understand it.",
    timestamp: "2024-09-26 01:15 PM",
    likes: 5,
    replies: [
      {
        id: 6,
        user: "Sarah Lee",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        comment: "Me too! Keep them coming.",
        timestamp: "2024-09-26 01:45 PM",
        likes: 2,
      },
    ],
  },
  {
    id: 4,
    user: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    comment: "Looking forward to more articles like this!",
    timestamp: "2024-09-26 01:30 PM",
    likes: 8,
    replies: [
      {
        id: 5,
        user: "Sarah Lee",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        comment: "Me too! Keep them coming.",
        timestamp: "2024-09-26 01:45 PM",
        likes: 2,
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { user, comment, avatar } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-sm my-2">
      <img className="w-12 h-12" alt="users" src={avatar} />
      <div className="px-3">
        <p className="font-bold"> {user}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments, index }) => {
  return comments.map((commentsData) => (
    <div>
      <Comment data={commentsData} key={index} />
      <div className="pl-5  border border-l-black ml-5">
        {commentsData.replies && commentsData.replies.length > 0 && (
          <div className="pl-5 border border-l-black ml-5">
            <CommentList comments={commentsData.replies} />
            <CommentList comments={commentsData.replies} />
          </div>
        )}
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
