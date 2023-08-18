const ShimmerCard = () => {
  return (
    <div className='shadow rounded-md p-4 max-w-sm w-full mx-auto'>
      <div className='animate-pulse'>
        <div className='bg-gray-200 h-20 w-full'></div>
        <div className='flex-1 space-y-6 py-1'>
          <div className='h-2 bg-gray-200 rounded'></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-2 bg-gray-200 rounded col-span-2'></div>
              <div className='h-2 bg-gray-200 rounded col-span-1'></div>
            </div>
            <div className='h-2 bg-gray-200 rounded'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShimmerCard;
