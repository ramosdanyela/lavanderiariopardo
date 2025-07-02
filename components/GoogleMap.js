const GoogleMap = () => {
    return (
      <div className="relative w-full h-[400px] md:h-[400px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7398377.728127758!2d-58.36609692817227!3d-25.119149313299264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948435c86834dd87%3A0x2a52a155fea02d48!2sLavanderia%20Rio%20Pardo!5e0!3m2!1spt-BR!2sbr!4v1747701396793!5m2!1spt-BR!2sbr" 
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  };
  
  export default GoogleMap;
  