chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed, setting alarm...");
    chrome.alarms.create("reminder", { when: Date.now() + 5000 }); // Trigger reminder in 5 seconds
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    console.log("Alarm triggered:", alarm.name); // Log when alarm is triggered
    if (alarm.name === "reminder") {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icons/icon16.png",
        title: "Time Capsule Reminder",
        message: "It's time to revisit your bookmarked page!"
      });
    }
  });
  