import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <Image src="/image.jpg" alt="header image" width={200} height={300} />
    </div>
  );
};

export default Header;
