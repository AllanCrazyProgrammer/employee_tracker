

$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCN8teZNge4T0NAU49anC9T5Zxrpt7Tv9Y",
        authDomain: "first-project-d98cb.firebaseapp.com",
        databaseURL: "https://first-project-d98cb.firebaseio.com",
        projectId: "first-project-d98cb",
        storageBucket: "first-project-d98cb.appspot.com",
        messagingSenderId: "568681754486"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    var name = "";
    var role = "";
    var startDate = 0;
    var monthlyRate = "";


    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
        alert("Employee added");

        // Grabbed values from text boxes
        name = $("#enterName").val().trim();
        role = $("#enterRole").val().trim();
        startDate = $("#enterDate").val().trim();
        monthlyRate = $("#enterRate").val().trim();

        // Code for handling the push
        database.ref().push({
            name: name,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP //unix time
        });

    });

    database.ref().on("child_added", function (snapshot) {
        // storing the snapshot.val() in a variable for convenience
        var sv = snapshot.val();


        var newRow = $("<tr>").append(
            $("<td>").text(name),
            $("<td>").text(role),
            $("<td>").text(startDate),
            $("<td>").text(""),
            $("<td>").text(monthlyRate),
            $("<td>").text("")
        );

    
        $("#tableId>tbody").append(newRow);



        // Handle the errors
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });

});