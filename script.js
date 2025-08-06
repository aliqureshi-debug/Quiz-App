// script.js
// This script adds a button to open a popup dialog

document.addEventListener('DOMContentLoaded', function() {
  const popup = document.createElement('div');
  popup.id = 'popup';
  popup.style.display = 'none';
  popup.style.position = 'fixed';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.background = '#fff';
  popup.style.padding = '2rem';
  popup.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  popup.style.zIndex = '1000';
  popup.innerHTML = `
    <h2>Popup</h2>
    <p>This is a popup window!</p>
    <button id="closePopup">Close</button>
  `;
  document.body.appendChild(popup);

  document.getElementById('openPopup').addEventListener('click', function() {
    popup.style.display = 'block';
  });

  popup.querySelector('#closePopup').addEventListener('click', function() {
    popup.style.display = 'none';
  });
});
