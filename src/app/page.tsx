
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
     <div className="flex bg-[#FAF4F4]">
        <div className="p-20">
          <Image src="/img/banner2.png" alt="banner image" height={1641} width={1092} />
          <h2 className="text-2xl font-semibold">Side Table</h2>
          <Link href="#" className="mt-2 inline-block text-green-500 underline">View More</Link>
        </div>
        <div className="p-20">
          <Image src="/img/banner3.png" alt="banner image" height={1055} width={1585} />
          <h2 className="text-2xl font-semibold">Side Table</h2>
          <Link href="#" className="mt-2 inline-block text-green-500 underline">View More</Link>
        </div>
      </div>  
    </div>  
  );  
}


