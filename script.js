document.getElementById("download-btn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "new_resume.pdf";  // Replace with the actual file path
    link.download = "S_Chandra_Shekhar_Raju_Resume.pdf"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
