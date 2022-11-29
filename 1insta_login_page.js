const container = document.querySelector('.container');
const Button = document.querySelector('.loginOrSignup')
let loginBoolean = false
const displayFunction = () => {
    loginBoolean ? Button.innerHTML = `SignUp` : Button.innerHTML = `Login`

    loginBoolean ? container.innerHTML += `<div id="Image">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" />
    </div><div id="login">
    <input type="text" placeholder="Username">
    <input type="password" placeholder="Password">
    <button class="BTN">Login</button>
    <div id="hr"><hr>OR<hr></div>
    
    </div>`: container.innerHTML += `<div id="Image">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" />
    </div><div id="heading2">
    <p>Sign up to see photos <br> and videos from your friends.</p>
    
    <div class="container2"><img id="img2"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01KvvJBOlNfl0mrUE5lnHkVsp1YYSvYjQ1w&usqp=CAU" alt=""><p1>login with facebbok</p1> </div></div>

    
    
    <div id="hr"><hr>OR<hr></div>
    <div id="login">
    <input type="email" placeholder="Mobile Number or Email">
    <input type="text" placeholder="Full Name">
    <input type="text" placeholder="Username">
    <input type="password" placeholder="password">
    <button class="BTN">Signup</button>
    <h3>By signing up, you agree to our Terms, Data Policy and Cookies Policy.
    </div>`
}
displayFunction()
Button.addEventListener('click', () => {
    loginBoolean = !loginBoolean
    container.innerHTML = ''
    displayFunction()
})



