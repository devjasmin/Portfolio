import profilePicture from "../assets/profile_picture.jpg";

function Hero() {
  return (
    <>
      <section>
        <img src={profilePicture} alt="Profilbild" className="h-48 w-48" />
        <p className="text-amber-100 mb-3.5">Hi, ich bin Jasmin</p>
        <p className="text-green-600 text-5xl mb-6">
          Ihre neue Frontend Developerin
        </p>
        <br />
        <span className="text-white py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          dolorem obcaecati pariatur cumque quidem in fugit libero
          necessitatibus velit beatae perferendis, rerum minus? Ea, tempore
          magni laborum a dolore quos dicta culpa? Nesciunt ipsum, tenetur hic
          aliquid minus nobis ea saepe quae obcaecati porro quo corrupti
          expedita! Libero earum cupiditate ad necessitatibus. Est sunt rem
          error dolores alias quasi possimus corrupti consectetur voluptatibus
          nobis distinctio quos reiciendis ea dolor illum consequuntur
          aspernatur velit, voluptas quisquam. Harum, distinctio. Dolorem, dicta
          inventore? Laboriosam ad distinctio laborum aperiam, hic ipsa saepe
          modi vel reiciendis id quaerat, assumenda reprehenderit consequuntur
          alias debitis sint. Nesciunt.
        </span>
      </section>
    </>
  );
}

export default Hero;
