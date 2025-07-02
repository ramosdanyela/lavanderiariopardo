const GoogleMap = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[400px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7856.58057186453!2d-53.75954350567061!3d-20.46231998071519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948435c86834dd87%3A0x2a52a155fea02d48!2sLavanderia%20Rio%20Pardo!5e0!3m2!1spt-BR!2sbr!4v1751495871284!5m2!1spt-BR!2sbr"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;
