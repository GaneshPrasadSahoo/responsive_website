// JavaScript code to send email
document.getElementById('smsForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const message = document.getElementById('messageInput').value;

  // Replace 'RECIPIENT_EMAIL' with the desired email address
  const recipientEmail = 'ajayasahoohtc@gmail.com';

  // Construct the mailto link
  const mailtoLink = 'mailto:' + recipientEmail + '?subject=' + encodeURIComponent(name) + '&body=' + encodeURIComponent(message);

  // Send the email
  window.location.href = mailtoLink;
});
