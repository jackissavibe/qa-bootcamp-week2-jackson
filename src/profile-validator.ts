type UserProfile = {
    id: number;
    username: string;
    settings?: {
        notifications?: boolean;
    };
};
const user1: UserProfile = {
    id: 1,
    username: "jack",
    settings: {
        notifications: true
    }
};

const user2: UserProfile = {
    id: 2,
    username: "mary"
};

const user3: UserProfile = {
    id: 3,
    username: "peter",
    settings: {}
};
function isNotified(user: UserProfile): boolean {
    return user.settings?.notifications ?? false;
}

console.log("Notification enabled:", isNotified(user1));
console.log(isNotified(user2));
console.log(isNotified(user3));