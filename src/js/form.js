document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("order-action").onclick = async () => {
        let inputs = ["name", "surname", "phone", "email"];
        let hasError = false;
        inputs.forEach(input => {
            let element = document.getElementById(input);
            if (!element.value) {
                element.parentElement.style.background = "red";
                hasError = true;
            } else {
                element.parentElement.style.background = "";
            }
        });
        if (!hasError) {
            alert("Thank you for your order! We will contact you soon!");

            let formData = new FormData();
            inputs.forEach(input => {
                formData.append(input, document.getElementById(input).value);
            });

            try {
                let response = await fetch('sendmail.php', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    let result = await response.text();
                    alert(result);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };
});
