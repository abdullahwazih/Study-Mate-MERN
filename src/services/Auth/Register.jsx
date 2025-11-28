
export function registerUser({ name, email, photo, password }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem("users")) || [];

            // Check if email already exists
            const exists = users.find((u) => u.email === email);
            if (exists) {
                reject("User already exists!");
                return;
            }

            const newUser = { name, email, photo, password };
            users.push(newUser);

            localStorage.setItem("users", JSON.stringify(users));
            resolve(newUser);
        }, 800); // simulate server delay
    });
}
