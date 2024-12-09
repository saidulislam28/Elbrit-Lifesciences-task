import Image from 'next/image';

const Header = () => {
  return (
    <div className='max-w-7xl mx-auto flex  items-start'>
      <Image src="/image.jpg" alt="header image" width={200} height={300} />
    </div>
  );
};

export default Header;
