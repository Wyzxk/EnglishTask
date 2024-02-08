import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "./components/Nav";
function App() {
  const images = [
    {
      original: "https://picsum.photos/id/866/1000/600/",
      thumbnail: "https://picsum.photos/id/866/250/150/",
    },
    {
      original: "https://picsum.photos/id/1020/1000/600/",
      thumbnail: "https://picsum.photos/id/1020/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
  ];
  return (
    <>
      <Navbar />
      <br />
      <br /> <br />
      <br />
      <div className="w-11/12 mx-auto flex ">
        <div className="flex-1">
          <h1 className="text-4xl pt-16 flex items-start justify-start">
            Geographic Location
          </h1>
          <p className="pt-6 mr-20">
            The Andoque culture locate in the Araracuara region and caño aduche,
            they was living here during many years and they was very close of
            the Ribera of the middle river caquetá, just in the south of the
            colombian amazone. They are one of the cultures with smallest number
            of habitants, but with a lot capacity to conserv their ancestral
            traditions.
          </p>
        </div>
        <div className="flex-1">
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
            additionalClass="custom-image-gallery" // Clase adicional para el componente ImageGallery
          />
        </div>
      </div>
      <br />
      <div className="mx-auto mt-32 mb-4 text-center">
        <h1 className="text-4xl mb-6">Population</h1>
        <p className="mx-12 mb-6">
          The population of the Andoques was harmed by the exploitation of
          rubber that was very common in those areas, this occurred thousands of
          years ago and due to the great pollution and problems that it, the
          population was decreasing rapidly and now there are only 597 records
          left.
        </p>
      </div>
      <div className="flex items-center justify-center mb-40">
        <img
          src="Andoque-population.jpeg"
          style={{ width: "1240px", height: "300px" }}
        />
      </div>
      <div className="flex mt-40 mx-4">
        <div className="w-full lg:w-2/3 ml-16">
          <h1 className="text-4xl flex items-start justify-start">
            Typical food:
          </h1>
          <p className="pt-6 mr-20">
            Their diet consists in eat fish, hunt animals like deer and birds,
            and collect fruits and vegetables from the Amazon. They also
            prepared dishes with the crops and raw materials of their
            agriculture. In addition, they also exchange their meals with others
            communities
          </p>
        </div>
        <div className="w-1/5 overflow-hidden transition-transform duration-500 transform hover:scale-110 animate-slide1">
          <img src="cazar.jpg" alt="Imagen 1" className="w-full h-auto" />
        </div>
        <div className="w-1/5 overflow-hidden transition-transform duration-500 transform hover:scale-110 animate-slide2">
          <img src="vegetables.jpg" alt="Imagen 2" className="w-full h-auto" />
        </div>
        <div className="w-1/5 overflow-hidden transition-transform duration-500 transform hover:scale-110 animate-slide3">
          <img src="pescao.jpg" alt="Imagen 3" className="w-full h-auto" />
        </div>
        <div className="w-1/5 overflow-hidden transition-transform duration-500 transform hover:scale-110 animate-slide4 mr-16">
          <img src="vege.jpg" alt="Imagen 4" className="w-full h-auto" />
        </div>
      </div>
      <div className="w-11/12 mx-auto flex mt-48">
        <div className="flex-1">
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
            additionalClass="custom-image-gallery" // Clase adicional para el componente ImageGallery
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl pt-16 ml-20  flex items-start justify-start">
            Languages
          </h1>
          <p className="pt-6 ml-20">
            The Andoque is a indigenous american languages its spoken for a
            little bit of indigenous in the transcourse from the river caqueta
            <br />
            <br />
            In Colombia and actually they are en a very problem because the
            poblation is in decline of habitants. in 2000 investigation was 610
            andoque spokers in the area of river Anduche and aguas abajo de
            Araracuara and 50 of this people only talk in andoque and the rest
            of them talk andoque and spanish and like a random fact is what the
            andoque extended to peru.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex mt-40 mx-4">
        <div className="flex items-center justify-center w-1/5 overflow-hidden transition-transform duration-500 transform hover:scale-110 animate-slide1 ml-20">
          <img src="cazar.jpg" alt="Imagen 1" className="w-full h-auto" />
        </div>
        <div className="flex items-center justify-center w-1/5 overflow-hidden transition-transform duration-500 transform hover:scale-110 animate-slide2">
          <img src="vegetables.jpg" alt="Imagen 2" className="w-full h-auto" />
        </div>
        <div className="flex items-center justify-center w-1/5 overflow-hidden transition-transform duration-500 transform hover:scale-110 animate-slide3">
          <img src="pescao.jpg" alt="Imagen 3" className="w-full h-auto" />
        </div>
        <div className="flex items-center justify-center w-1/5 overflow-hidden transition-transform duration-500 transform hover:scale-110 animate-slide4 mr-16">
          <img src="vege.jpg" alt="Imagen 4" className="w-full h-auto" />
        </div>
        <div className="w-full lg:w-2/3 ml-16">
          <h1 className="text-4xl flex items-start justify-start">
            Economy and housing:
          </h1>
          <p className="pt-6 mr-20">
            The Andoke are based on a resource production system such as
            agriculture, fishing, hunting and gathering, as well as logging. The
            main crops are cassava brava, sweet cassava, banana and pineappleIn
            recent years, colonization has contributed to the Andoque adding
            semi-permanent crops such as bananas, sugar cane and corn. <br />
            They are ubicaded in a indigenous reservation in this there is 3
            malokas where lives the more important of the tribe and the rest of
            the houses are close from the malokas. The andoque people has
            patrilineal clans this people is who lifes in the houses arond the
            malokas and his names are Sparrowhawk, Deer, Sun, Arriera Ant and
            Cucarrón. Nowadays the malokas are the social, economic, cultural
            and ritual structures of the community. And the guy who leader the
            rituals is called maloquero
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="mx-auto mt-40 text-center">
        <h1 className="text-4xl mb-6">His culture</h1>
      </div>
      <div className="flex">
        <div className="w-1/5 border-r border-gray-400 flex justify-center items-start p-4">
          <p>
            1. They had a big territorium that spread from the river Monochoa,
            above the araracuara chanel to river Quinche. in a moment they was
            10000 people divided in this terrirorium they was sepered for
            linagues and every linagues lives in a difirent maloka.{" "}
          </p>
        </div>
        <div className="w-1/5 border-r border-gray-400 flex justify-center items-start p-4">
          <p>
            2. Evidence speaks of long networks of exchange between groups that
            lived in different environments in the region. The Andoke had stone
            axes that were discovered in their territory as part of rituals,
            placing this activity in an important place in their life. The lack
            of stones in the area and little availability of these tools gave
            the group an advantage for exchange.{" "}
          </p>
        </div>
        <div className="w-1/5 border-r border-gray-400 flex justify-center items-start p-4">
          <p>
            3. The conquest expedicions and territory colony in the XVll century
            by the spanish, portuguese, franciscans that produced big changes in
            the amazon territory, the cyle “La caucheria” early of century XX it
            was established in the most significant hit in his history,
            generating profunds transforms and adaptations in his cultural life.
            As result of this activity not only disappeared the most part of the
            population, but also introduced massively intruments of metal
            instruments and merchandise, they adapted at news economic systems
            and they promoted diferent authority models{" "}
          </p>
        </div>
        <div className="w-1/5 border-r border-gray-400 flex justify-center items-start p-4">
          <p>
            1. For the majority of the peoples that inhabit the Amazon region,
            the use of plants is based on a fundamental element within their
            cultural and social life. The Yuruparí is the most important ritual
            because it remembers the origins and revives the essential elements
            of your vision towards the world.{" "}
          </p>
        </div>
        <div className="w-1/5 border-r border-gray-400 flex justify-center items-start p-4">
          <p>
            3. ethnohistorical evidences, talk about of extensive nettings
            exchanges betwen the groups of the region that they inhabited
            different environments. The andoques made stone axes, excavated in
            their territory in the framework of complex rituals that placed this
            activity in a important place. The scarcity of stone in the area as
            also the access to these tools gave to group a priviliged position
            for exchanges
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
