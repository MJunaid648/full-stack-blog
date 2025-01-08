import { IKImage } from "imagekitio-react";

const Image = ({ src, className, alt, w, h }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      alt={alt}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      className={className}
      width={w}
      height={h}
      transformation={[{ width: w, height: h }]}
    />
  );
};

export default Image;
