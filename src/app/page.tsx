import styles from "./styles/rainworks-software.module.css";
import NurtureIcon from "./icon.png";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <a href="https://github.com/rainworks-software/nurture" target="_blank">
          <img className="w-20 h-20 md:w-48 md:h-48" src={NurtureIcon.src} />
        </a>
        <h1 className="text-3xl md:text-8xl font-bold">nurture.app</h1>
        <span className="md:text-2xl mt-0.5">A project by <a className={styles['rainworks-software']} href="https://github.com/rainworks-software" target="_blank">RainWorks Software</a>.</span>
        <span className="mt-4">More to come soon.</span>
      </div>
    </>
  );
}
