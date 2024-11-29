export function checkTokenExpiration() {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1])); // Decode the token payload
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

        if (payload.exp < currentTime) {
            // If token has expired, remove it and redirect to login
            localStorage.removeItem('token');
            alert('Your session has expired. Please log in again.');
            window.location.href = '/login'; // Redirect to the login page
        }
    }
}
