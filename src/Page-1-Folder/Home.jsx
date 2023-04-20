function Home() {
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
  function InfoBox() {
    return (
      <>
        <h1 className="Box">Welcome To Chore Champions!!</h1>
        <p className="Paragraph-1">
          Our goal here at Chore Champions is to provide a fun, yet effective
          way of organizing your day to day tasks! You will be able to name a
          task and give it a set date and time to be completed by.
        </p>
        <p className="Paragraph-2">
          To Begin, you can navigate yourself to the “Chores” button on your top
          right!{" "}
        </p>
        <p className="Paragraph-3">
          Don’t like our colors? don’t be afraid, we have a vast selection of
          different themes you can help yourself to! you can access these themes
          by navigating yourself to the “Design” button on your top right!
        </p>
        <p className="Paragraph-4">Happy Choring!</p>
      </>
    );
  }
  return (
    <>
      <div>
        <TitleAndBackground />
      </div>
      <div>
        <InfoBox />
      </div>
    </>
  );
}

export default Home;
