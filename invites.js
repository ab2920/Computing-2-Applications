const invites = Object.create(null);

const myFriend = {
    'name': 'Alex',
    'group': 'Music'
};

const makeInvitation = function (friend) {
    const intro = `Dear ${friend.name}, come to my party on Saturday`;
    return intro;
};

console.log(
    makeInvitation(myFriend)
);

export default Object.freeze(invites);