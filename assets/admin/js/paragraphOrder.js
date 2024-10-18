function swapTinyMces(a, b)
{
            var aparent = a.parentNode;
            var asibling = a.nextSibling === b ? a : a.nextSibling;
            const el1TinyMceId = $(a).find('textarea').attr('id');
            const el2TinyMceId = $(b).find('textarea').attr('id');
            tinymce.get(el1TinyMceId).remove();
            tinymce.get(el2TinyMceId).remove();
            b.parentNode.insertBefore(a, b);
            aparent.insertBefore(b, asibling);
            initTinymce(el1TinyMceId, items);
            initTinymce(el2TinyMceId, items);
};

        $(document).ready(function () {
            const tinyMcesWrapper = $('.tinyMceWrapper');
            var dataOrder = 0;
            tinyMcesWrapper.each(function () {
                $(this).data('order', dataOrder++);
                $(this).prepend('<div class="d-flex tinyMceArrowsWrapper pt-2 pb-2"><button type="button" class="btn btn-sm btn-primary me-2 btnUpArrow"><svg version="1.1" class="upArrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"><path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/></svg></button><button type="button" class="btn btn-sm btn-primary btnDownArrow"><svg version="1.1" class="downArrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"><path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/></svg></button></div>');
            });

            $('.btnUpArrow').on('click', function () {
                const wrapperElement = $(this).parent().parent();
                const input = $(wrapperElement).find('input');
                const textarea = $(wrapperElement).find('textarea');

                var inputNameWrapper = $(wrapperElement).find('input').attr('name');
                var textareaNameWrapper = $(wrapperElement).find('textarea').attr('name');
                var elementBefore;
                var inputNameBefore;
                var textareaNameBefore;

                if ($(wrapperElement).data('order') === 0) {
                    //element is first no need to do anything else
                    return;
                } else {
                    tinyMcesWrapper.each(function (index, element) {
                        if ($(element).data('order') === wrapperElement.data('order') - 1) {
                            elementBefore = element;
                            inputNameBefore = $(element).find('input').attr('name');
                            textareaNameBefore = $(element).find('textarea').attr('name');
                        }
                    });
                    swapTinyMces(wrapperElement[0], elementBefore);
                    $(elementBefore).data('order', $(elementBefore).data('order') + 1);
                    $(wrapperElement).data('order', $(wrapperElement).data('order') - 1);

                    $(wrapperElement).find('input').attr('name', inputNameBefore);
                    $(elementBefore).find('input').attr('name', inputNameWrapper);

                    $(wrapperElement).find('textarea').attr('name', textareaNameBefore);
                    $(elementBefore).find('textarea').attr('name', textareaNameWrapper);
                }
            });

            $('.btnDownArrow').on('click', function () {
                const wrapperElement = $(this).parent().parent();
                var inputNameWrapper = $(wrapperElement).find('input').attr('name');
                var textareaNameWrapper = $(wrapperElement).find('textarea').attr('name');
                var elementAfter;
                var inputNameAfter;
                var textareaNameAfter;

                if ($(wrapperElement).data('order') === dataOrder) {
                    //element is last no need to do anything else
                    return;
                } else {
                    tinyMcesWrapper.each(function (index, element) {
                        if ($(element).data('order') === wrapperElement.data('order') + 1) {
                            elementAfter = element;
                            inputNameAfter = $(element).find('input').attr('name');
                            textareaNameAfter = $(element).find('textarea').attr('name');
                        }
                    })
                    swapTinyMces(wrapperElement[0], elementAfter);
                    $(elementAfter).data('order', $(elementAfter).data('order') - 1);
                    $(wrapperElement).data('order', $(wrapperElement).data('order') + 1);

                    $(wrapperElement).find('input').attr('name', inputNameAfter);
                    $(elementAfter).find('input').attr('name', inputNameWrapper);

                    $(wrapperElement).find('textarea').attr('name', textareaNameAfter);
                    $(elementAfter).find('textarea').attr('name', textareaNameWrapper);
                }
            });
        })