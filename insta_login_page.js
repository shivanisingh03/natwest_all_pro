const container = document.querySelector('.container');
const LOrSBtn = document.querySelector('.loginOrSignup')
let loginBoolean = false
const displayFunction = () => {
    loginBoolean ? LOrSBtn.innerHTML = `SignUp` : LOrSBtn.innerHTML = `Login`
    //true -> then-->else

    loginBoolean ? container.innerHTML += `<div id="login">
<label for="">email</label>
<input type="email" placeholder="email">
<label for="">password</label>
<input type="password" placeholder="password">
<button class="BTN">Login</button>
</div>`: container.innerHTML += ` <div id="login">
<label for="Name">Name</label>
<input type="text" placeholder="name">
<label for="">email</label>
<input type="email" placeholder="email">
<label for="">password</label>
<input type="password" placeholder="password">
<button class="BTN">Signup</button>
</div>`
}
displayFunction()
LOrSBtn.addEventListener('click', () => {
    loginBoolean = !loginBoolean
    //loginBoolean = true
    //true=!true=false
    container.innerHTML=''
    displayFunction()
})