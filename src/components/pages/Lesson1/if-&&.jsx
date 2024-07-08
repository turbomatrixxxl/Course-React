import React from "react";
import PropTypes from "prop-types";

// export const messages = ["alfa", "beta", "gamma", "teta"];

const Mailbox = ({ username, unreadMessages }) => {
  return (
    <div>
      <h1>Hello {username}!</h1>
      {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages.</p>
      )}

      {unreadMessages.length > 0 ? (
        unreadMessages.map((x, index) => {
          console.log(`Message ${index + 1} is ${x}`);
          return (
            <p key={index}>
              Message {index + 1} : {x}
            </p>
          );
        })
      ) : (
        <p>You have no unread messages.</p>
      )}
    </div>
  );
};

Mailbox.propTypes = {
  username: PropTypes.string.isRequired,
  unreadMessages: PropTypes.array,
};

export default Mailbox;
