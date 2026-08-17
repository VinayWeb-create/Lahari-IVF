import { Treatment } from '../types';

export const TREATMENTS_DATA: Treatment[] = [
  {
    id: 'ivf-advanced',
    title: 'Advanced IVF with Day-5 Blastocyst Culture',
    shortDesc: 'State-of-the-art In Vitro Fertilization paired with AI time-lapse incubation and single blastocyst transfer for peak success.',
    slug: 'advanced-ivf',
    successRate: '84.6% per transfer',
    duration: '18 – 21 Days',
    idealFor: [
      'Blocked, damaged, or removed fallopian tubes',
      'Unexplained infertility > 2 years',
      'Advanced maternal age (35+ years)',
      'Multiple failed IUI or standard IVF cycles elsewhere'
    ],
    keyHighlights: [
      'Geri® Time-Lapse AI incubators for non-disruptive monitoring',
      'Laser-assisted zona thinning for seamless hatching',
      'Personalized Mild-Stimulation gonadotropin protocols',
      'Zero risk of multiple high-order pregnancies with Single Blastocyst Transfer'
    ],
    detailedOverview: 'At Lahari, our IVF protocol redefines standard fertility treatment through precision medicine. By pairing individualized hormonal stimulation with cutting-edge Class-10,000 cleanroom embryology labs, our embryos develop to the Day-5/6 blastocyst stage—yielding significantly higher implantation rates and reducing miscarriage risk.',
    steps: [
      {
        step: 1,
        title: 'Precision Hormone Mapping & Baseline Scan',
        duration: 'Day 2 – 3 of Cycle',
        description: 'Comprehensive 3D transvaginal ultrasonography for Antral Follicle Count (AFC) combined with baseline Estradiol, LH, and AMH tracking.',
        clinicalMilestone: 'Baseline hormonal clearance verified',
        iconName: 'Activity'
      },
      {
        step: 2,
        title: 'Targeted Follicular Stimulation',
        duration: 'Days 3 – 12 (approx. 9–10 days)',
        description: 'Customized micro-injections of recombinant FSH/HMG to gently stimulate multiple follicles, monitored every 48 hours via serial ultrasound scans.',
        clinicalMilestone: 'Follicles reach optimal maturity (18–20 mm)',
        iconName: 'TrendingUp'
      },
      {
        step: 3,
        title: 'Painless Ultrasound-Guided Egg Retrieval (OPU)',
        duration: 'Day 13 – 14 (15 mins under mild sedation)',
        description: 'Transvaginal aspiration under precise ultrasound guidance by our senior reproductive surgeon. Simultaneous partner sperm preparation.',
        clinicalMilestone: 'Mature oocytes safely harvested & transferred to lab',
        iconName: 'Sparkles'
      },
      {
        step: 4,
        title: 'AI Time-Lapse Fertilization & Blastocyst Incubation',
        duration: 'Days 14 – 19 (5 Days in lab)',
        description: 'High-magnification ICSI/IMSI fertilization followed by incubation in Geri® multi-chamber incubators equipped with continuous AI morphokinetic analysis.',
        clinicalMilestone: 'High-grade Day-5 Expanded Blastocysts achieved',
        iconName: 'Microscope'
      },
      {
        step: 5,
        title: 'Laser-Assisted Single Embryo Transfer',
        duration: 'Day 19 or Frozen Transfer Cycle',
        description: 'Gentle, ultrasound-guided catheter placement of the top-grade embryo directly into the optimal receptive uterine zone using EmbryoGlue®.',
        clinicalMilestone: 'Embryo successfully nested in endometrial lining',
        iconName: 'Heart'
      },
      {
        step: 6,
        title: 'Luteal Support & Serum Beta-hCG Confirmation',
        duration: '12 – 14 Days Post-Transfer',
        description: 'Personalized progesterone and micronutrient support followed by quantitative blood Beta-hCG testing for clinical pregnancy confirmation.',
        clinicalMilestone: 'Confirmed positive pregnancy & initial gestational heartbeat scan',
        iconName: 'Award'
      }
    ],
    embryologyTech: [
      'Geri® Time-Lapse Continuous Imaging',
      'Octax Laser Hatching System',
      'Hyaluronan-Enriched EmbryoGlue®',
      'Class 10,000 ISO Certified Modular Cleanrooms'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    tags: ['Flagship Protocol', 'Highest Success Rate', 'Single Embryo Transfer']
  },
  {
    id: 'icsi-picsi',
    title: 'ICSI & PICSI (Physiological Sperm Injection)',
    shortDesc: 'Individual sperm micro-injection with physiological hyaluronic acid binding for severe male factor infertility and high DFI.',
    slug: 'icsi-picsi',
    successRate: '86.2% fertilization rate',
    duration: 'Same as IVF timeline',
    idealFor: [
      'Severe low sperm count (Oligozoospermia < 5 million/ml)',
      'Poor motility (Asthenozoospermia) or abnormal morphology',
      'High Sperm DNA Fragmentation Index (DFI > 25%)',
      'Previous low or failed fertilization with conventional IVF'
    ],
    keyHighlights: [
      'Hyaluronic acid binding plates select mature sperm with intact DNA',
      'High magnification Nomarski optics for defect-free selection',
      'Direct micro-injection under motorized micromanipulators'
    ],
    detailedOverview: 'PICSI adds a revolutionary physiological selection step: healthy, mature sperm naturally bind to hyaluronic acid, mimicking natural zona pellucida penetration. Only biochemically mature sperm with intact chromatin are selected for direct oocyte micro-injection.',
    steps: [
      {
        step: 1,
        title: 'Density Gradient & Microfluidic Sperm Sorting',
        duration: 'Day of Egg Retrieval',
        description: 'Sorting motile, morphologically pristine sperm using ZyMōt™ microfluidic sperm separation chips to eliminate reactive oxygen species.',
        clinicalMilestone: 'Pristine viable sperm isolated',
        iconName: 'Filter'
      },
      {
        step: 2,
        title: 'Physiological Hyaluronan Binding Selection',
        duration: '1 Hour prior to injection',
        description: 'Sperm placed on specialized PICSI culture dishes to isolate bound, genetically competent spermatozoa with lowest DNA fragmentation.',
        clinicalMilestone: 'Mature sperm with intact DNA picked',
        iconName: 'CheckCircle'
      },
      {
        step: 3,
        title: 'Ultra-Precision Micromanipulation Injection',
        duration: 'Embryology Lab Session',
        description: 'Individual sperm micro-injected into the cytoplasm of each mature metaphase-II oocyte using precision glass micropipettes.',
        clinicalMilestone: 'Successful cellular fusion initiated',
        iconName: 'Microscope'
      }
    ],
    embryologyTech: ['ZyMōt™ Microfluidic Chips', 'Narishige Micromanipulators', 'PICSI® Hyaluronic Receptors'],
    bannerImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Male Infertility Solution', 'High DFI Correction', 'Pristine DNA']
  },
  {
    id: 'egg-freezing',
    title: 'Social & Medical Egg Freezing (Cryopreservation)',
    shortDesc: 'Lock in your peak reproductive biological clock with ultra-rapid flash vitrification for future family planning.',
    slug: 'egg-freezing',
    successRate: '98.2% post-thaw survival rate',
    duration: '12 – 14 Days',
    idealFor: [
      'Women seeking to delay childbearing for career or life goals',
      'Women diagnosed with endometriosis or low ovarian reserve',
      'Prior to chemotherapy, radiation, or pelvic surgeries',
      'Family history of premature ovarian insufficiency (POI)'
    ],
    keyHighlights: [
      'Cryotop® ultra-rapid flash vitrification prevents ice-crystal damage',
      'Indefinite biological preservation in liquid nitrogen at -196°C',
      'Personalized DOR / Dual-stimulation protocols for maximum oocyte yield',
      'Transparent 5-year and 10-year storage guarantees'
    ],
    detailedOverview: 'Freezing your eggs at Lahari empowers you to pause your biological clock. Eggs retrieved in your 20s and early 30s maintain their genetic integrity and high chromosomal normalcy, giving you the same high conception odds whenever you choose to start a family in the future.',
    steps: [
      {
        step: 1,
        title: 'Ovarian Reserve Assessment & Personalized Plan',
        duration: 'Initial Consult',
        description: 'AMH blood testing and baseline follicle ultrasound to calculate projected egg yield.',
        clinicalMilestone: 'Custom stimulation dose planned',
        iconName: 'Activity'
      },
      {
        step: 2,
        title: 'Hormone Stimulation & Monitoring',
        duration: '10 – 12 Days',
        description: 'Gentle self-administered daily hormone injections with ultrasound check-ins every 2–3 days.',
        clinicalMilestone: 'Multiple mature follicles develop',
        iconName: 'TrendingUp'
      },
      {
        step: 3,
        title: '15-Minute Gentle Retrieval & Vitrification',
        duration: 'Day 13',
        description: 'Painless retrieval under light anesthesia. Mature oocytes are immediately vitrified in liquid nitrogen tanks.',
        clinicalMilestone: 'Oocytes securely cryopreserved in 24/7 monitored tanks',
        iconName: 'Shield'
      }
    ],
    embryologyTech: ['Cryotop® Safety Vitrification', '24/7 Automated Temperature Alarms', 'RFID Tagged Storage System'],
    bannerImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80',
    tags: ['Fertility Preservation', 'Future Freedom', 'High Survival Rate']
  },
  {
    id: 'pgt-a-genetics',
    title: 'PGT-A & PGT-M Embryo Genetic Screening',
    shortDesc: 'Next-Generation Sequencing (NGS) to verify 24-chromosome normalcy before transfer, eliminating recurrent miscarriage risk.',
    slug: 'pgt-genetics',
    successRate: 'Reduces miscarriage risk by 74%',
    duration: 'Biopsy on Day 5, Results in 10 Days',
    idealFor: [
      'Women aged 35 and older',
      'Couples with 2 or more unexplained miscarriages',
      'Previous failed IVF implantation with good-looking embryos',
      'Carriers of single-gene hereditary disorders (Thalassemia, SMA, Cystic Fibrosis)'
    ],
    keyHighlights: [
      'Next-Gen Sequencing (NGS) of 5–8 trophectoderm cells (non-inner cell mass)',
      'Identifies aneuploidies (Down Syndrome, Turner, Klinefelter, Edwards)',
      'Enables single euploid embryo transfer with >80% live birth odds'
    ],
    detailedOverview: 'Many embryos that look visually flawless under a microscope carry chromosomal number abnormalities (aneuploidy). PGT-A tests the DNA of the developing embryo before implantation, guaranteeing that only genetically balanced, healthy embryos are chosen for transfer.',
    steps: [
      {
        step: 1,
        title: 'Laser-Assisted Trophectoderm Biopsy',
        duration: 'Day 5 or 6 Blastocyst',
        description: 'A few cells are gently biopsied from the outer trophectoderm layer (placental precursor), leaving the baby-forming inner cell mass completely untouched.',
        clinicalMilestone: 'Biopsy sample prepared for genetic sequencing',
        iconName: 'Zap'
      },
      {
        step: 2,
        title: 'Next-Generation Sequencing (NGS) Analysis',
        duration: '7 – 10 Days',
        description: 'Comprehensive high-resolution sequencing of all 23 pairs of human chromosomes to detect duplications, deletions, and mosaicism.',
        clinicalMilestone: 'Full Genomic Euploidy Report delivered',
        iconName: 'FileText'
      },
      {
        step: 3,
        title: 'Targeted Euploid Frozen Embryo Transfer',
        duration: 'Prepared Next Cycle',
        description: 'Transferring only confirmed chromosomally normal euploid embryo under optimized hormonal conditions.',
        clinicalMilestone: 'Peak live-birth rate achieved',
        iconName: 'Award'
      }
    ],
    embryologyTech: ['Illumina MiSeq NGS Platform', 'Hamilton Thorne Laser System', 'Bio-Informatics Mosaicism AI'],
    bannerImage: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80',
    tags: ['Genetic Diagnostics', 'Zero Aneuploidy', 'Miscarriage Prevention']
  },
  {
    id: 'male-infertility-microtese',
    title: 'Male Infertility & Advanced Micro-TESE',
    shortDesc: 'Surgical sperm retrieval under 25x surgical operating microscopes for non-obstructive azoospermia and testicular failure.',
    slug: 'micro-tese-andrology',
    successRate: '62.8% sperm retrieval in zero-sperm cases',
    duration: 'Day-Care Surgical Procedure',
    idealFor: [
      'Non-obstructive azoospermia (zero sperm in semen analysis)',
      'Severe testicular failure or post-chemotherapy azoospermia',
      'Y-chromosome microdeletions or Klinefelter syndrome',
      'Klinefelter syndrome parenthood goals'
    ],
    keyHighlights: [
      'High-magnification Zeiss operating microscope locates dilated seminiferous tubules',
      'Minimal tissue excision preserving natural testosterone production',
      'Simultaneous andrology lab search with immediate cryopreservation'
    ],
    detailedOverview: 'Even in men diagnosed with zero sperm (azoospermia), isolated pockets of active sperm production often exist inside specific testicular tubules. Our andrology surgeons use operating microscopes at 25x magnification to identify and harvest these viable sperm cells.',
    steps: [
      {
        step: 1,
        title: 'Comprehensive Andrology & Hormone Mapping',
        duration: 'Pre-Procedure',
        description: 'FSH, LH, Total Testosterone, Inhibin-B, and Y-chromosome microdeletion testing.',
        clinicalMilestone: 'Surgical candidacy confirmed',
        iconName: 'Activity'
      },
      {
        step: 2,
        title: 'Micro-Dissection TESE Procedure',
        duration: '1.5 – 2 Hours (Daycare)',
        description: 'Microscopic inspection of testicular tissue to harvest only full, healthy seminiferous tubules.',
        clinicalMilestone: 'Viable sperm cells retrieved and confirmed',
        iconName: 'Microscope'
      },
      {
        step: 3,
        title: 'Cryopreservation & ICSI Preparation',
        duration: 'Immediate',
        description: 'Sperm is frozen or utilized for immediate ICSI with partner eggs.',
        clinicalMilestone: 'Biological fatherhood enabled',
        iconName: 'Heart'
      }
    ],
    embryologyTech: ['Carl Zeiss Opmi Vario 700 Microscope', 'Liquid Nitrogen Cell Freezing', 'Micro-Pipette Tubule Extractor'],
    bannerImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
    tags: ['Azoospermia Solution', 'Micro-Surgical Excellence', 'Biological Fatherhood']
  },
  {
    id: 'iui-intrauterine',
    title: 'Intrauterine Insemination (IUI)',
    shortDesc: 'Gentle, non-invasive first-line fertility treatment with washed concentrated motile sperm placed directly in the uterus.',
    slug: 'iui-insemination',
    successRate: '22 – 28% per cycle',
    duration: '14 Days',
    idealFor: [
      'Mild male factor infertility or borderline sperm parameters',
      'Cervical hostility or hostile cervical mucus',
      'Ovulatory disorders responsive to oral ovulation agents',
      'Donor sperm insemination'
    ],
    keyHighlights: [
      'Natural or mild letrozole/clomiphene ovulation tracking',
      'Double-wash gradient sperm enrichment',
      'Completely painless 5-minute in-office procedure'
    ],
    detailedOverview: 'IUI is an affordable and non-invasive starting point for young couples with open fallopian tubes and moderate sperm parameters. By timing insemination to exact ovulation, millions of concentrated motile sperm bypass the cervical barrier.',
    steps: [
      {
        step: 1,
        title: 'Ovulation Induction & Follicular Scan',
        duration: 'Days 2 – 12',
        description: 'Oral fertility tablets and serial ultrasound tracking to measure dominant follicle growth.',
        clinicalMilestone: 'Follicle reaches 18mm trigger size',
        iconName: 'Calendar'
      },
      {
        step: 2,
        title: 'hCG Trigger & Sperm Wash',
        duration: '36 Hours Prior',
        description: 'hCG trigger injection to schedule precise ovulation. Semen sample is washed to concentrate the highest-motility sperm.',
        clinicalMilestone: 'Enriched sperm prepared for transfer',
        iconName: 'Filter'
      },
      {
        step: 3,
        title: 'Painless Intrauterine Insemination',
        duration: '5 Minutes',
        description: 'Catheter placement directly inside uterine cavity without anesthesia.',
        clinicalMilestone: 'Insemination complete',
        iconName: 'CheckCircle'
      }
    ],
    embryologyTech: ['Sperm Wash Centrifugation', 'Ultrasound Guided Catheter', 'Enriched Motility Media'],
    bannerImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    tags: ['First-Line Option', 'Affordable & Gentle', 'Non-Invasive']
  }
];
