<template>
    <div class="container" style="padding-top: 10rem;" id="contact">
        <h3 style="padding-bottom: 3rem; font-family: 'Roboto', sans-serif; font-size: 3rem;">CONTACT</h3>
<form action="https://formspree.io/f/xoqrkjog" method="POST" id="form">

        <label for="fname" class="fw-light"  style="color: black; font-size: 2rem; font-family: 'Roboto', sans-serif;">First name:</label>
        <br>

        <input type="name" id="fname" class=" w-100">
        <br><br>
 
        <label for="femail" class="fw-light" style="color: black; font-size: 2rem; font-family: 'Roboto', sans-serif;">Your Email:</label>
        <br>

        <input type="email" name="email" id="femail" class=" w-100">
        <br><br>

        <label for="fmessage" class="fw-light" style="color: black; font-size: 2rem; font-family: 'Roboto', sans-serif;">message</label>
        <br>

        <textarea name="comment" form="usrform" id="fmessage" class=" w-100 "  >

        </textarea>
        <br><br>

        <button class="btn ps-2 pe-2 mx-auto" type="submit" style="margin-bottom: 20px" >Submit</button>
        

    </form>
    </div>
    
</template>

<style scoped>
label{
    display: flex;
    justify-content: center;
    

}
input{
    display: flex;
    justify-content: center;

    border-radius: 20px;
    border: none;
    background-color: #ffc2cc;
    height: 3rem;
    outline: none;

    color: white;

    padding-left: 5rem;
}

.btn{
    display: flex;
    justify-content: center;
    background-color: #ffc2cc;
    border-radius: 20px;
    color: white;
}
    
textarea{
    background-color: #ffc2cc;
    border-radius: 20px;
    color: white;
    outline: none;
    border: none;
    padding-left: 5rem;

    height: 20vh;
    resize: none;
}

button{
    padding-left: 20px !important;
    padding-right: 20px !important;
}
</style>