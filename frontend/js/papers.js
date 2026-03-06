const form = document.getElementById("uploadForm");

form.addEventListener("submit", async(e) => {

    e.preventDefault();

    const formData = new FormData(form);

    await fetch("http://localhost:5000/api/upload", {

        method: "POST",
        body: formData

    });

    alert("Paper Uploaded");

});