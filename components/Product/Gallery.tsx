const Gallery = () => {
  // Placeholder para as imagens do produto
  const images = [
    "https://acerstore.vtexassets.com/arquivos/ids/163373-800-auto?v=638513176412600000&width=800&height=auto&aspect=true",
    "https://www.saldaodainformatica.com.br/themes/classic/assets/img/categorias/notebooki5.webp",
    "https://imgs.casasbahia.com.br/55061758/1g.jpg",
  ];

  return (
    <div className="mb-4">
      <div className="w-full h-64 bg-gray-200 mb-2">
        <img
          src={images[0]}
          alt="Product"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex space-x-2">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Product ${index + 1}`}
            className="w-20 h-20 object-cover cursor-pointer hover:opacity-75"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
