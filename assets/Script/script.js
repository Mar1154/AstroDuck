const welcomeWrapper = document.querySelector('.welcome-wrapper');
const cardButtons = document.querySelectorAll('.cards .card');

cardButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cardId = button.closest('.card').id;
        switch (cardId) {
            case '_card1':
                welcomeWrapper.style.backgroundImage = "url('https://cdn.akamai.steamstatic.com/steam/apps/1083090/ss_3c69d1be9a4267a967053092a9c0738ed11a74d0.1920x1080.jpg?t=1649210956')";
                break;
            case '_card2':
                welcomeWrapper.style.backgroundImage = "url('https://www.marslifehd.com/wp-content/uploads/2017/03/header.jpg')";
                break;
            case '_card3':
                welcomeWrapper.style.backgroundImage = "url('https://w.forfun.com/fetch/95/95ca17243a31b21dad06e6ef6c35e6e6.jpeg')";
                break;
            default:
                break;
        }
    });
});