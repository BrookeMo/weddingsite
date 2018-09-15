  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA2__h0mVns8BDI4Y2aTce9zfxoc5HXWG4",
    authDomain: "brynnandkaden.firebaseapp.com",
    databaseURL: "https://brynnandkaden.firebaseio.com",
    projectId: "brynnandkaden",
    storageBucket: "brynnandkaden.appspot.com",
    messagingSenderId: "382596678014"
  };
  firebase.initializeApp(config);

  // Set up Firebase Variables
  var database = firebase.database();

  // Announcements Code
  var announcements = database.ref('announcements');
  var childNumber = Math.floor(Math.random() * 9);
  console.log(childNumber);
  const submit = $("#submit");

  // Create new Contact Function
  function saveContact(firstname, lastname, email, address) {
    var firstname = $("#firstname").val().trim();
    var lastname = $("#lastname").val().trim();
    var email = $("#email").val().trim();
    var address = $("#address").val().trim();
    if (firstname == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (lastname == "") {
        alert("Name must be filled out");
        return false;
    }
    else {
        var childName = childNumber + " " + firstname + " " + lastname;
        announcements.child(childName).set({
            email: email,
            address: address 
        });
        console.log(childNumber);
    }
}
  // Submit form to Database function
  function submitForm(e) {
    e.preventDefault();
    saveContact(firstname, lastname, email, address);
    alert("Thank you! You've successfully submitted your information. You can expect an wedding announcement soon!");
    $("#firstname").val('');
    $("#lastname").val('');
    $("#email").val('');
    $("#address").val('');
  }

  // On click function to submit
  $(submit).click(submitForm);


