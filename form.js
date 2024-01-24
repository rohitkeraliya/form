 function submitForm() {
      // Check if all fields are filled
      if ($('#myForm input').filter(function() { return $(this).val(); }).length === 6) {
        // Hide the form
        $('#myForm').hide();
        // Show processing message and loading spinner
        $('.processing-message, .loading-spinner').show();

        $.ajax({
          url: "https://api.apispreadsheets.com/data/XOHrzQj1H1scPko7/",
          type: "post",
          data: $("#myForm").serializeArray(),
          success: function () {
            // Hide processing message and loading spinner on success
            $('.processing-message, .loading-spinner').hide();
            // Show success message
            $('.success-message').show();
            // Show back button
            $('.back-button').show();
          },
          error: function () {
            // Hide processing message and loading spinner on error
            $('.processing-message, .loading-spinner').hide();
            alert("There was an error :(");
          }
        });
      } else {
        alert("Please fill in all details!");
      }
    }

    // Function to navigate back in history
    function goBack() {
      window.history.back();
    }
 // Function to get URL parameter by name
    function getUrlParameter(name) {
      name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    // Get the value from URL parameter
    var passedValue = getUrlParameter('data');
 
    var textBoxt = document.getElementById('inputText');
    textBoxt.value = "button id: " + passedValue;
      document.getElementById("displayValue").innerText = "your product name: " + passedValue;

