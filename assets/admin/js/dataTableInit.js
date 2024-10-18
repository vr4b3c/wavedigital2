export default function dataTableInit(id, orderByColumn, sort = 'desc')
{
    var orderBy;
    if (orderByColumn === undefined) {
        orderBy = [];
    } else {
        orderBy = [[orderByColumn, sort]];
    }

    $('#' + id).DataTable({
        searching: true,
        lengthChange: false,
        language: { url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/cs.json' },
        columnDefs: [
            { orderable: false, targets: [$(this).find('th').length - 1] },
        ],
        order: orderBy,
        pageLength: 50,
    });
}
