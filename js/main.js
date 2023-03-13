function mostrar(){

(async () => {

   const { value: email } = await Swal.fire({
     title: 'Input email address',
     input: 'email',
     inputLabel: 'Your email address',
     inputPlaceholder: 'Enter your email address'
   })
   
   if (email) {
    // Agregar el valor de email al localStorage
    localStorage.setItem('email', email);

    Swal.fire(`Entered email: ${email}`)
  }
   
   })()
}