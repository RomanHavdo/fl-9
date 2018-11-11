app.controller("postsControler", function ($scope) {
    $scope.posts = wallPosts;
    $scope.counter = $scope.posts.length;
    $scope.save = function (title, message) {
        $scope.posts.push({
            "id": $scope.counter++,
            "User": "Roman Havdo",
            "img": "assets/img/man2.jpg",
            "title": title,
            "post": message,
            "likes": "0",
            "isLiked": false,
            "edit": "true"
        })
    }
    $scope.update = function (item, upTitle, upPost) {
        item.title = upTitle;
        item.post = upPost;
    }
    $scope.like = function (item) {
        if (item.isLiked === false) {
            item.likes++;
            item.isLiked = true;
        } else {
            item.likes--;
            item.isLiked = false;
        }

    }
    
});