document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.login-form').addEventListener('submit', (event) => {
        event.preventDefault(); 
        alert('Login button clicked!');
    });
});
