export default function initLoadMore(path, btnTranslation, allPresentationCount)
{
    var presentationOffset = 1;

    $('#load-more-btn').click(function () {
        $.ajax({
            url: path,
            type: 'GET',
            data: {
                offset: presentationOffset,
            },
            contentType: 'application/json',
            success: function (response) {
                if (response != null) {
                    presentationOffset = response['offset'];

                    response['presentations'].forEach((presentation) => {
                        loadMoreSuccess(
                            presentation.url,
                            presentation.image,
                            presentation.imageWebp,
                            presentation.datetime,
                            presentation.title,
                            presentation.description,
                            btnTranslation
                        );
                    });
                    if (response['presentations'].length < response['offsetLimit'] || allPresentationCount <= response['offsetLimit'] * presentationOffset) {
                        $('#load-more-btn').css('display', 'none');
                    }
                } else {
                    $('#load-more-btn').css('display', 'none');
                }
            },
        });
    });
}

function loadMoreSuccess(url, imageJpeg, imageWebp, datetime, title, description, btnTranslation)
{
    $('.presentations-wrapper').append(
        '' +
            '<div class="row presentation">' +
            '<div class="col img">' +
            '<a href="' +
            url +
            '">' +
            '<picture>' +
            '<source srcset="' +
            imageWebp +
            '" type="image/webp">' +
            '<source srcset="' +
            imageJpeg +
            '" type="image/jpeg">' +
            '<img src="' +
            imageJpeg +
            '" alt="presentation1">' +
            '</picture>' +
            '</a>' +
            '</div>' +
            '<a href="#" class="col title">' +
            '<p class="date">' +
            datetime +
            '</p>' +
            '<h2>' +
            title +
            '</h2>' +
            '<p>' +
            description +
            '</p>' +
            '</a>' +
            '<div class="col button">' +
            '<a href="' +
            url +
            '" class="btn btn-border btn-arrow-right">' + btnTranslation + '</a>' +
            '</div>' +
            '</div>'
    );
}
