document.getElementById('save-bookmark').addEventListener('click', () => {
    const title = document.getElementById('bookmark-title').value;
    const reminderTime = document.getElementById('reminder-time').value;
    const message = document.getElementById('message');
  
    if (title && reminderTime) {
      chrome.storage.sync.set(
        { [title]: { reminderTime: reminderTime } },
        function () {
          message.textContent = "Bookmark reminder saved!";
        }
      );
    } else {
      message.textContent = "Please fill in both fields.";
    }
  });
  