// public/js/signup.js

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('.signup-form');
  
    if (signupForm) {
      signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
  

        const username = document.querySelector('#name-signup').value.trim();
        const email = document.querySelector('#email-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();
  console.log(username, email, password);
        if (username && email && password) {
          const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to sign up.');
          }
        }
      });
    }
  });