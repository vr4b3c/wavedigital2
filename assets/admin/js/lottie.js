var animation = bodymovin.loadAnimation({
    container: document.getElementById("lottie"),
    path: 'assets/img/dsagency.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
});