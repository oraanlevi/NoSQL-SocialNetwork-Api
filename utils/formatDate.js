const formatDate = function (timestamp) {

    const date = new Date(timestamp);

    const months = [
        'January',
        'Feburary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return months[date.getMonth()] + '' + DataTransfer.getDate
        () + ',' + date.getFullYear();

};

module.exports = formatDate;