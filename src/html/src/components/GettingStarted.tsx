import { useEffect, useState } from "react";
import "./GettingStarted.scss";

export default function GettingStarted() {
    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        async function fetchImages() {
            const images = [];
            images.push((await import("../../../images/getting_started_1.png")).default)
            images.push((await import("../../../images/getting_started_2.png")).default)
            setImages(images)
        }
        fetchImages()
    }, [])
  return (
    <div className="getting_started" id = "features">
      <div className="getting_started__header">
        <div className="getting_started__header__title">
          <div>Getting Started Is <span id="black">Easy</span></div>
        </div>
        <div className="getting_started__header__subtitle">
          Recenter is free to add to your browser, and setup only takes few
          moments.
        </div>
      </div>
      <div className="getting_started__image">
        <div className="getting_started__image__container">
            <img src={images[0]} alt="Getting Started" />
            <img src={images[1]} alt="Getting Started" />
        </div>
      </div>
    </div>
  );
}
