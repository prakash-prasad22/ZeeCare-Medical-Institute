import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h1>Biography</h1>
          <h3>Who We Are</h3>
          <p>
           2020 marked the beginning of a remarkable journey for ZeeCare Medical Institute. Founded by Prakash Prasad with a vision of providing exceptional healthcare to the community.
          </p>
          <h3>We are all in 2024!</h3>
          <h4>A Commitment to Excellence : </h4>
          <p>Throughout our history, ZeeCare Medical Institute has remained dedicated to providing high-quality, compassionate care. We have consistently invested in: </p>

          <p><u>Leading-edge Technology:</u> We strive to stay at the forefront of medical advancements by adopting the latest technologies and equipment.</p>
          <p><u>Skilled Professionals:</u> Our team of dedicated doctors, nurses, and healthcare professionals are committed to providing personalized and evidence-based care.</p>
          <p><u>Patient-Centered Approach:</u> We believe in treating each patient with respect and dignity, focusing on their unique needs and ensuring a comfortable and positive experience.</p>
          <h4>Looking Forward:</h4>
          <p>As we look towards the future, ZeeCare Medical Institute remains committed to:</p>
          <p><u>Expanding our Services:</u>We are constantly seeking new ways to better serve our community by offering innovative treatments and expanding our service lines.</p>
          <p><u>Enhancing Patient Experience:</u> We continuously strive to improve the patient experience by investing in comfortable facilities, efficient processes, and compassionate care.</p>
          <p><u>Leading the Way in Healthcare:</u> We remain dedicated to research and development, aiming to contribute to advancements in the field of medicine.</p>
          <h5>ZeeCare Medical Institute is a testament to the unwavering dedication of our staff and the trust placed in us by our community. We are honored to be a part of your healthcare journey, and we look forward to serving you for generations to come.</h5>
        </div>
      </div>
    </>
  );
};

export default Biography;
