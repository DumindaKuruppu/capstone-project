import React, {useContext} from "react";
import Image from "../components/Image";
import { Context } from "../Context";
import {getClass} from "../utils";

function Photos() {
  const { allPhotos } = useContext(Context);

  const images = allPhotos.map((img, id) => (
    <Image key={img.id} img={img} alt={img.title} className={getClass(id)} />
  ))

  return (
    <div>
      <main className="photos">
            {images}
      </main>
    </div>
  );
}

export default Photos;