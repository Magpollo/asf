import bgPattern from '../assets/Pattern.png';
import ButtonOne from '../components/ShareComponents/ButtonOne';
import mainMenu from '../assets/ASF_Menu.pdf';
import lateNightMenu from '../assets/ASF_Late_night_menu.pdf';

const Menus = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgPattern})`,
        width: '100%',
        zIndex: '-1',
        marginTop: '-20vh',
      }}
      className="mx-auto h-screen"
    >
      <div className="pt-40 text-primary w-full h-fit">
        <div className="mt-10 container mx-auto rounded-lg p-5">
          <h2
            style={{ fontFamily: "'Jelytta', sans-serif" }}
            className="text-4xl font-bold text-center my-5"
          >
            Our Menu Highlights
          </h2>
          <div className="flex flex-col text-black justify-around w-fit mx-auto">
            <a
              href={mainMenu}
              target="_blank"
              rel="noreferrer"
            >
              <ButtonOne>Main Menu</ButtonOne>
            </a>
            <a
              href={lateNightMenu}
              target="_blank"
              rel="noreferrer"
            >
              <ButtonOne>Late Night Menu</ButtonOne>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menus;
