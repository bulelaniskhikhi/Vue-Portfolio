<template>
    <form action="https://formspree.io/f/xoqrkjog">

        <label for="fname" class="fw-light"  style="color: black; font-size: 2rem">First name:</label>
        <br>

        <input type="text" id="fname" class=" w-100">
        <br><br>
 
        <label for="femail" class="fw-light" style="color: black; font-size: 2rem">Email:</label>
        <br>

        <input type="email" name="email" id="femail" class=" w-100">
        <br><br>

        <label for="fmessage" class="fw-light" style="color: black; font-size: 2rem">message</label>
        <br>

        <textarea name="comment" form="usrform" id="fmessage" class=" w-100">Enter text here...</textarea>
        <br><br>

        <button class="btn ps-2 pe-2" type="submit" >Submit</button>
        

    </form>
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
}

.btn{
    display: flex;
    justify-content: center;
    background-color: #ffc2cc;
    border-radius: 20px;
    color: white;
}
    
</style>