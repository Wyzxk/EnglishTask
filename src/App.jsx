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
      <div className="container mx-auto px-4">
        <div className="lg:flex mt-24">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl pt-16">Geographic Location</h1>
            <p className="pt-6 pr-14">
              The Andoque culture is located in the Araracuara region and caño
              aduche. They have been living here for many years and are very
              close to the Ribera of the middle river caquetá, just in the south
              of the Colombian Amazon. They are one of the cultures with the
              smallest number of inhabitants but with a lot of capacity to
              conserve their ancestral traditions.
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
              agriculture. In addition, they also exchange their meals with
              other communities.
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
          <div className="lg:w-1/2 mt-8 lg:mt-0 pt-16">
            <h1 className="text-4xl pl-14">Languages</h1>
            <p className="pt-6 pl-14">
              The Andoque is an indigenous American language spoken by a small
              group in the area of the river Caqueta. In Colombia, they are
              currently facing challenges due to a decline in population. In
              2000, there were 610 Andoque speakers in the area of the river
              Anduche and downstream of Araracuara, and only 50 of them spoke
              Andoque exclusively, while the rest spoke Andoque and Spanish. It
              is interesting to note that Andoque extended into Peru.
            </p>
          </div>
        </div>
        <div className="mt-24 lg:flex">
          <div className="lg:w-1/2 lg:pr-8 pt-9">
            <h1 className="text-4xl">Economy and Housing:</h1>
            <p className="pt-6 pr-20">
              The Andoke are based on a resource production system such as
              agriculture, fishing, hunting, and gathering, as well as logging.
              The main crops are cassava brava, sweet cassava, banana, and
              pineapple. In recent years, colonization has contributed to the
              Andoque adding semi-permanent crops such as bananas, sugar cane,
              and corn. They are located in an indigenous reservation where
              there are 3 malokas, and the rest of the houses are close to the
              malokas. The Andoque people have patrilineal clans, and their
              names are Sparrowhawk, Deer, Sun, Arriera Ant, and Cucarrón.
              Nowadays, the malokas are the social, economic, cultural, and
              ritual structures of the community, and the leader of the rituals
              is called a maloquero.
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
                2. Evidence speaks of long networks of exchange between groups
                that lived in different environments in the region. The Andoke
                had stone axes that were discovered in their territory as part
                of rituals, placing this activity in an important place in their
                life. The lack of stones in the area and little availability of
                these tools gave the group an advantage for exchange.
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
              <p>
                3. The conquest expeditions and territory colonization in the
                XVII century by the Spanish, Portuguese, and Franciscans
                produced big changes in the Amazon territory. The cycle “La
                caucheria” established in the early 20th century was the most
                significant hit in his history, generating profound
                transformations and adaptations in his cultural life. As a
                result of this activity, not only did most of the population
                disappear, but also instruments of metal were introduced
                massively, they adapted to new economic systems, and they
                promoted different authority models.
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
              <p>
                4. For the majority of the peoples that inhabit the Amazon
                region, the use of plants is based on a fundamental element
                within their cultural and social life. The Yuruparí is the most
                important ritual because it remembers the origins and revives
                the essential elements of your vision towards the world.
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
              <p>
                5. Ethnohistorical evidences talk about extensive nettings
                exchanges between the groups of the region that inhabited
                different environments. The Andoques made stone axes, excavated
                in their territory in the framework of complex rituals that
                placed this activity in an important place. The scarcity of
                stone in the area as well as the access to these tools gave to
                group a privileged position for exchanges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
