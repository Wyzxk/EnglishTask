import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "./components/Nav";

function Turism() {
  const images = [
    {
      original: "one.jpg",
      thumbnail: "https://picsum.photos/id/866/250/150/",
    },
    {
      original: "two.jpg",
      thumbnail: "https://picsum.photos/id/1020/250/150/",
    },
    {
      original: "three.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "four.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "five.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "six.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "seven.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "nine.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "ten.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];
  const imagesTwo = [
    {
      original: "guatape1.jpg",
      thumbnail: "https://picsum.photos/id/866/250/150/",
    },
    {
      original: "guatape2.jpg",
      thumbnail: "https://picsum.photos/id/1020/250/150/",
    },
    {
      original: "guatape3.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "guatape4.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "guatape5.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];
  const imagesThree = [
    {
      original: "Arvi1.jpg",
      thumbnail: "https://picsum.photos/id/866/250/150/",
    },
    {
      original: "arvi2.jpg",
      thumbnail: "https://picsum.photos/id/1020/250/150/",
    },
    {
      original: "arvi3.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "arvi4.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "arvi5",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];
  const imagesFour = [
    {
      original: "Comuna-13.jpg",
      thumbnail: "https://picsum.photos/id/866/250/150/",
    },
    {
      original: "escaleras.jpg",
      thumbnail: "https://picsum.photos/id/1020/250/150/",
    },
    {
      original: "pueblito.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "plaza.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "rio.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "pies.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "cable.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "metro.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];
  const imagesFive = [
    {
      original: "palmas1.jpeg",
      thumbnail: "https://picsum.photos/id/866/250/150/",
    },
    {
      original: "palmas2.jpg",
      thumbnail: "https://picsum.photos/id/1020/250/150/",
    },
    {
      original: "palmas3.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "palmas4.png",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="mt-20 lg:flex lg:items-center lg:justify-center">
          <div className="lg:w-11/12 lg:max-w-screen-lg lg:flex lg:items-center lg:justify-center">
            <div className="lg:w-full lg:pr-8 text-center">
              <h1 className="text-4xl">
                Welcome to Medallo City <br />
                Visit the best places in Medellín
              </h1>
              <p className="pt-6 pl-6 pr-6">
                Medellín is recognized as the city of eternal spring, here are
                some of the places you can visit
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:flex lg:items-center lg:justify-center">
          <div className="lg:w-11/12 lg:max-w-screen-lg">
            <img src="Medallo.jpg" className="w-full h-80" alt="Population" />
          </div>
        </div>

        <div className="lg:flex mt-24">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl pt-16 mt-16">
              Apartment for 3.000.000 COP
            </h1>
            <p className="pt-6 pr-14">
              The apartment measures 150 square meters, it has 3 bedrooms, 2
              bathrooms, 1 kitchen, 1 balcony, 1 living room, completely
              furnished.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              showBullets={true}
              autoPlay={true}
              slideInterval={3000}
              showThumbnails={false}
              slideDuration={1000}
              additionalClass="custom-image-gallery imagenes"
            />
          </div>
        </div>

        <div className="mt-20 lg:flex">
          <div className="lg:w-1/2 lg:pr-8">
            <ImageGallery
              items={imagesTwo}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              showBullets={true}
              autoPlay={true}
              slideInterval={3000}
              showThumbnails={false}
              slideDuration={1000}
              additionalClass="custom-image-gallery imagenes"
              renderItem={(item) => (
                <img
                  src={item.original}
                  alt={item.original}
                  style={{
                    width: "1000px", // Ancho de 1000px
                    height: "400px", // Alto de 600px
                    borderRadius: "30px", // Border radius de 30px
                    objectFit: "cover", // Ajuste de la imagen para cubrir el contenedor manteniendo la relación de aspecto
                  }}
                />
              )}
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 pt-16">
            <h1 className="text-4xl pl-14">
              Medellín: Guatapé Tour, Lunch, Cruise, and Piedra del Peñol
            </h1>
            <p className="pt-6 pl-14">
              Enjoy a guided tour of the picturesque town of Guatapé, take in
              the views from the top of the Peñol Rock, and dine at its finest
              restaurant. Take a cruise through the Guatapé reservoir.
            </p>
          </div>
        </div>

        <div className="lg:flex mt-24">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl pt-16 mt-10">
              Medellín, A Day of Adventure at Parque Arvi
            </h1>
            <p className="pt-6 pr-14">
              A day of adventure at Parque Arvi! We will walk on beautiful
              trails surrounded by mushrooms, moss, and trees. We will see
              animals and plants that you have never seen before.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pr-8">
            <ImageGallery
              items={imagesThree}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              showBullets={true}
              autoPlay={true}
              slideInterval={3000}
              showThumbnails={false}
              slideDuration={1000}
              additionalClass="custom-image-gallery imagenes"
              renderItem={(item) => (
                <img
                  src={item.original}
                  alt={item.original}
                  style={{
                    width: "1000px", // Ancho de 1000px
                    height: "400px", // Alto de 600px
                    borderRadius: "30px", // Border radius de 30px
                    objectFit: "cover", // Ajuste de la imagen para cubrir el contenedor manteniendo la relación de aspecto
                  }}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-20 lg:flex">
          <div className="lg:w-1/2 lg:pr-8">
            <ImageGallery
              items={imagesFour}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              showBullets={true}
              autoPlay={true}
              slideInterval={3000}
              showThumbnails={false}
              slideDuration={1000}
              additionalClass="custom-image-gallery imagenes"
              renderItem={(item) => (
                <img
                  src={item.original}
                  alt={item.original}
                  style={{
                    width: "1000px", // Ancho de 1000px
                    height: "400px", // Alto de 600px
                    borderRadius: "30px", // Border radius de 30px
                    objectFit: "cover", // Ajuste de la imagen para cubrir el contenedor manteniendo la relación de aspecto
                  }}
                />
              )}
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 pt-16">
            <h1 className="text-4xl pl-14">City Tour & Graffitour</h1>
            <p className="pt-6 pl-14">
              The City Tour & Graffitour is one of the most sought-after tourist
              experiences by travelers from all over the world. It's a blend of
              art, culture, dance, and lots of music; honestly, there's no place
              like it in the world. Each of the places you will visit will leave
              you amazed, from the imposing bronze sculptures in Plaza Botero to
              the graffiti in Comuna 13. You have to experience it!
            </p>
          </div>
        </div>

        <div className="lg:flex mt-24">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl pt-16 mt-10">Piques in Palmas</h1>
            <p className="pt-6 pr-14">
              A day of adventure through the wonderful avenues of Las Palmas in
              Medellín, where you will see acrobatics, speed, and if you want,
              you can go further into the adventure and ride one of these
              vehicles with a professional.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pr-8">
            <ImageGallery
              items={imagesFive}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              showBullets={true}
              autoPlay={true}
              slideInterval={3000}
              showThumbnails={false}
              slideDuration={1000}
              additionalClass="custom-image-gallery imagenes"
              renderItem={(item) => (
                <img
                  src={item.original}
                  alt={item.original}
                  style={{
                    width: "1000px", // Ancho de 1000px
                    height: "400px", // Alto de 600px
                    borderRadius: "30px", // Border radius de 30px
                    objectFit: "cover", // Ajuste de la imagen para cubrir el contenedor manteniendo la relación de aspecto
                  }}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-24 lg:flex ml-20">
          <div className="lg:w-2/2 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="comida1.jpg"
                  alt="Cazar"
                  className="object-cover w-48 h-48"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="comida2.jpg"
                  alt="Vegetables"
                  className="object-cover w-48 h-48"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="comida3.jpg"
                  alt="Pescao"
                  className="object-cover w-48 h-48"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="comida4.jpg"
                  alt="Vege"
                  className="object-cover w-48 h-48"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8 pt-9 ml-24 mt-20 mb-96">
            <h1 className="text-4xl">You need to eat these</h1>
            <p className="pt-6 pr-20">
              Those are the foods you need to eat in Medallo city: Bandeja
              Paisa, Sancocho, Mazamorra, Morcilla con Arepita
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Turism;
