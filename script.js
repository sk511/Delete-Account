// script.js
document.getElementById('deletionForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const responseMessage = document.getElementById('responseMessage');

  try {
    const response = await fetch('https://your-backend-url.com/request-deletion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      responseMessage.textContent = 'Your request has been submitted successfully.';
    } else {
      responseMessage.textContent = 'Failed to submit the request. Try again.';
    }
  } catch (error) {
    responseMessage.textContent = 'An error occurred. Please try again later.';
  }
});
