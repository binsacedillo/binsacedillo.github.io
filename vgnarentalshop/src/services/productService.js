// Product service - mock data for aircraft rentals
export const productService = {
  getProducts() {
    return [
      {
        id: 1,
        name: 'Cessna 172S',
        price: 8000,
        image: '/images/cessna172s.jpg',
        description: 'Perfect for beginners and experienced pilots. Single-engine, high-wing aircraft with great fuel efficiency.',
        specs: 'Seats: 4 | Range: 750 nm | Speed: 160 knots | Year: 2019'
      },
      {
        id: 2,
        name: 'Beechcraft King Air',
        price: 18000,
        image: '/images/kingair.jpg',
        description: 'Twin-engine, pressurized aircraft for long-distance travel. Reliable and spacious.',
        specs: 'Seats: 8 | Range: 1500 nm | Speed: 250 knots | Year: 2015'
      },
      {
        id: 3,
        name: 'Piper Archer',
        price: 7500,
        image: '/images/piperarcher.jpg',
        description: 'Single-engine low-wing aircraft ideal for personal travel and training.',
        specs: 'Seats: 4 | Range: 900 nm | Speed: 155 knots | Year: 2018'
      },
      {
        id: 4,
        name: 'Cirrus SR22',
        price: 12000,
        image: '/images/cirrussr22.jpg',
        description: 'Modern single-engine aircraft with advanced avionics and parachute system.',
        specs: 'Seats: 4 | Range: 1200 nm | Speed: 190 knots | Year: 2020'
      },
      {
        id: 5,
        name: 'Cessna Caravan',
        price: 15000,
        image: '/images/caravan.jpg',
        description: 'High-wing, single-engine workhorse. Perfect for cargo and group travel.',
        specs: 'Seats: 10 | Range: 1200 nm | Speed: 160 knots | Year: 2017'
      },
      {
        id: 6,
        name: 'Beechcraft Baron',
        price: 16000,
        image: '/images/baron.jpg',
        description: 'Twin-engine aircraft offering speed and reliability for medium-range flights.',
        specs: 'Seats: 6 | Range: 1200 nm | Speed: 210 knots | Year: 2016'
      },
      {
        id: 7,
        name: 'Piper Seneca',
        price: 14000,
        image: '/images/seneca.jpg',
        description: 'Twin-engine aircraft designed for safety and performance. Great for training.',
        specs: 'Seats: 6 | Range: 1100 nm | Speed: 195 knots | Year: 2018'
      },
      {
        id: 8,
        name: 'Diamond DA40',
        price: 9500,
        image: '/images/da40.jpg',
        description: 'High-performance single-engine aircraft with composite construction.',
        specs: 'Seats: 4 | Range: 1200 nm | Speed: 175 knots | Year: 2019'
      }
    ];
  },

  getProductById(id) {
    const products = this.getProducts();
    return products.find(p => p.id === id);
  },

  getFeaturedProducts() {
    // Return only featured products (1, 2, 4, 6)
    const products = this.getProducts();
    return products.filter(p => [1, 2, 4, 6].includes(p.id));
  }
};
