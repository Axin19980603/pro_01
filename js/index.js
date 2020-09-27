$(function () {
    $('.item').on('click', 'a', function () {
        var page = $(this).text();
        console.log(page);
        getNewsList(page);
    });
    window.onbeforeunload = function (e) {
        console.log(111);
        getNewsList(page);
    }
    function getNewsList(page) {
        $.ajax({
            url: 'https://photo.sina.cn/aj/index?page=' + page + '&cate=recommend',
            // 代表我们要发起JSONP的数据请求
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: '__onGetData__',
            success: function (res) {
                console.log(res)
                var htmlStr = template('tpl-news', res)
                $('.content').html(htmlStr)
            }
        })
        $(document).ajaxStart(function () {
            $(".loading_gif").css("display", "block")
        })
        $(document).ajaxStop(function () {
            $(".loading_gif").css("display", "none")
        })
    }
    getNewsList();

})
console.log("111");
console.log("ssh")
