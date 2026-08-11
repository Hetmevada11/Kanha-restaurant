function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918160815662?text=Hello%20Kanha%20Restaurant,%20I%20want%20to%20book%20a%20table."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-5 right-5
        md:bottom-6 md:right-6
        bg-green-500
        text-white
        w-14 h-14
        md:w-16 md:h-16
        rounded-full
        flex items-center justify-center
        shadow-2xl
        hover:bg-green-600
        hover:scale-110
        transition-all duration-300
        z-50
        text-2xl md:text-3xl
      "
    >
      💬
    </a>
  );
}

export default WhatsAppButton;