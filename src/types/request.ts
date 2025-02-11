export type CreateAllocationRequest = {
  project_id: number;
  phase_id: number | null;
  task_id: number | null;
  status: string | null;
  notes: string | null;
  assigned_person_ids: number[];
  time_type: string | null;
  hours_per_day: number | string | null;
  start_time: string | null;
  end_time: string | null;
  start_date: string;
  end_date: string;
  repeat_type: string;
  repeat_until_date: string | null;
};

export type UpdateAllocationRequest = CreateAllocationRequest;
