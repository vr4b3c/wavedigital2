export default function initPreview(url)
{
    $('#preview-btn, #btnSecondaryPreview').on('click', function () {
        if (typeof tinyMCE !== 'undefined') {
            tinyMCE.triggerSave();
        }
        if ($('input[type=file][id*=coverImage]').length > 0 && $('input[type=file][id*=coverImage]').val() !== '') {
            getBase64(
                $('input[type=file][id*=coverImage]')[0].files[0],
                'coverImage'
            );
        } else {
            localStorage.setItem(
                'coverImage',
                $("img[data-identifier='coverImage']").prop('src')
            );
        }

        if ($('#wac_image1').length > 0) {
            const wacFileInputs = $('input[type=file][id*=wac_image]');
            wacFileInputs.each(function () {
                if ($(this).val() !== '') {
                    getBase64(
                        $(this)[0].files[0],
                        'wacImage' +
                            $(this)
                                .attr('id')
                                .substring($(this).attr('id').length - 1)
                    );
                } else {
                    localStorage.setItem(
                        'wacImage' +
                            $(this)
                                .attr('id')
                                .substring($(this).attr('id').length - 1),
                        $(
                            'img[data-identifier=wac_image' +
                                $(this)
                                    .attr('id')
                                    .substring($(this).attr('id').length - 1) +
                                'Img'
                        ).prop('src')
                    );
                }
                const bottomImageFileInputs = $(
                    'input[type=file][id*=wac_bottomImage]'
                );
                bottomImageFileInputs.each(function () {
                    if ($(this).val() !== '') {
                        getBase64(
                            $(this)[0].files[0],
                            'bottomImage' +
                                $(this)
                                    .attr('id')
                                    .substring($(this).attr('id').length - 1)
                        );
                    } else {
                        localStorage.setItem(
                            'bottomImage' +
                                $(this)
                                    .attr('id')
                                    .substring($(this).attr('id').length - 1),
                            $(
                                'img[data-identifier=bottomImage' +
                                    $(this)
                                        .attr('id')
                                        .substring($(this).attr('id').length - 1) +
                                    'Img'
                            ).prop('src')
                        );
                    }
                });
            });
        }
        let data = {};
        $('form')
            .serializeArray()
            .forEach((object) => {
                data[object.name] = object.value;
            });

        $.redirect(url, data, 'POST', '_blank');
    });
}

function getBase64(file, id)
{
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        localStorage.setItem(id, reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}
