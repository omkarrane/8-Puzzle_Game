<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Puzzle.aspx.cs" Inherits="_8_Puzzle.Puzzle" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="angular.js"></script>
    <script src="app.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
</head>
<body ng-app="8-Puzzle" ng-controller="PuzzleController">
        <table>
            <tr>
                <td>{{numberValue[0]}}</td>
                <td>{{numberValue[1]}}</td>
                <td>{{numberValue[2]}}</td>
            </tr>
            <tr>
                <td>{{numberValue[3]}}</td>
                <td>{{numberValue[4]}}</td>
                <td>{{numberValue[5]}}</td>
            </tr>
            <tr>
                <td>{{numberValue[6]}}</td>
                <td>{{numberValue[7]}}</td>
                <td>{{numberValue[8]}}</td>
            </tr>
        </table>
    <button ng-click="newGame()">Click here for a New Game</button>
    <button ng-click="up()">Up</button>
    <button ng-click="down()">Down</button>
    <button ng-click="right()">Right</button>
    <button ng-click="left()">Left</button>
</body>
</html>
