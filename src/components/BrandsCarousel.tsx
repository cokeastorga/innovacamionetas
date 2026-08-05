import './BrandsCarousel.css';

interface BrandItem {
  name: string;
  logo: string;
}

const brands: BrandItem[] = [
  { name: 'MAXUS', logo: '/img/brands/maxus.png' },
  { name: 'Toyota', logo: '/img/brands/toyota.png' },
  { name: 'Nissan', logo: '/img/brands/nissan.png' },
  { name: 'Mitsubishi', logo: '/img/brands/mitsubishi.png' },
  { name: 'JAC', logo: '/img/brands/jac.png' },
  { name: 'JMC', logo: '/img/brands/jmc.png' },
  { name: 'Great Wall', logo: '/img/brands/greatwall.png' },
  { name: 'DFSK', logo: '/img/brands/dfsk.png' },
];

// Duplicate the list for infinite scroll illusion
const doubledBrands = [...brands, ...brands];

export default function BrandsCarousel() {
  return (
    <section className="brands-carousel" id="brands-carousel">
      <div className="brands-carousel__label">
        <span>Marcas con las que trabajamos</span>
        <div className="brands-carousel__line" />
      </div>
      <div className="brands-carousel__track-wrapper">
        <div className="brands-carousel__fade brands-carousel__fade--left" />
        <div className="brands-carousel__track">
          {doubledBrands.map((brand, i) => (
            <div className="brands-carousel__item" key={`${brand.name}-${i}`}>
              <img src={brand.logo} alt={brand.name} className="brands-carousel__logo" />
            </div>
          ))}
        </div>
        <div className="brands-carousel__fade brands-carousel__fade--right" />
      </div>
    </section>
  );
}
