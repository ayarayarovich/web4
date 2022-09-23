const SessionKeyNotificationSent = "notificationSent";

window.addEventListener("DOMContentLoaded", () => {
    if (window.sessionStorage.getItem(SessionKeyNotificationSent) == null) {
        const channel_id = "mmkpXbDpLtzAKMyuFeNy",
              message = `[${new Date().toLocaleString()}] Web4 has been visited`;

        fetch(`https://functions.yandexcloud.net/d4es5rl089b859oapcp2?channel_id=${channel_id}&message=${message}`)
            .then(response => {
            if (response.status === 200) {
                window.sessionStorage.setItem(SessionKeyNotificationSent, "1");
            }
        });
    }
});
