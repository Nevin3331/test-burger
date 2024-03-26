/* document.addEventListener("DOMContentLoaded", () => {
    let forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", async (event) => {
            event.preventDefault(); // Предотвращаем отправку формы

            let inputs = form.querySelectorAll("input");
            let hasError = false;

            inputs.forEach(input => {
                if (!input.value) {
                    input.parentElement.style.background = "red";
                    hasError = true;
                } else {
                    input.parentElement.style.background = "";
                }
            });

            if (!hasError) {
                alert("С Вами скоро свяжутся!");
                form.reset();
            }
        });

        let inputs = form.querySelectorAll("input");
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                if (input.value) {
                    input.parentElement.style.background = "";
                }
            });
        });
    });
});
 */