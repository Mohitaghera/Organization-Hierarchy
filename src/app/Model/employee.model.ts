export interface Employee {
  id: number;
  name: string;
  managerId: number | null;
  imageUrl: string;
  email: string;
  subordinates: number[] | null;
  designation: string;
  expanded?: boolean;
  children?: Employee[];
  level?:number;
}
