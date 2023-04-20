import Themes from "../Themes&Fonts/Themes";

function Page3() {
  function TitleAndBackground() {
    return (
      <>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&display=swap');
        </style>
        <div class="Title">
          <h1>Chore Champions</h1>
        </div>
        <div className="Img-1">
          <img src="./Images/PencilPaper.png" alt="" height="110px" />
        </div>
        <div class="Img-2">
          <img
            src="./Images/image_2023-04-11_132205969-removebg-preview.png"
            alt=""
            height="220px"
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <TitleAndBackground />
      </div>
      <div>
        <Themes />
      </div>
    </>
  );
}
export default Page3;
