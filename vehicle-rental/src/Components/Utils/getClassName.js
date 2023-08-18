export const getClassname = (isActive) => {
  return isActive === true
    ? 'p-4 w-fit min-w-[100px] border-b-2 border-blue-600 text-blue-600 '
    : 'p-4 w-fit min-w-[100px] border-b-2 border-transparent hover:border-gray-300';
};
