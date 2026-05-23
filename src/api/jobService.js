import {request} from './client';

export async function getJobs() {
  const data = await request('/api/v1/jobs');
  return data;
}

export async function getEducationLevelList() {
  const data = await request('/api/v1/educationLevelList');
  return data;
}

export async function getSalaryLevelList() {
  const data = await request('/api/v1/salaryLevelList');
  return data;
}