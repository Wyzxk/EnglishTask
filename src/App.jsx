import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "./components/Nav";

function App() {
  const images = [
    {
      original: "Andoque1.jpg",
      thumbnail: "https://picsum.photos/id/866/250/150/",
    },
    {
      original: "andoque2.jpg",
      thumbnail: "https://picsum.photos/id/1020/250/150/",
    },
    {
      original: "andoque3.jpg",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];
  const imagesTwo = [
    {
      original: "andoque5.jpg",
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
              The Andoque culture is located in the Araracuara region and caño
              aduche. They have been living here for many years and are very
              close to the Ribera of the middle river caquetá, just in the south
              of the Colombian Amazon.
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
              <h1 className="text-4xl">Population</h1>
              <p className="pt-6 pl-6 pr-6">
                The population of the Andoques was harmed by the exploitation of
                rubber that was very common in those areas, this occurred
                thousands of years ago and due to the great pollution and
                problems that it, the population was decreasing rapidly and now
                there are only 597 records left.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:flex lg:items-center lg:justify-center">
          <div className="lg:w-11/12 lg:max-w-screen-lg">
            <img
              src="Andoque-population.jpeg"
              className="w-full h-80"
              alt="Population"
            />
          </div>
        </div>

        <div className="mt-28  lg:flex">
          <div className="lg:w-1/2 lg:pr-8 pt-20">
            <h1 className="text-4xl">Typical Food:</h1>
            <p className="pt-6 pr-14">
              Their diet consists of eating fish, hunting animals like deer and
              birds, and collecting fruits and vegetables from the Amazon. They
              also prepared dishes with the crops and raw materials of their
              agriculture.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <img src="cazar.jpg" alt="Cazar" className="w-full h-auto" />
              <img
                src="vegetables.jpg"
                alt="Vegetables"
                className="w-full h-auto"
              />
              <img src="pescao.jpg" alt="Pescao" className="w-full h-auto" />
              <img src="vege.jpg" alt="Vege" className="w-full h-auto" />
            </div>
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
              The Andoque is an indigenous American language spoken by a small
              group in the area of the river Caqueta. In Colombia, they are
              currently facing challenges due to a decline in population. In
              2000, there were 610 Andoque speakers in the area of the river
              Anduche and downstream of Araracuara, and only 50 of them spoke
              Andoque exclusively, while the rest spoke Andoque and Spanish.
            </p>
          </div>
        </div>
        <div className="mt-24 lg:flex">
          <div className="lg:w-1/2 lg:pr-8 pt-9">
            <h1 className="text-4xl">Economy and Housing:</h1>
            <p className="pt-6 pr-20">
              Andoque is an indigenous American language spoken by a small group
              in the Caquetá River area. In colombia. In the year 2000, there
              were 610 Andoque speakers in the Anduche River area and downstream
              of Araracuara, and only 50 of them spoke Andoque exclusively,
              while the rest spoke Andoque and Spanish.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <img src="cazar.jpg" alt="Cazar" className="w-full h-auto" />
              <img
                src="vegetables.jpg"
                alt="Vegetables"
                className="w-full h-auto"
              />
              <img src="andoque6.png" alt="Pescao" className="w-full h-auto" />
              <img src="andoque7.jpg" alt="Vege" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="mt-36">
          <h1 className="text-4xl text-center">His culture</h1>
          <div className="flex flex-wrap justify-center mt-8">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
              <p>
                1. They had a big territory that spread from the river Monochoa,
                above the Araracuara channel to river Quinche. At one point,
                they were 10,000 people divided in this territory, separated by
                lineages, and each lineage lived in a different maloka.
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
              <p>
                Evidence speaks of long networks of exchange between groups that
                lived in different environments in the region. The Andoque had
                stone axes that were discovered in their territory as part of
                rituals, placing this activity in an important place in their
                life.
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
              <p>
                The conquest expeditions and territory colonization in the XVII
                century by the Spanish, Portuguese, and Franciscans produced big
                changes in the Amazon territory. As a result of this activity,
                not only did most of the population disappear, but also
                instruments of metal were introduced massively.
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
              <p>
                For the majority of the peoples that inhabit the Amazon region,
                the use of plants is based on a fundamental element within their
                cultural and social life
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
              <p>
                Ethnohistorical evidences talk about extensive nettings
                exchanges between the groups of the region that inhabited
                different environments. The Andoques made stone axes, excavated
                in their territory in the framework of complex rituals that
                placed this activity in an important place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
