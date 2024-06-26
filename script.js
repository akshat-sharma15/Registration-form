
        function validateform() {
            console.log("hii html");
            var firstn = document.getElementById("firstn").value;
            var lastn = document.getElementById("lastn").value;
            var email = document.getElementById("email").value;
            var mobno = document.getElementById("mobno").value;
            var clgname = document.getElementById("clgname").value;

            var firstnError = document.getElementById("firstnError");
            var lastnError = document.getElementById("lastnError");
            var emailError = document.getElementById("emailError");
            var mobnoError = document.getElementById("mobnoError");
            var clgnameError = document.getElementById("clgnameError");

            var isValid = true;

            // Validate First Name
            if (firstn.length < 3) {
                firstnError.innerHTML = "Name length too short";
                isValid = false;
            } else {
                firstnError.innerHTML = "";
            }

            // Validate Last Name
            if (lastn.length < 3) {
                lastnError.innerHTML = "Name length too short";
                isValid = false;
            } else {
                lastnError.innerHTML = "";
            }

            // Validate Email
            if (!/^\S+@\S+\.\S+$/.test(email)) {
                emailError.innerHTML = "Invalid email format";
                isValid = false;
            } else {
                emailError.innerHTML = "";
            }

            // Validate Mobile Number
            if (!/^\d{10}$/.test(mobno)) {
                mobnoError.innerHTML = "Invalid mobile number";
                isValid = false;
            } else {
                mobnoError.innerHTML = "";
            }

            // Validate College Name
            if (clgname.length < 3) {
                clgnameError.innerHTML = "College name length too short";
                isValid = false;
            } else {
                clgnameError.innerHTML = "";
            }
            
            return isValid;
        }