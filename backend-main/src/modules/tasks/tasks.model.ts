export interface Task {
  _id?: any;
  title: string;
  description?: string;
  projectId: string;
  createdBy: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}