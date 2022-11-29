const container = document.querySelector('.container');
const LOrSBtn = document.querySelector('.loginOrSignup')
let loginBoolean = false
const displayFunction = () => {
    loginBoolean ? LOrSBtn.innerHTML = `Don't have an account? <span style="color: blue;">SignUp</span>` : LOrSBtn.innerHTML = `  Have an account?<span style="color: blue;">Login</span> `
    //true -> then-->else

    loginBoolean ? container.innerHTML += `<div id="login">
<div id="img3"> <img src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" alt=""></div>
<label for=""></label><br>
<input type="email" placeholder="Email">
<label for=""></label><br>
<input type="password" placeholder="Password"><br>
<button class="BTN">Login</button>
<div id ="OR"><h2>_________</h2><h2>OR</h2><h2>_________</h2></div>
<div> <img id="facebook"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png" alt=""><p id="face"><b>Log in with Facebook</p> </div>
<div id=""forgot >Forgotten your Password?</div>
</div>`: container.innerHTML += ` <div id="login">
<div id="img4"> <img src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" alt=""></div>
<div id ="friends"><p2>Sign up to see photos and <br>videos from your friends.</p2></div><br>
<div id ="secondcontainer"> <img  id="facebook1"src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png"><h3>log in with facebook</h3></div><br>
<div id ="OR1"><h1>_________</h1><h1>OR</h1><h1>_________</h1></div>

<label for="Mobile number or email"></label>
<input type="text" placeholder="Mobile number or email"><br>
<label for=""></label>
<input type="Full Name" placeholder="Full Name"><br>
<label for=""></label>
<input type="UserName" placeholder="UserName"><br>
<label for=""></label>
<input type="password" placeholder="Password"><br>
<h6  id="learn">People who use our service may have uploaded<br> your contact information to Instagram. <b>Learn more</h6>
<h4 id="more">By signing up, you agree to our Terms, Privacy<br> Policy and Cookies Policy.</h4>
<button class="BTN1">Sign up</button></div>
<div id="get_app" <p> Get the App.</p>
<div id="appimg"><img src="https://appradar.com/wp-content/uploads/wpe-uploads/App-Store-Google-Play-Icons.png"</div>

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





