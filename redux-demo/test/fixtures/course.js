export function createCourse(id = 1, title='New Course') {
  return {
    id: `new-course-${id}`,
    watchHref: `http://learn-and-repeat/new-course-${id}`,
    title,
    authorId: 1,
    length: 180,
    category: 'Growth'
  };
}

export function createCourses(num = 3) {
  const result = [];
  for (let index = 0; index < num; index++) {
    result.push(createCourse(index));
  }
  return result;
}
