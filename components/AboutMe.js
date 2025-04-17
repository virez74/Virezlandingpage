export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center modern-section border-0">
      <div className="md:w-1/3 w-full flex justify-center mb-8 md:mb-0">
        <img
          src="/images/my.png"
          alt="About Me"
          className="w-48 h-58 rounded-2xl border-4 border-modern-purple shadow-modern object-cover"
        />
      </div>
      <div className="md:w-2/3 w-full md:pl-12 text-modern-text">
        <h2 className="text-3xl font-cyber font-bold mb-4 text-modern-purple uppercase tracking-widest drop-shadow-neon">About Me</h2>
        <p className="text-lg font-cyber mb-4 text-modern-text">
          Halo, im Jegan AKA Virez. Consider this as my vague portfolio Im an project coordinator, Have handled multiple project on PHP,WP,Sharepoint,on-premises,JS,NextJS etc. Always wondered how these developer works on those maniac looking codes, It make my head spin zzZZZ, Huge respect....For my Full professional timeline refer my LindedIN Profile below 🡻
        </p>
        <p className="text-base text-modern-purple font-cyber">
          Eventho i dont have an Hands on experiece in codding with help of multiple AI and coordinating it pros i was able bring out my creativity to online, Honestly i was lazy to write down score using pen and paper so decided to make and website it took an hr that how powerful AI can be if used right, This is my current hobby to Create my own solution for personal and work needs. Life is beautiful just like my wife ;) ⋆.˚🦋༘⋆
        </p>
      </div>
    </section>
  );
}
