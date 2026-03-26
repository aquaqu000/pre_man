export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  hoverImage: string;
  description: string;
  colors: string[];
}

export interface Look {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mainImage: string;
  products: Product[];
  scene: 'Work' | 'Walk' | 'Brunch' | 'Evening' | 'Travel' | 'Meeting';
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Italian Linen Heritage Shirt',
    price: 185000,
    category: 'Shirts',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1621072156002-e2fcced0b176?auto=format&fit=crop&q=80&w=800',
    description: '이탈리아산 프리미엄 린넨으로 제작된 헤리티지 셔츠입니다.',
    colors: ['#FFFFFF', '#87CEEB', '#2F4F4F'],
  },
  {
    id: 'p2',
    name: 'Tailored Cotton Chinos',
    price: 210000,
    category: 'Pants',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
    description: '완벽한 핏을 선사하는 테일러드 코튼 치노 팬츠입니다.',
    colors: ['#D2B48C', '#000000', '#2E4053'],
  },
  {
    id: 'p3',
    name: 'Lightweight Spring Blazer',
    price: 450000,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800',
    description: '봄 시즌에 적합한 가벼운 소재의 싱글 브레스트 블레이저입니다.',
    colors: ['#1A1A1A', '#5D6D7E'],
  },
  {
    id: 'p4',
    name: 'Premium Silk Tie',
    price: 95000,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1589756823851-61bc3d2742d7?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=800',
    description: '100% 실크 소재로 제작된 클래식 타이입니다.',
    colors: ['#800000', '#000080'],
  },
  {
    id: 'p5',
    name: 'Cashmere Blend Knit',
    price: 245000,
    category: 'Knitwear',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=800',
    description: '부드러운 터치감의 캐시미어 블렌드 니트웨어입니다.',
    colors: ['#E5E7E9', '#2C3E50'],
  },
  {
    id: 'p6',
    name: 'Wool Blend Overcoat',
    price: 680000,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1539533377285-521ee104d9fa?auto=format&fit=crop&q=80&w=800',
    description: '우아한 실루엣의 울 블렌드 오버코트입니다.',
    colors: ['#1C2833', '#566573'],
  },
  {
    id: 'p7',
    name: 'Heritage Leather Loafers',
    price: 320000,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800',
    description: '장인 정신이 깃든 핸드메이드 가죽 로퍼입니다.',
    colors: ['#4E342E', '#000000'],
  },
  {
    id: 'p8',
    name: 'Minimalist Leather Belt',
    price: 85000,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    description: '정제된 디자인의 미니멀리스트 가죽 벨트입니다.',
    colors: ['#000000', '#5D4037'],
  },
  {
    id: 'p9',
    name: 'Structured Wool Suit',
    price: 890000,
    category: 'Suits',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800',
    description: '완벽한 체형 보정을 선사하는 스트럭처드 울 수트입니다.',
    colors: ['#212F3D', '#2E4053'],
  },
  {
    id: 'p10',
    name: 'Classic Oxford Shoes',
    price: 350000,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&q=80&w=800',
    description: '포멀한 룩의 정석, 클래식 옥스포드 슈즈입니다.',
    colors: ['#000000', '#3E2723'],
  },
  {
    id: 'p11',
    name: 'Fine Cotton Dress Shirt',
    price: 145000,
    category: 'Shirts',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?auto=format&fit=crop&q=80&w=800',
    description: '비즈니스 룩의 기본, 고밀도 코튼 드레스 셔츠입니다.',
    colors: ['#FFFFFF', '#85C1E9'],
  },
  {
    id: 'p12',
    name: 'Merino Wool Cardigan',
    price: 225000,
    category: 'Knitwear',
    image: 'https://images.unsplash.com/photo-1611312449412-6ce3a63e8d64?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800',
    description: '부드러운 메리노 울 소재의 클래식 가디건입니다.',
    colors: ['#2C3E50', '#7F8C8D'],
  },
  {
    id: 'p13',
    name: 'Slim Fit Denim',
    price: 195000,
    category: 'Pants',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
    description: '세련된 워싱과 핏을 자랑하는 프리미엄 데님입니다.',
    colors: ['#1B4F72', '#2E4053'],
  },
  {
    id: 'p14',
    name: 'Technical Field Jacket',
    price: 420000,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800',
    description: '기능성과 스타일을 겸비한 테크니컬 필드 자켓입니다.',
    colors: ['#1D8348', '#17202A'],
  },
  {
    id: 'p15',
    name: 'Luxury Silk Pocket Square',
    price: 45000,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1621072156002-e2fcced0b176?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1589756823851-61bc3d2742d7?auto=format&fit=crop&q=80&w=800',
    description: '수트 스타일링에 포인트를 더하는 실크 포켓 스퀘어입니다.',
    colors: ['#C0392B', '#2980B9'],
  },
  {
    id: 'p16',
    name: 'Double Breasted Blazer',
    price: 520000,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1594938384824-022767a58e91?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    description: '클래식한 무드의 더블 브레스트 블레이저입니다.',
    colors: ['#17202A', '#1C2833'],
  },
  {
    id: 'p17',
    name: 'Premium Leather Briefcase',
    price: 480000,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    description: '비즈니스맨을 위한 최고급 가죽 브리프케이스입니다.',
    colors: ['#4E342E', '#000000'],
  },
  {
    id: 'p18',
    name: 'Check Pattern Wool Scarf',
    price: 115000,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&w=800',
    description: '겨울철 스타일과 보온성을 책임지는 울 스카프입니다.',
    colors: ['#641E16', '#154360'],
  },
  {
    id: 'p19',
    name: 'Suede Chelsea Boots',
    price: 340000,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800',
    description: '부드러운 스웨이드 소재의 첼시 부츠입니다.',
    colors: ['#6E2C00', '#17202A'],
  },
  {
    id: 'p20',
    name: 'Classic Trench Coat',
    price: 720000,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1539533377285-521ee104d9fa?auto=format&fit=crop&q=80&w=800',
    description: '유행을 타지 않는 영원한 클래식, 트렌치 코트입니다.',
    colors: ['#D4AC0D', '#17202A'],
  },
];

