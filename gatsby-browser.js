//TEST
require('bootstrap/dist/css/bootstrap.min.css');
require('./src/assets/elagent-icon/style.css');
require('./src/assets/etline-icon/style.css');
require('./src/assets/flaticon/flaticon.css');
require('./src/assets/css/animate.css');
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
require('./src/assets/css/style.css');
require('./src/assets/css/responsive.css');
require("./src/components/Creativecarousel/style.scss");
// require('bootstrap/dist/js/bootstrap.min.js');
// require('popper.js');

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `Cette application a été mise à jour. ` +
        `Recharger le site pour voir les modification?`
    )

    if (answer === true) {
        window.location.reload()
    }
}