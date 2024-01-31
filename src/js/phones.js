export default function transformNunber(number) {
  const numberGroups = /(?<country>\+\d+)(\s|\s\()(?<code>\d{3})(\)\s|\s)(?<num1>\d{3}).?(?<num2>\d{2}).?(?<num3>\d{2})/.exec(number.replace(/^8 /, '+7 '));
  return Object.values(numberGroups.groups).join('');
}
