import { CostPackage } from '../types';

export const PACKAGES_DATA: CostPackage[] = [
  {
    id: 'pkg-iui',
    name: 'Gentle IUI Precision Protocol',
    category: 'IUI',
    basePrice: 16500,
    emiPerMonth: 2750,
    tenureMonths: 6,
    isPopular: false,
    inclusions: [
      'Follicular monitoring ultrasound scans (Unlimited in cycle)',
      'Sperm double-wash motility enhancement gradient',
      'Intrauterine Insemination catheter procedure',
      'Post-insemination luteal support prescription review',
      'Clinical consultation throughout cycle'
    ],
    freePerks: ['Free Semen Analysis with Morphology', 'Free Nutrition Diet Consultation'],
    recommendedFor: 'Young couples with open tubes, mild male factor, or unexplained early delay',
    successRate: '24.8% per cycle'
  },
  {
    id: 'pkg-ivf-standard',
    name: 'Core IVF Single-Cycle Protocol',
    category: 'IVF',
    basePrice: 125000,
    emiPerMonth: 7499,
    tenureMonths: 18,
    isPopular: false,
    inclusions: [
      'Ultrasound-guided Egg Retrieval (OPU) under mild sedation',
      'Anaesthetist fees & Daycare recovery lounge',
      'Conventional IVF Fertilization in Class 10,000 Cleanroom',
      'Day-3 Cleavage Stage Embryo Transfer',
      'Initial 1 Year Cryopreservation of surplus embryos'
    ],
    freePerks: ['Free 2nd Opinion Review', 'Complimentary Embryo Glue for transfer'],
    recommendedFor: 'Tubal factor infertility, good ovarian reserve, and normal sperm motility',
    successRate: '68.2% cumulative'
  },
  {
    id: 'pkg-ivf-advanced-blastocyst',
    name: 'Advanced ICSI + Day-5 Blastocyst (Lahari Flagship)',
    category: 'ICSI',
    basePrice: 168000,
    emiPerMonth: 9999,
    tenureMonths: 18,
    isPopular: true,
    discountPercentage: 15,
    inclusions: [
      'Everything in Core IVF',
      'High-Magnification ICSI / PICSI Sperm Selection',
      'Geri® Time-Lapse continuous AI incubator monitoring',
      'Extended Day-5/6 Blastocyst Culture',
      'Laser-Assisted Zona Thinning / Hatching',
      'EmbryoGlue® implantation enhancement media',
      '1 Year Cryotop® vitrification storage for surplus blastocysts'
    ],
    freePerks: [
      'Zero-Cost Repeat Consultation within 30 days',
      'Dedicated 24/7 Clinical Nurse Care Coordinator',
      'Comprehensive Semen DNA Fragmentation (DFI) Test'
    ],
    recommendedFor: 'Previous failed cycles, age 32+, moderate male factor, PCOS, or maximum first-time success',
    successRate: '84.6% per transfer'
  },
  {
    id: 'pkg-pgt-genomics',
    name: 'Comprehensive PGT-A Genomic Screened IVF',
    category: 'PGT-A',
    basePrice: 245000,
    emiPerMonth: 14500,
    tenureMonths: 18,
    isPopular: false,
    inclusions: [
      'Everything in Advanced ICSI + Blastocyst',
      'Laser-assisted trophectoderm biopsy on up to 5 blastocysts',
      'Next-Gen Sequencing (NGS) of all 24 chromosomes',
      'Detailed Geneticist Review & Euploidy Counseling Report',
      'Personalized Frozen Embryo Transfer (FET) cycle preparation'
    ],
    freePerks: ['Free Endometrial Thickness Doppler Scan', '2 Years Cryo-Storage included'],
    recommendedFor: 'Age 35+, recurrent miscarriages, multiple failed IVF attempts, or family genetic history',
    successRate: '88.8% live birth rate'
  },
  {
    id: 'pkg-egg-freezing',
    name: 'Social / Medical Egg Freezing (10-Year Freedom)',
    category: 'Egg Freezing',
    basePrice: 95000,
    emiPerMonth: 5650,
    tenureMonths: 18,
    isPopular: false,
    inclusions: [
      'Complete serial follicular ultrasound scans',
      '15-Minute painless ultrasound-guided egg retrieval',
      'Immediate Cryotop® flash vitrification of mature M-II oocytes',
      'Includes First 3 Years of Liquid Nitrogen (-196°C) Storage',
      'RFID Biometric cryo-tank tracking security'
    ],
    freePerks: ['Free Ovarian Reserve Mapping (AMH + AFC)', 'Annual Cryo-Status Health Certificate'],
    recommendedFor: 'Women in their 20s & 30s planning future family milestones',
    successRate: '98.2% post-thaw survival'
  }
];
