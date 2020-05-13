import axios from "axios";

export async function getStudents() {
  const {data} = await axios.get('https://www.hatchways.io/api/assessment/students')
  return data
}

export function numToString(str) {
  return parseInt(str)
}

export function getAverage(nums) {
  nums = nums.map(num => numToString(num))
  return nums.reduce((a, b) => (a + b)) / nums.length;
}
