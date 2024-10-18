export function addFieldWithButton(listSelector)
{
    var list = $(listSelector);
    var counter = list.data('widget-counter') || list.children().length;
    var newWidget = list.attr('data-prototype');
    newWidget = newWidget.replace(/__name__/g, counter);

    counter++;

    list.data('widget-counter', counter);

    var newElem = $(list.attr('data-widget-field')).html(newWidget);
    newElem.appendTo(list);
}
export function generateDynamicFields(
    generatedSelector,
    btnSelector,
    listSelector
) {
    let numberOfFields = $(generatedSelector).length;
    let fieldsToGenerate = 0;

    if (1 - numberOfFields > 0) {
        //generate max 3 tag inputs
        fieldsToGenerate = 1 - numberOfFields;
    }

    for (let i = 0; i < fieldsToGenerate; i++) {
        addFieldWithButton(listSelector);
    }

    $(btnSelector).click(function (e) {
        addFieldWithButton(listSelector);
    });
}
