import Link from 'next/link';
import Dairy from '@/app/subsidiary/dairy/page';

const Subsidiaries = () => {
  const subsidiaries = [
    {
      id: 1,
      name: 'Tara Foods',
      description:
        'Specializing in high-quality food production, Tara Foods ensures sustainable agricultural practices and superior products for consumers.',
      image: '/assets/img/foods/pic-2.webp',
      link: '/subsidiary/food',
    },
    {
      id: 2,
      name: 'Yewo Dairy',
      description:
        'With a focus on sustainable dairy farming, Rayen Dairy provides the finest dairy products to consumers and businesses alike.',
      image: '/assets/img/dairy/pic-8.avif',
      link: '/subsidiary/dairy',
    },
    {
      id: 3,
      name: 'Yewo Poultry',
      description:
        'Providing fresh and sustainable poultry products, Rayen Poultry is committed to quality and ethical farming practices.',
      image: '/assets/img/poultry/poultry.jpg',
      link: '/subsidiary/poultry',
    },
  ];

  return (
    <div className="products-section container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">
        <span className="text-steelblue">Our </span>Subsidiaries
      </h2>
      <p className="pb-3 text-gray-600">
        Rayen Limited’s diverse subsidiaries drive innovation across agriculture, food, and global trade.
      </p>

      <div className="row flex flex-wrap -mx-3">
        {subsidiaries.map((subsidiary) => (
          <div
            key={subsidiary.id}
            className="col-12 col-sm-6 col-md-4 px-3 mb-6"
          >
            <div className="card h-100 shadow-sm bg-white rounded-lg overflow-hidden">
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${subsidiary.image})`,
                  height: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="card-body text-center p-4">
                <h5 className="card-title text-lg font-bold">
                  {subsidiary.name}
                </h5>
                <p className="card-text text-gray-700 mb-4">
                  {subsidiary.description}
                </p>
                <Link
                  href={subsidiary.link}
                  className="btn-get-started inline-block px-4 py-2 text-white bg-steelblue rounded-md"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subsidiaries;
