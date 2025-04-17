export default function Footer() {
  return (
    <footer className="relative w-full bg-cyberpunk-dark py-8 px-4 flex flex-col items-center">
      {/* Contact Email */}
      <a
        href="mailto:justinjegan077@gmail.com"
        className="flex items-center gap-2 text-cyberpunk-yellow font-poppins text-lg hover:text-cyberpunk-pink transition-colors mb-3"
      >
        {/* Email Icon */}
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.99l7.29 6.71c.39.36 1.02.36 1.41 0L20 8.99V18H4z"/></svg>
        justinjegan077@gmail.com
      </a>
      {/* Social Links */}
      <div className="flex gap-8 mt-2 mb-4">
        {/* LinkedIn (icon only) */}
        <a
          href="https://www.linkedin.com/in/justin-jegan-92278217b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-cyberpunk-purple hover:text-cyberpunk-pink font-poppins text-base transition-colors"
          aria-label="LinkedIn"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.064-1.868-3.064-1.868 0-2.154 1.459-2.154 2.967v5.701h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z"/></svg>
        </a>
        {/* WhatsApp (icon only, click to open chat) */}
        <a
          href="https://wa.me/917010444676"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-cyberpunk-green hover:text-cyberpunk-pink font-poppins text-base transition-colors"
          aria-label="WhatsApp"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 32 32"><path d="M16.001 3.2c-7.067 0-12.8 5.733-12.8 12.8 0 2.283 0.608 4.523 1.76 6.464l-1.856 6.272 6.464-1.792c1.941 1.067 4.203 1.728 6.432 1.728h0.005c7.067 0 12.8-5.733 12.8-12.8s-5.733-12.8-12.8-12.8zM16 27.733c-2.027 0-4.011-0.523-5.781-1.515l-0.413-0.229-3.84 1.067 1.056-3.84-0.267-0.419c-1.099-1.733-1.678-3.733-1.678-5.797 0-6.065 4.935-11 11-11s11 4.935 11 11c0 6.065-4.935 11-11 11zM23.36 20.267c-0.363-0.181-2.155-1.067-2.488-1.189-0.333-0.123-0.576-0.181-0.819 0.181s-0.941 1.189-1.155 1.435c-0.213 0.245-0.427 0.277-0.789 0.093-0.363-0.181-1.536-0.565-2.927-1.803-1.082-0.965-1.813-2.155-2.029-2.517-0.213-0.363-0.023-0.56 0.16-0.741 0.165-0.164 0.363-0.427 0.544-0.64 0.181-0.213 0.241-0.363 0.363-0.605 0.123-0.245 0.061-0.459-0.03-0.64-0.091-0.181-0.819-1.979-1.123-2.709-0.296-0.711-0.597-0.613-0.819-0.623-0.213-0.011-0.459-0.013-0.704-0.013s-0.64 0.091-0.976 0.459c-0.333 0.363-1.28 1.251-1.28 3.043 0 1.792 1.309 3.523 1.491 3.765 0.181 0.245 2.563 3.915 6.208 5.339 0.867 0.373 1.541 0.595 2.067 0.763 0.867 0.277 1.659 0.237 2.285 0.144 0.698-0.104 2.155-0.877 2.459-1.723 0.304-0.845 0.304-1.571 0.213-1.723-0.091-0.149-0.333-0.245-0.696-0.427z"/></svg>
        </a>
        {/* Discord (icon only, click to open handle) */}
        <a
          href="https://discord.com/users/.virez"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-cyberpunk-cyan hover:text-cyberpunk-pink font-poppins text-base transition-colors"
          aria-label="Discord"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.163-.385-.405-.874-.617-1.249a.077.077 0 0 0-.079-.037c-1.471.249-3.222.822-4.885 1.515a.07.07 0 0 0-.032.027C.533 9.045-.319 13.579.099 18.057a.082.082 0 0 0 .031.056c2.052 1.507 4.042 2.422 5.992 3.029a.077.077 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.104c-.652-.247-1.27-.549-1.872-.892a.077.077 0 0 1-.008-.127c.126-.094.252-.192.371-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .078.009c.119.099.245.198.372.291a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.893.076.076 0 0 0-.04.104c.36.699.772 1.364 1.225 1.993a.076.076 0 0 0 .084.028c1.961-.606 3.951-1.521 6.002-3.028a.077.077 0 0 0 .031-.056c.5-5.177-.838-9.673-3.548-13.661a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/></svg>
        </a>
      </div>
      {/* Copyright */}
      <p className="mt-3 text-cyberpunk-gray text-xs font-poppins">&copy; {new Date().getFullYear()} Jegan / Virez</p>
    </footer>
  );
}
