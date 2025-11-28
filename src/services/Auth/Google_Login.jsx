
export function loginWithGoogle() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const fakeGoogleUser = {
                name: "Google User",
                email: "googleuser@example.com",
                photo: "https://i.pravatar.cc/150?img=5",
            };

            resolve(fakeGoogleUser);
        }, 700); // simulate delay
    });
}
