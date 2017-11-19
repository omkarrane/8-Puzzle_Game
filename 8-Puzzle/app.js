var app = angular.module("8-Puzzle", []);
app.controller('PuzzleController', ['$scope',function ($scope) {
    $scope.numberValue = [];
    $scope.newGame = function () {
        var check = 0;
        var puzzleData = [];
        var realData = [];
        while (true) {
            var index = Math.floor(Math.random() * 10);
            if (puzzleData.indexOf(index) == -1) {
                if (index > 0 && index < 10 ) {
                    puzzleData[check] = index;
                    if (index == 9) {
                        realData[check] = ' ';
                    }
                    else{
                    realData[check] = index;
                    }
                    check++;
                }
            }
            if (check == 9) { break;}
        }
        $scope.numberValue = realData;
    };
    $scope.up = function () {
        var temp = 0;
        var spaceIndex = $scope.numberValue.indexOf(' ');
        if (spaceIndex > 2) {
            temp = $scope.numberValue[spaceIndex];
            $scope.numberValue[spaceIndex] = $scope.numberValue[spaceIndex - 3];
            $scope.numberValue[spaceIndex - 3] = temp;
        }
        if (winGame() == true) {
            console.log("You Won");
        }
    };
    $scope.down = function () {
        var temp = 0;
        var spaceIndex = $scope.numberValue.indexOf(' ');
        if (spaceIndex < 6) {
            temp = $scope.numberValue[spaceIndex];
            $scope.numberValue[spaceIndex] = $scope.numberValue[spaceIndex + 3];
            $scope.numberValue[spaceIndex + 3] = temp;
        }
        if (winGame() == true) {
            console.log("You Won");
        }
    };
    $scope.left = function () {
        var temp = 0;
        var spaceIndex = $scope.numberValue.indexOf(' ');
        if (spaceIndex != 0 && spaceIndex != 3 && spaceIndex != 6) {
            temp = $scope.numberValue[spaceIndex];
            $scope.numberValue[spaceIndex] = $scope.numberValue[spaceIndex - 1];
            $scope.numberValue[spaceIndex - 1] = temp;
        }
        if (winGame() == true) {
            console.log("You Won");
        }
    };
    $scope.right = function () {
        var temp = 0;
        var spaceIndex = $scope.numberValue.indexOf(' ');
        if (spaceIndex != 2 && spaceIndex != 5 && spaceIndex != 8) {
            temp = $scope.numberValue[spaceIndex];
            $scope.numberValue[spaceIndex] = $scope.numberValue[spaceIndex + 1];
            $scope.numberValue[spaceIndex + 1] = temp;
        }
        if (winGame() == true) {
            console.log("You Won");
        }
    };
    var winGame = function () {
        for (var i = 0; i < 8; i++) {
            if (($scope.numberValue[i]) != (i + 1)) {
                return false;
            }
        }
        return true;
    }
}]);