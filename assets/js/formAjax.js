export default function initFormAjax(path, formId)
{
    $("#" + formId).on('submit', function (e) {
        e.preventDefault();
        const formURL = path;
        const formData = new FormData(this);
        $.ajax({
            url: formURL,
            type: 'POST',
            data: formData,
            mimeType: "multipart/form-data",
            contentType: false,
            cache: false,
            processData: false,
            success: function (data, textStatus, jqXHR) {
                $("#" + formId).trigger('reset');
            }
        });
    });
}