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