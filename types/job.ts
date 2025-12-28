export type JobStatus = "draft";

export type Job = {
  id: number;
  title: string;
  status: JobStatus;
};
