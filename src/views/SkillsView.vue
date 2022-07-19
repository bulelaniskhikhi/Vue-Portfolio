<template>
  
    <div class="container">

        <div id="Skillinfo" class="d-flex flex-wrap " style=" height: 70vh">

        <div  class='d-flex justify-content-' style="width: 500px; display: flex;
    justify-content: center;">
            <img class="floating" src="https://picsum.photos/200/300?random=4" alt="" style="width: 100%">
        </div>

        <!-- <div style="background-color: red; width: 100px; height:10vh">
        empty gap
            </div> -->

        <div style="width: 500px; background-color: yellow;" >
            <h2>About me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsam eos, veniam vel fugit est, enim maiores eveniet non recusandae sapiente a omnis quas molestiae alias laudantium tempore architecto possimus!
            Officia voluptatem vel reprehenderit quisquam vero distinctio, cupiditate ex cumque officiis placeat eveniet delectus ut quasi possimus sed libero debitis quam dolorum deleniti animi. Dolorum at ducimus est voluptatibus perspiciatis?</p>
        </div>

        <div class="flex-column-reverse d-flex justify-content-end" style='width: 100px; background-color: green;'>
            <i class="fa-brands fa-html5"></i>
            <br>

            <i class="fa-brands fa-css3-alt"></i>
            <br>

            <i class="fa-brands fa-bootstrap"></i>
            <br>

            <i class="fa-brands fa-js-square"></i>
        </div>
    </div>
    
    </div>
      

</template>


<style scoped>
*{
    padding: 0;
    margin: 0;
}

i{
    font-size: 50px;
    display: flex;
    justify-content: center;
    color: #ffc2cc;
}

#Skillinfo{
    gap: 100px;
}

img{
    display: flex;
    justify-content: center;
    border-radius: 20px;
    
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.floating {  
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    /* margin-left: 30px;
    margin-top: 5px; */
}

@keyframes floating {
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 15px); }
    to   { transform: translate(0, -0px); }    
}
</style>

