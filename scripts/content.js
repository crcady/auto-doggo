if (window.location.hostname.includes("login.microsoftonline.us")) {
    setTimeout(function() {
        i = document.getElementById("i0116")
        //b = document.getElementById("idSIButton9")
        i.value = "camdon.cady@us.af.mil"
        //i.click()
        //b.click()
    }, 100)
}

else {
    b = document.getElementById("CertificateAuthentication")
    b.click()
}