for (let i = 0; i < 3; i++) {
    $(`.next-items${i}`).hide();
}
let nextItemCounter = 0;


$('#view-more').click(function () {
    $(`.next-items${nextItemCounter}`).show();
    nextItemCounter++;
    if (nextItemCounter === 3) {
        $('#view-more').hide()
    }
});

let id = 0;
$('.item').click(function () {

    $('#myModal').css('display', 'block');

    id = $(this).attr('id');

    $('.name').text(username);
    $('.target-img').attr('src', media[id].display_url);
    $('.place').text(media[id].location);
    if (media[id].location === '') {
        $('.name').css('padding-bottom', '10px');
    }
    $('.count-like').text(media[id].edge_liked_by.count);
    $('.info').text(media[id].edge_media_to_caption);


    $('.close').click(e => $(e.target).parent().parent().css('display', 'none'))

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('#myModal').css('display', 'none');
            $('.name').css('padding-bottom', '0');
        }
    });

    $(window).click(function (event) {
        if (event.target === $('#myModal')[0]) {
            $('#myModal').css('display', 'none');
            $('.name').css('padding-bottom', '0');
        }
    })

    let modalImg = $('#img01');
    let newSrc = $(this).find('img').attr('src');
    modalImg.attr('src', newSrc);

    $('.change_btn').click(function () {
        $('.name').css('padding-bottom', '0');
        let btn_click = $(this).find('a').html();
        let current_src = $('#img01').attr('src');
        $('.myImg').each(function () {
            if ($(this).attr('src') === current_src) {
                let current_index = $(this).parent().attr('id');
                if (btn_click === 'prev') {
                    let new_index = parseInt(current_index) - 1;
                    if (new_index > 0 && new_index < 21) {
                        $('.info').text(media[new_index].edge_media_to_caption);
                        if (media[new_index].location === '') {
                            $('.name').css('padding-bottom', '10px');
                        }
                        $('.place').text(media[new_index].location);
                        $('#img01').attr('src', $('.item:eq(' + new_index + ')').find('img').attr('src'));
                        $('.count-like').text(media[new_index].edge_liked_by.count);
                    }
                } else if (btn_click === 'Next') {
                    let new_index = parseInt(current_index) + 1;
                    if (new_index > 0 && new_index < 21) {
                        $('.info').text(media[new_index].edge_media_to_caption);
                        if (media[new_index].location === '') {
                            $('.name').css('padding-bottom', '10px');
                        }
                        $('.place').text(media[new_index].location);
                        $('#img01').attr('src', $('.item:eq(' + new_index + ')').find('img').attr('src'));
                        $('.count-like').text(media[new_index].edge_liked_by.count);
                    }
                }

            }
        });

    });


})


let media = [];
let username;
let profile_pic_url;


//ajax becouse local files in chorome doesn't work
$.getJSON({
    url: 'https://api.myjson.com/bins/6st54',
    async: true,
    dataType: 'json',
    success: function (json) {
        username = json.username;
        profile_pic_url = json.profile_pic_url;
        media = json.media;
    }
});
$('.spaner').css('display', 'none');
$('.spaner-2').css('display', 'none');

$('.item').hover(function () {
    let string = `${media[$(this).attr('id')].edge_liked_by.count} 
    ${media[$(this).attr('id')].edge_media_to_comment.count}`;
    $('.spaner', this).css('display', 'block');
    $('.spaner-2', this).css('display', 'block');
    $('.content', this).text(string);
}, function () {
    $('.content', this).text('');
    $('.spaner', this).css('display', 'none');
    $('.spaner-2', this).css('display', 'none');
});
