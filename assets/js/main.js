/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) => {
    const input = document.getElementById(inputPass),
            iconEye = document.getElementById(inputIcon);

    iconEye.addEventListener('click', () => {
        // Change password to text
        if(input.type === 'password'){
            // Switch to text
            input.type = 'text'

            // Add icon and remove icon
            iconEye.classList.remove('ri-eye-off-line')
            iconEye.classList.add('ri-eye-line')
        }else{

            // Switch to text
            input.type = 'text'
            input.type = 'password'

            // Add icon and remove icon
            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
            
        }
    })
}

showHiddenPass('password', 'input-icon')