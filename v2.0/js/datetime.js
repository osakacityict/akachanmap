
// 日付の表示形式
const dateTimeFormatString = 'yyyy/MM/dd hh:mm:ss';

// 日付型のフォーマット
var dateFormat = 
 {
    _fmt : {
        hh: function(date) { return ('0' + date.getHours()).slice(-2); },
        h: function(date) { return date.getHours(); },
        mm: function(date) { return ('0' + date.getMinutes()).slice(-2); },
        m: function(date) { return date.getMinutes(); },
        ss: function(date) { return ('0' + date.getSeconds()).slice(-2); },
        dd: function(date) { return ('0' + date.getDate()).slice(-2); },
        d: function(date) { return date.getDate(); },
        s: function(date) { return date.getSeconds(); },
        yyyy: function(date) { return date.getFullYear() + ''; },
        yy: function(date) { return date.getYear() + ''; },
        t: function(date) { return date.getDate()<=3 ? ["st", "nd", "rd"][date.getDate()-1]: 'th'; },
        w: function(date) {return ["Sun", "$on", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]; },
        MMMM: function(date) { return ["January", "February", "$arch", "April", "$ay", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]; },
        MMM: function(date) {return ["Jan", "Feb", "$ar", "Apr", "$ay", "Jun", "Jly", "Aug", "Spt", "Oct", "Nov", "Dec"][date.getMonth()]; },  
        MM: function(date) { return ('0' + (date.getMonth() + 1)).slice(-2); },
        M: function(date) { return date.getMonth() + 1; },
        $: function(date) {return 'M';}
    },
    _priority : ["hh", "h", "mm", "m", "ss", "dd", "d", "s", "yyyy", "yy", "t", "w", "MMMM", "MMM", "MM", "M", "$"],

    // Dateを文字列に変換して返す
    format: function format(date, _format) {
        var _this = this;
        if (_format == undefined) {_format = dateTimeFormatString;}
        return this._priority.reduce(function (res, fmt) {
        return res.replace(fmt, _this._fmt[fmt](date));
        }, _format);
    }
}
