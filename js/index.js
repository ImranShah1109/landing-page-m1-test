function toggeleMobileMenu(menu)
{
    menu.classList.toggle('open');
}

function submitForm()
{
    let fName = document.getElementById('fName').value
    let lName = document.getElementById('lName').value;
    let emailAdd = document.getElementById('emailAdd').value;
    let reason = document.getElementById('reason').value;

    // console.log(fName+" "+lName+" "+email+" "+reason);

    // console.log(typeof emailAdd)
    // console.log(fName);

    if(fName != "" && lName != "" && emailAdd != "" && reason != "")
    {
        alert("Form submitted successfully!")
    }
    else
    {
        alert("All fields are required!")
    }
}