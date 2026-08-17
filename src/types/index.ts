export interface Doctor {
  id: string;
  name: string;
  title: string;
  designation: string;
  experienceYears: number;
  qualifications: string[];
  awards: string[];
  successRate: number; // e.g. 88.4%
  languages: string[];
  image: string;
  videoIntroUrl?: string;
  bio: string;
  specialities: string[];
  availableToday: boolean;
  nextSlot: string;
  consultationFee: number;
  rating: number;
  reviewCount: number;
  centre: string;
  icmrRegistrationNumber: string;
}

export interface TreatmentStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  clinicalMilestone: string;
  iconName: string;
}

export interface Treatment {
  id: string;
  title: string;
  shortDesc: string;
  slug: string;
  successRate: string;
  duration: string;
  idealFor: string[];
  keyHighlights: string[];
  steps: TreatmentStep[];
  detailedOverview: string;
  embryologyTech: string[];
  bannerImage: string;
  tags: string[];
}

export interface SuccessStory {
  id: string;
  coupleName: string;
  age: string;
  location: string;
  clinicalChallenge: string;
  treatmentReceived: string;
  doctorName: string;
  timelineMonths: number;
  quote: string;
  fullStory: string;
  babyNames?: string;
  year: string;
  image: string;
  verifiedTag: string;
}

export interface CenterLocation {
  id: string;
  city: string;
  state: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  chiefDoctor: string;
  timing: string;
  distanceKm?: number;
  facilities: string[];
  mapEmbedUrl: string;
  googleRating: number;
  reviewsCount: number;
}

export interface CostPackage {
  id: string;
  name: string;
  category: 'IUI' | 'IVF' | 'ICSI' | 'Egg Freezing' | 'PGT-A';
  basePrice: number;
  emiPerMonth: number;
  tenureMonths: number;
  discountPercentage?: number;
  isPopular?: boolean;
  inclusions: string[];
  freePerks: string[];
  recommendedFor: string;
  successRate: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'IVF Science' | 'Nutrition & Lifestyle' | 'Egg Freezing' | 'Male Fertility' | 'PCOS & Genetics';
  readTime: string;
  author: string;
  authorRole: string;
  date: string;
  coverImage: string;
  tags: string[];
  medicallyReviewedBy: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'IVF & ICSI' | 'Costs & EMI' | 'Egg Freezing' | 'Male Factor';
}

export interface BookingAppointment {
  id?: string;
  patientName: string;
  phone: string;
  email: string;
  city: string;
  doctorId?: string;
  centerId?: string;
  type: 'in_person' | 'video_consult';
  date: string;
  timeSlot: string;
  notes?: string;
  yearsTrying?: string;
  previousTreatments?: string;
  status?: 'confirmed' | 'pending';
}

export interface FertilityAssessmentInputs {
  femaleAge: number;
  yearsTrying: number;
  cycleRegularity: 'regular' | 'irregular' | 'pcos';
  amhLevel: 'unknown' | 'low' | 'normal' | 'high';
  previousIVF: number;
  maleFactorConcern: boolean;
  lifestyleSmokingStress: boolean;
}

export interface FertilityAssessmentResult {
  score: number; // 0-100
  estimatedSuccessCycle1: number;
  cumulativeSuccess3Cycles: number;
  recommendedPathway: string;
  protocolDetails: string;
  recommendedTests: string[];
  doctorSpecialistRecommendation: string;
}
