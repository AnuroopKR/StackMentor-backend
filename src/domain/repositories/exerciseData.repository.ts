import { ExerciseData } from "../entities/exerciseData.entity";

export type createDataProps = Pick<ExerciseData, "title" | "data">;

export interface IExerciseDataRepository {
  createData(exerciseData: createDataProps): Promise<ExerciseData>;
  findData(id: string): Promise<ExerciseData | null>;
}
