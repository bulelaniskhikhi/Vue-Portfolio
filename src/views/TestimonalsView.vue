<template>
  <div id="testimonals" class="container" style="padding-top: 10rem">
    <h3 style="padding-bottom: 3rem; font-family: 'Roboto', sans-serif;font-size: 2.6rem; text-align: center;">TESTIMONALS</h3>
    <div class="row">
    <div class="col-md-6" v-for="testimonals in testimonals" style="">

      <div class="card" style="position: relative; background-color: transparent; "
    data-aos="fade-up"
    data-aos-duration="3000"
    >

    <img  :src="testimonals.img_URL" style="border-radius: 20px; overflow: hidden; width: auto;"/>

    <div id="backface" class="card-body overflow-auto">
      <div class="container" style="padding-bottom: 10rem; padding-top: 15rem;">
<h5 class="card-title" style="padding-bottom: 1rem; color: white;">
          {{ testimonals.name }}
        </h5>

        <p class="card-text" style="color: white">
          <strong>{{ testimonals.title }}</strong>
        </p>

        <p class="card-text fw-light" style="color: white; height: 10vh; overflow: auto">
          {{ testimonals.desc }}
        </p>
      </div>
        
      </div>

      </div>

    </div>
    </div>
  </div>
  
</template>

<style scoped>
#backface {
  background-color: rgba(255, 171, 188, 0.747);
  color: black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s linear;
  border-radius: 20px;
  width: auto;
}

#backface:hover {
  opacity: 1;
}

img {
  /* object-fit: cover; */
  /* border-radius: 20px; */
  width: 100%;
  height: auto;
}

.card-body {
  padding: 0;
}

.card {
  padding: 0;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  background-color: #ffffff00;
  margin: 20px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: white; 
  border-radius: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      testimonals: [
        {
          id: 1,
          name: "Joshé Theys",
          title: "Classmate & Pupil",
          desc: "Xena always brings a positive energy to whichever room she enters. She always manages to find solutions to issues that befuddle everyone else. She has a huge respect for her work and never gives up until everything works perfectly. She is the perfect fit if you're looking for an aspiring Developer who will create and evolve your websites.",
          img_URL: "https://i.postimg.cc/htbbswJV/Copy-of-Joshe-Jade-1.jpg",
        },
        {
          id: 2,
          name: "Mikhail Thomas",
          title: "Classmate & Pupil",
          desc: "It is my pleasure to strongly recommend Xena Skhikhi for the position in your team. My name is Mikhail Thomas and I have personally worked in close quarters with Bulelani and the energy they bring to the environment is truly unmatched. She is a talented, confident hard worker who speaks to people with the utmost respect regardless of who the are and completes every project with grace and finesse. I personally was immediately impressed with her confidence, fashion sense and her technical abilities.",
          img_URL: "https://i.postimg.cc/Y9gspRnR/Mikhail-2.jpg",
        },
        {
          id: 3,
          name: "Meagan Williams",
          title: "Classmate & Pupil",
          desc: "Xena is a hard working , determined web developer that always tries and make her work outspoken and creative.",
          img_URL: "https://i.postimg.cc/vTybMcz1/Meagan-2.jpg",
        },
        {
          id: 4,
          name: "Joel Mukanya",
          title: "Lecturer & teacher",
          desc: "Xena has shown good design abilities. She likes working in a team environment. I can see that Xena has many strengths as a coding student. She is constantly being challenged to expand her design skills every day. I think Xena is a great learner, so she will improve these skills quickly through hard work and studying. I recommend her. Joel- Coding Lecturer",
          img_URL: "https://i.postimg.cc/B6Rb9S8k/joel2.jpg",
        },
        {
          id: 5,
          name: "Amanda Gudlwa",
          title: "Classmate & Pupil",
          desc: "I was happy to see Xena`s work. Her ambition and creativity always create something special. If you are looking for something really unique, I highly recommend her.",
          img_URL: "https://i.postimg.cc/DzGY6YfM/Amanda-1.jpg",
        },
        {
          id: 6,
          name: "Clayton Adonis",
          title: "Classmate & Pupil",
          desc: "Xena is very passionate about her projects and will do anything to complete them. Her presence in the workplace can also better the mood of others",
          img_URL: "https://i.postimg.cc/vHjzKLKF/clayton.jpg"
        }
      ],
    };
  },
};
</script>
