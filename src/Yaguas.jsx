import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "./components/Nav";

function Yaguas() {
  const images = [
    {
      original: "yaguas1.jpg",
      thumbnail: "https://picsum.photos/id/866/250/150/",
    },
    {
      original: "yaguas2.png",
      thumbnail: "https://picsum.photos/id/1020/250/150/",
    },
    {
      original: "yaguas3.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];
  const imagesTwo = [
    {
      original: "yaguas5.jpg",
      thumbnail: "https://picsum.photos/id/866/250/150/",
    },
  ];
  const imagesThree = [
    {
      original: "yaguas8.jpeg",
      thumbnail: "https://picsum.photos/id/866/250/150/",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="lg:flex mt-24">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl pt-16">Geographic Location</h1>
            <p className="pt-6 pr-14">
              The yaguas are localized in the colombian amazon apecifically in
              the regions of Loreto and Amazonas the territorium what the yaguas
              has is extended for jungles,rivers and lagoons. They have a
              biodiversity habitat over the time yhe yaguas use and protected
              the territorium they have.
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
              additionalClass="custom-image-gallery"
            />
          </div>
        </div>

        <div className="mt-20 lg:flex lg:items-center lg:justify-center">
          <div className="lg:w-11/12 lg:max-w-screen-lg lg:flex lg:items-center lg:justify-center">
            <div className="lg:w-full lg:pr-8 text-center">
              <h1 className="text-4xl">Main Cultural Aspects </h1>
              <p className="pt-6 pl-6 pr-6">
                The Yaguas are a tribe that conserves knowledge from the Amazon
                ecosystem. They have a good relationship with nature. Over the
                years, the Yaguas have improved their hunting, fishing, and
                gathering techniques.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:flex lg:items-center lg:justify-center">
          <div className="lg:w-11/12 lg:max-w-screen-lg">
            <img src="yaguas4.jpg" className="w-full h-80" alt="Population" />
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
              additionalClass="custom-image-gallery"
            />
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0 pt-16">
            <h1 className="text-4xl pl-14">Languages</h1>
            <p className="pt-6 pl-14">
              The Yagua language is distinct from other neighboring languages.
              They have words like 'ñiwi' (water) and 'pepu' (sun) as examples
              of their vocabulary. They face challenges in preserving their
              language because neighboring languages influence its use, but the
              Yaguas are trying to keep it alive.
            </p>
          </div>
        </div>

        <div className="mt-20 lg:flex lg:items-center lg:justify-center">
          <div className="lg:w-11/12 lg:max-w-screen-lg lg:flex lg:items-center lg:justify-center">
            <div className="lg:w-full lg:pr-8 text-center">
              <h1 className="text-4xl">Cultural traditions </h1>
              <p className="pt-6 pl-6 pr-6">
                One of the main customs is the use of the “pucuna”, a
                traditional blowgun for hunting. They also practice rituals
                related to ayahuasca and other sacred plants, which serve as a
                means of communication with the spiritual world and healing.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:flex lg:items-center lg:justify-center">
          <div className="lg:w-11/12 lg:max-w-screen-lg">
            <img src="yaguas6.jpg" className="w-full h-80" alt="Population" />
          </div>
        </div>
        <div className="lg:flex mt-24">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl pt-16">Education </h1>
            <p className="pt-6 pr-14">
              Normal education has reached some Yaguas communities, but
              ancestral knowledge is the main focus. Seniors play a crucial role
              in the education process.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
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
              additionalClass="custom-image-gallery"
            />
          </div>
        </div>

        <div className="mt-24 lg:flex">
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <img src="yaguas9.jpg" alt="Cazar" className="w-full h-auto" />
              <img
                src="yaguas10.jpg"
                alt="Vegetables"
                className="w-full h-auto"
              />
              <img src="yaguas11.jpg" alt="Pescao" className="w-full h-auto" />
              <img src="yaguas12.jpg" alt="Vege" className="w-full h-auto" />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pr-8 pt-9 pl-16">
            <h1 className="text-4xl">Feeding </h1>
            <p className="pt-6 pr-20">
              Depending on the jungle, their diet includes fish, fruits, roots
              and hunted animals. Cassava is a staple food, and is often
              transformed into “masato,” a fermented drink.
            </p>
          </div>
        </div>

        <div className="mt-24 lg:flex">
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <img src="yaguas13.jpg" alt="Cazar" className="w-full h-auto" />
              <img
                src="yaguas14.jpg"
                alt="Vegetables"
                className="w-full h-auto"
              />
              <img src="yaguas15.jpg" alt="Pescao" className="w-full h-auto" />
              <img src="yaguas16.jpg" alt="Vege" className="w-full h-auto" />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pr-8 pt-9 pl-16">
            <h1 className="text-4xl">Living place </h1>
            <p className="pt-6 pr-20">
              The houses of the Yaguas are mainly made of palms and other
              natural materials. They are elevated off the ground to protect
              them from floods and animals. The houses are places where many
              relatives can live together.
            </p>
          </div>
        </div>

        <div className="mt-20 lg:flex lg:items-center lg:justify-center">
          <div className="lg:w-11/12 lg:max-w-screen-lg lg:flex lg:items-center lg:justify-center">
            <div className="lg:w-full lg:pr-8 text-center">
              <h1 className="text-4xl">Present </h1>
              <p className="pt-6 pl-6 pr-6">
                Currently they have mainteined many traditions, the modern
                challenges like deforestation and mining, threaten their
                lifestyle, but many Yaguas are in the vanguard of moviments to
                preserv that and indigenous rights
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:flex lg:items-center lg:justify-center mb-20">
          <div className="lg:w-11/12 lg:max-w-screen-lg">
            <img src="yaguas20.jpg" className="w-full h-80" alt="Population" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Yaguas;
