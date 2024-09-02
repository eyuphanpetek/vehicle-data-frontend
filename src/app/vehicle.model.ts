export interface Vehicle {
  id: string; // Adjust types according to your backend model
  licensePlate: string;
  organizationName: string;
  passageDateTime: string;
  speed: number;
  measurementAccuracy: number;
  radiationLevel: number;
  prePassageRadiationLevel: number;
  postPassageRadiationLevel: number;
}
