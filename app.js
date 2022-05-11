if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("./serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
    function handleNetworkChange(event) {
        if (navigator.onLine) {
            // alert("ONLINE");

            Notification.requestPermission((result) => {
                if (result === 'granted') {
                    navigator.serviceWorker.ready.then((registration) => {
                        registration.showNotification('ONLINE', {
                            body: 'CONNEXION OK',
                            icon: 'logo.png',
                            vibrate: [200, 100, 200, 100, 200, 100, 200],
                            tag: 'Network'
                        })
                    })
                }
            })


            document.location.href = "index.html";
        } else {
            document.location.href = "offline.html";

        }
    }
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);
}