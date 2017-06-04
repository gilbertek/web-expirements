export const CREATE_COURSE = 'CREATE_COURSE';

export function createCourse(course) {
  return { type: CREATE_COURSE, course };
}