export const LOOKS: Look[] = [
  {
    id: 'l1',
    title: 'Morning Ritual',
    subtitle: '출근 전, 가장 나다운 시간',
    description: '부드러운 햇살 아래 즐기는 커피 한 잔. Brenwood의 린넨 셔츠는 당신의 아침을 더욱 가볍게 만듭니다.',
    mainImage: '/img/ss_1.png',
    scene: 'Work',
    products: [PRODUCTS[0], PRODUCTS[2]],
  },
  {
    id: 'l2',
    title: 'Spring Promenade',
    subtitle: '봄 햇살을 닮은 산책',
    description: '과하지 않은 실루엣, 자연스러운 움직임. 편안함이 곧 스타일이 되는 순간입니다.',
    mainImage: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&q=80&w=1200',
    scene: 'Walk',
    products: [PRODUCTS[1], PRODUCTS[0]],
  },
  {
    id: 'l3',
    title: 'Urban Explorer',
    subtitle: '도시를 유영하는 감각',
    description: '세련된 네이비 수트와 함께하는 비즈니스 트래블. 당신의 전문성을 완성하는 브렌우드.',
    mainImage: 'https://images.unsplash.com/photo-1514332921149-b82775f3f778?auto=format&fit=crop&q=80&w=1200',
    scene: 'Travel',
    products: [PRODUCTS[5], PRODUCTS[6]],
  },
];

export interface Curation {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tips: string[];
  coordination: {
    item: string;
    reason: string;
  }[];
}

export const CURATIONS: Curation[] = [
  {
    id: 'c1',
    category: 'OFFICE LOOK',
    title: 'The Perfect Navy Suit',
    description: '비즈니스의 신뢰감을 완성하는 네이비 수트 스타일링입니다.',
    image: 'https://images.unsplash.com/photo-1592862902946-75bedd08b5e9?auto=format&fit=crop&q=80&w=1000',
    tips: [
      '셔츠 소매는 자켓 밖으로 1.5cm 정도 나오게 조절하세요.',
      '타이의 끝은 벨트 버클 중앙에 닿는 것이 가장 이상적입니다.',
      '포멀한 수트에는 반드시 끈이 있는 옥스포드 슈즈를 매치하세요.'
    ],
    coordination: [
      { item: 'Structured Wool Suit', reason: '체형을 잡아주는 탄탄한 실루엣' },
      { item: 'Classic Oxford Shoes', reason: '신뢰감을 더하는 마무리' }
    ]
  },
  {
    id: 'c2',
    category: 'TRAVEL & TRACK',
    title: 'Urban Explorer Style',
    description: '장거리 이동에도 구김 걱정 없는 편안한 트래블 룩입니다.',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=1000',
    tips: [
      '신축성이 좋은 치노 팬츠는 장시간 비행이나 운전에도 편안함을 유지합니다.',
      '가벼운 린넨 셔츠를 레이어드하여 기온 변화에 대응하세요.',
      '로퍼는 신고 벗기 편해 공항 검색대나 이동 시 유용합니다.'
    ],
    coordination: [
      { item: 'Tailored Cotton Chinos', reason: '활동성과 핏을 동시에 만족' },
      { item: 'Heritage Leather Loafers', reason: '세련된 편안함' }
    ]
  },
  {
    id: 'c3',
    category: 'SEASONAL TIP',
    title: 'Spring Layering Guide',
    description: '변덕스러운 봄 날씨를 위한 스마트한 레이어링 방법입니다.',
    image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&q=80&w=1000',
    tips: [
      '얇은 캐시미어 니트를 셔츠 위에 겹쳐 입어 보온성과 스타일을 챙기세요.',
      '밝은 베이지나 그레이 톤의 블레이저는 봄의 화사함을 더해줍니다.',
      '스카프 한 장으로 목을 보호하면서도 포인트 컬러를 줄 수 있습니다.'
    ],
    coordination: [
      { item: 'Lightweight Spring Blazer', reason: '가볍고 화사한 분위기 연출' },
      { item: 'Cashmere Blend Knit', reason: '부드러운 보온성' }
    ]
  }
];
