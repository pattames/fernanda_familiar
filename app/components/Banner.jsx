import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-banner p-4 pb-1">
      <div>
        <Image
          src="/logo-ff-blanco.png"
          width={500}
          height={500}
          alt="Logo Fernanda Familiar"
          className="bg-gray-400 bg-opacity-30 rounded-md p-2"
        />
        <h1 className="text-center my-4 bg-red-600 text-white max-w-44 p-2 font-bold rounded-md mx-auto">
          ÚLTIMAS NOTICIAS
        </h1>
      </div>
    </div>
  );
}
