// Wait until the DOM is fully loaded before adding functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create the modal HTML structure
    const modalHTML = `
    <div class="modal" id="imageModal">
        <div class="modal-content">
        <span class="close" id="closeModal">&times;</span>
        <img src="https://github.com/mdameron0/trump-toes/blob/main/src/img/trump-toes.gif?raw=true" alt="Trump Toes :)">
        </div>
    </div>
    `;

    // Create a style element to hold the CSS
    const style = document.createElement('style');
    style.innerHTML = `
    /* Modal styles */
    .modal {
        display: none; 
        position: fixed; 
        z-index: 1; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        background-color: rgba(0,0,0,0.7); 
        overflow: auto;
        padding-top: 60px;
    }

    .modal-content {
        background-color: #fefefe;
        margin: 5% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 600px;
    }

    .modal img {
        width: 100%;
        height: auto;
    }

    .close {
        color: #aaa;
        font-size: 28px;
        font-weight: bold;
        position: absolute;
        top: 10px;
        right: 25px;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    `;
    document.head.appendChild(style);

    // Append the modal HTML to the body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Get the modal element and close button
    const modal = document.getElementById("imageModal");
    const closeModalButton = document.getElementById("closeModal");
    modal.style.display = "block";

    // Close the modal when the close button is clicked
    closeModalButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Close the modal if the user clicks anywhere outside the modal content
    window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    });
  });
  