countdown.setLabels(
    ' milisekundu|s|m|h|d|týden|m| r| desetiletí| století| milénium',
    ' milisekund|s|m|h|d|týdnů|m|r| desetiletí| století| milénií',
    ' ',
    ' ',
    ''
);

const $countDownElement = $('#countdown');
const countDownInterval = setInterval(() => {
    $countDownElement.text(
        countdown(new Date("{{ wac.datetime|date('Y/m/d') }}")).toString()
    );
}, 1000);
