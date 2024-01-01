import Image from 'next/image'; // Import the Image component from the 'next/image' package

export default function Page() {
  return (
    <>
      <p>Customers Page</p>
      <Image src="/opengraph-image.png" alt="nothin" width={500} height={500} />
    </>
  );
}
