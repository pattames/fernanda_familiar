import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-banner p-4 pb-1 bg-center lg:bg-fit fade-in">
      <div>
        <Image
          src="/logo-ff-blanco.png"
          width={500}
          height={500}
          alt="Logo Fernanda Familiar"
          className="bg-gray-400 bg-opacity-30 rounded-md p-2 mx-auto"
        />
        <h1 className="text-center my-4 bg-red-600 text-white max-w-44 p-2 font-bold mx-auto">
          ÚLTIMAS NOTICIAS
        </h1>
      </div>
    </div>
  );
}
