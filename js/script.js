var heading_cur = 0;
function showHeading() {
    $('#heading' + (heading_cur + 1)).css({ opacity: 0 }).
        animate({ opacity: 1.0, left: "50px" }, 500);
    setTimeout(hideHeading, 1000);
}

function hideHeading() {
    $('#heading' + (heading_cur + 1)).css({ opacity: 1 }).
        animate({ opacity: 0, left: "-50px" },
            500, function () { showHeading(); });
    heading_cur = (heading_cur + 1) % 4;
}

$(document).ready(function () {
    showHeading();
})
